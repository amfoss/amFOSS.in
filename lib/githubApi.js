// GitHub API helper for amFOSS Club Footprint

const AMFOSS_ORG = 'amfoss';
const MEMBERS_DATA_URL = 'https://raw.githubusercontent.com/amfoss/member-directory/main/members.json';
const ALUMNI_DATA_URL = 'https://raw.githubusercontent.com/amfoss/member-directory/main/alumni.json';

export function getStoredPat() {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem('amfoss_gh_pat') || '';
}

export function setStoredPat(token) {
  if (typeof window === 'undefined') return;
  if (token) {
    localStorage.setItem('amfoss_gh_pat', token);
  } else {
    localStorage.removeItem('amfoss_gh_pat');
  }
}

export function getHeaders(pat = '') {
  const token = pat || getStoredPat();
  const headers = {
    Accept: 'application/vnd.github.v3+json',
  };
  if (token) {
    headers.Authorization = `token ${token}`;
  }
  return headers;
}

// Fetch GitHub Org Info
export async function fetchOrgDetails(org = AMFOSS_ORG, pat = '') {
  try {
    const res = await fetch(`https://api.github.com/orgs/${org}`, {
      headers: getHeaders(pat),
    });
    if (!res.ok) {
      if (res.status === 403) throw new Error('RATE_LIMIT');
      throw new Error(`Failed to fetch org details (${res.status})`);
    }
    return await res.json();
  } catch (err) {
    console.error('fetchOrgDetails error:', err);
    throw err;
  }
}

// Fetch Org Repositories
export async function fetchOrgRepos(org = AMFOSS_ORG, pat = '') {
  try {
    const res = await fetch(`https://api.github.com/orgs/${org}/repos?per_page=100&sort=pushed`, {
      headers: getHeaders(pat),
    });
    if (!res.ok) {
      if (res.status === 403) throw new Error('RATE_LIMIT');
      throw new Error(`Failed to fetch org repos (${res.status})`);
    }
    const repos = await res.json();
    return Array.isArray(repos) ? repos : [];
  } catch (err) {
    console.error('fetchOrgRepos error:', err);
    throw err;
  }
}

// Fetch Member Directory JSON (from GitHub raw)
export async function fetchDirectoryMembers() {
  try {
    const [memRes, alumRes] = await Promise.all([
      fetch(MEMBERS_DATA_URL).catch(() => null),
      fetch(ALUMNI_DATA_URL).catch(() => null),
    ]);

    const members = memRes && memRes.ok ? await memRes.json() : [];
    const alumni = alumRes && alumRes.ok ? await alumRes.json() : [];

    return {
      members: Array.isArray(members) ? members : [],
      alumni: Array.isArray(alumni) ? alumni : [],
    };
  } catch (err) {
    console.error('fetchDirectoryMembers error:', err);
    return { members: [], alumni: [] };
  }
}

// Fetch Org Members from GitHub API
export async function fetchGithubOrgMembers(org = AMFOSS_ORG, pat = '') {
  try {
    const res = await fetch(`https://api.github.com/orgs/${org}/members?per_page=100`, {
      headers: getHeaders(pat),
    });
    if (!res.ok) {
      if (res.status === 403) return [];
      return [];
    }
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error('fetchGithubOrgMembers error:', err);
    return [];
  }
}

// Fetch member contributions (PRs & Issues) in the org
export async function fetchMemberContributions(username, org = AMFOSS_ORG, pat = '') {
  try {
    const headers = getHeaders(pat);
    const user = encodeURIComponent(username);
    const orgQuery = `org:${encodeURIComponent(org)}`;
    
    // Fetch all issues & PRs created by user
    const issuesUrl = `https://api.github.com/search/issues?q=author:${user}+${orgQuery}&per_page=100`;
    // Fetch merged PRs created by user
    const mergedUrl = `https://api.github.com/search/issues?q=author:${user}+is:pr+is:merged+${orgQuery}&per_page=100`;

    const [issuesRes, mergedRes] = await Promise.all([
      fetch(issuesUrl, { headers }),
      fetch(mergedUrl, { headers }),
    ]);

    if (issuesRes.status === 403 || mergedRes.status === 403) {
      throw new Error('RATE_LIMIT');
    }

    const issuesData = issuesRes.ok ? await issuesRes.json() : { items: [] };
    const mergedData = mergedRes.ok ? await mergedRes.json() : { items: [] };

    const items = issuesData.items || [];
    const mergedKeys = new Set(
      (mergedData.items || []).map((item) => {
        const repo = item.repository_url ? item.repository_url.split('/').slice(-2).join('/') : '';
        return `${repo}/${item.number}`;
      })
    );

    return {
      items,
      mergedKeys,
    };
  } catch (err) {
    console.error('fetchMemberContributions error:', err);
    throw err;
  }
}

// Fetch public GitHub organizations a user belongs to
export async function fetchUserOrgs(username, pat = '') {
  try {
    const headers = getHeaders(pat);
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/orgs`, { headers });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error('fetchUserOrgs error:', err);
    return [];
  }
}

// Fetch all open-source contributions (PRs & Issues) by a user across GitHub
export async function fetchOpenSourceContributions(username, pat = '') {
  try {
    const headers = getHeaders(pat);
    const user = encodeURIComponent(username);

    const allUrl = `https://api.github.com/search/issues?q=author:${user}+is:public&per_page=100`;
    const mergedUrl = `https://api.github.com/search/issues?q=author:${user}+is:pr+is:merged+is:public&per_page=100`;

    const [allRes, mergedRes] = await Promise.all([
      fetch(allUrl, { headers }),
      fetch(mergedUrl, { headers }),
    ]);

    if (allRes.status === 403 || mergedRes.status === 403) throw new Error('RATE_LIMIT');

    const allData = allRes.ok ? await allRes.json() : { items: [] };
    const mergedData = mergedRes.ok ? await mergedRes.json() : { items: [] };

    const items = allData.items || [];
    const mergedKeys = new Set(
      (mergedData.items || []).map((item) => {
        const repo = item.repository_url ? item.repository_url.split('/').slice(-2).join('/') : '';
        return `${repo}/${item.number}`;
      })
    );

    return { items, mergedKeys };
  } catch (err) {
    console.error('fetchOpenSourceContributions error:', err);
    throw err;
  }
}

// Helper to compute health score of a repo
export function computeRepoHealth(repo) {
  let score = 50;
  if (!repo) return score;

  // Stars & Forks boost
  score += Math.min(25, (repo.stargazers_count || 0) * 2 + (repo.forks_count || 0) * 3);

  // Recency of updates
  if (repo.pushed_at) {
    const daysSincePush = (Date.now() - new Date(repo.pushed_at).getTime()) / (1000 * 3600 * 24);
    if (daysSincePush < 7) score += 25;
    else if (daysSincePush < 30) score += 15;
    else if (daysSincePush < 90) score += 5;
    else score -= 15;
  }

  // Open issues penalty if huge
  if (repo.open_issues_count > 50) score -= 10;

  return Math.max(0, Math.min(100, Math.round(score)));
}

// Compute Bus Factor Risk
export function computeBusFactor(contributors = []) {
  if (!contributors || contributors.length === 0) {
    return { factor: 0, risk: 'low', percentTop: 0 };
  }
  const total = contributors.reduce((acc, c) => acc + (c.contributions || c.totalContribs || 1), 0);
  if (total === 0) return { factor: contributors.length, risk: 'low', percentTop: 0 };

  const sorted = [...contributors].sort(
    (a, b) => (b.contributions || b.totalContribs || 1) - (a.contributions || a.totalContribs || 1)
  );

  let count = 0;
  let currentSum = 0;
  for (const c of sorted) {
    count++;
    currentSum += c.contributions || c.totalContribs || 1;
    if (currentSum / total >= 0.5) break;
  }

  let risk = 'low';
  if (count <= 1) risk = 'critical';
  else if (count <= 2) risk = 'high';

  return {
    factor: count,
    risk,
    percentTop: Math.round((currentSum / total) * 100),
  };
}

// Export footprint metrics as CSV
export function exportFootprintCSV(orgName, repos, members) {
  let csv = `amFOSS Footprint Report - ${orgName}\n\n`;

  csv += `--- REPOSITORIES ---\nName,Language,Stars,Forks,Open Issues,Health Score,Updated At\n`;
  repos.forEach((r) => {
    const health = computeRepoHealth(r);
    csv += `"${r.name}","${r.language || 'N/A'}",${r.stargazers_count},${r.forks_count},${r.open_issues_count},${health},"${r.pushed_at || ''}"\n`;
  });

  csv += `\n--- MEMBERS & CONTRIBUTORS ---\nName,Username,Role,Contributions,GitHub URL\n`;
  members.forEach((m) => {
    csv += `"${m.name || m.login}","${m.login || m.username || ''}","${m.role || 'Member'}",${m.contributions || m.totalContribs || 0},"${m.html_url || `https://github.com/${m.login || m.username}`}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${orgName}_club_footprint.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
