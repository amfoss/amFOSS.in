"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "@/components/ui/title";
import {
  fetchOpenSourceContributions,
  fetchUserOrgs,
  getStoredPat,
} from "@/lib/githubApi";
import { FiArrowLeft, FiExternalLink, FiRefreshCw, FiKey } from "react-icons/fi";

const slideLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};
const slideRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
};

const MemberFootprintDetail = ({ username, memberInfo, onBack, onRequestPat }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Open-source contributions
  const [osContributions, setOsContributions] = useState([]);
  const [osMergedKeys, setOsMergedKeys] = useState(new Set());

  // Organizations
  const [orgs, setOrgs] = useState([]);

  const [tabFilter, setTabFilter] = useState("ALL");

  const loadData = async () => {
    if (!username) return;
    setLoading(true);
    setError("");
    try {
      const pat = getStoredPat();
      const [osRes, orgsData] = await Promise.all([
        fetchOpenSourceContributions(username, pat),
        fetchUserOrgs(username, pat),
      ]);
      setOsContributions(osRes.items || []);
      setOsMergedKeys(osRes.mergedKeys || new Set());
      setOrgs(orgsData || []);
    } catch (err) {
      if (err.message === "RATE_LIMIT") {
        setError("GitHub API rate limit reached. Connect a Personal Access Token to continue.");
      } else {
        setError("Failed to fetch contributions from GitHub.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [username]);

  const pullRequests = useMemo(() => osContributions.filter((i) => i.pull_request), [osContributions]);
  const issues = useMemo(() => osContributions.filter((i) => !i.pull_request), [osContributions]);
  const mergedCount = useMemo(() => {
    return pullRequests.filter((pr) => {
      const repo = pr.repository_url ? pr.repository_url.split("/").slice(-2).join("/") : "";
      return osMergedKeys.has(`${repo}/${pr.number}`);
    }).length;
  }, [pullRequests, osMergedKeys]);

  const repoBreakdown = useMemo(() => {
    const map = {};
    osContributions.forEach((item) => {
      const repoName = item.repository_url ? item.repository_url.split("/").pop() : "unknown";
      map[repoName] = (map[repoName] || 0) + 1;
    });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [osContributions]);

  const filteredItems = useMemo(() => {
    if (tabFilter === "PRS") return pullRequests;
    if (tabFilter === "ISSUES") return issues;
    return osContributions;
  }, [osContributions, pullRequests, issues, tabFilter]);

  const resolveStatus = (item) => {
    if (item.pull_request) {
      const repo = item.repository_url ? item.repository_url.split("/").slice(-2).join("/") : "";
      if (osMergedKeys.has(`${repo}/${item.number}`)) return { label: "MERGED", gold: true };
      if (item.state === "open") return { label: "OPEN", gold: true };
      return { label: "CLOSED", gold: false };
    }
    return { label: item.state.toUpperCase(), gold: item.state === "open" };
  };

  const name = memberInfo?.name || username;
  const avatarUrl = memberInfo?.avatar_url || (username ? `https://github.com/${username}.png` : null);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16 pt-[120px] md:pt-[160px] pb-24">
        <motion.button
          variants={slideLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          onClick={onBack}
          className="flex items-center gap-2 text-white/50 hover:text-[#D0A730] transition-colors text-sm tracking-widest mb-8 uppercase"
        >
          <FiArrowLeft size={16} /> Back to Footprint
        </motion.button>

        {/* Glass-like grey background container encompassing profile & contributions */}
        <div className="bg-[#242424] bg-opacity-80 backdrop-blur-md border border-white/10 rounded-3xl p-6 xs:p-8 sm:p-12 shadow-2xl">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
            {/* ── Left: Profile ── */}
            <motion.div
              variants={slideLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt={name}
                  className="w-24 h-24 rounded-full object-cover border border-white/10 mb-6"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=252524&color=D0A730`;
                  }}
                />
              )}
              <Title title={name.toUpperCase()} />
              <p className="text-[#D0A730] mt-3 tracking-widest text-sm">@{username}</p>
              {memberInfo?.title && (
                <p className="text-white/40 mt-2 text-sm">{memberInfo.title}</p>
              )}

              {/* Stats */}
              <div className="mt-10 space-y-6 border-t border-white/10 pt-8">
                <div>
                  <p className="text-4xl font-bold text-[#D0A730]">{osContributions.length}</p>
                  <p className="text-white/40 text-xs tracking-widest uppercase mt-1">Total Contributions</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">{repoBreakdown.length}</p>
                  <p className="text-white/40 text-xs tracking-widest uppercase mt-1">Repos Touched</p>
                </div>
              </div>

              {/* GitHub link */}
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center gap-2 text-sm text-white/40 hover:text-[#D0A730] transition-colors tracking-widest uppercase"
              >
                View on GitHub <FiExternalLink size={14} />
              </a>

              {/* Organizations */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Organizations</p>
                {loading ? (
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="relative overflow-hidden bg-white/5 h-8 w-24">
                        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/8 to-transparent" />
                      </div>
                    ))}
                  </div>
                ) : orgs.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {orgs.map((org) => (
                      <a
                        key={org.login}
                        href={`https://github.com/${org.login}`}
                        target="_blank"
                        rel="noreferrer"
                        title={org.login}
                        className="group flex items-center gap-2 border border-white/10 px-3 py-1.5 hover:border-[#D0A730]/50 transition-all duration-200"
                      >
                        <img
                          src={org.avatar_url}
                          alt={org.login}
                          className="w-5 h-5 rounded-full object-cover"
                          onError={(e) => { e.target.style.display = "none"; }}
                        />
                        <span className="text-xs text-white/50 group-hover:text-[#D0A730] transition-colors tracking-wide">
                          {org.login}
                        </span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-white/20 text-xs">No public organizations</p>
                )}
              </div>
            </motion.div>

            {/* ── Right: Contributions Table ── */}
            <motion.div
              variants={slideRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2"
            >
              <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                <Title title="CONTRIBUTIONS" />
                <div className="flex items-center gap-2">
                  {["ALL", "PRS", "ISSUES"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTabFilter(t)}
                      className={`px-4 py-1.5 text-xs tracking-widest font-semibold transition-colors ${
                        tabFilter === t
                          ? "bg-[#D0A730] text-black"
                          : "text-white/40 border border-white/10 hover:text-white hover:border-white/30"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                  <button
                    onClick={loadData}
                    disabled={loading}
                    className="p-2 text-white/30 hover:text-[#D0A730] transition-colors"
                    title="Refresh"
                  >
                    <FiRefreshCw size={14} className={loading ? "animate-spin" : ""} />
                  </button>
                </div>
              </div>

              {/* Summary bar */}
              {!loading && !error && osContributions.length > 0 && (
                <div className="flex items-center gap-6 mb-6 text-xs tracking-widest">
                  <span className="text-white/30">
                    <span className="text-white font-semibold">{pullRequests.length}</span> PRs
                  </span>
                  <span className="text-[#D0A730]/60">
                    <span className="text-[#D0A730] font-semibold">{mergedCount}</span> MERGED
                  </span>
                  <span className="text-white/30">
                    <span className="text-white font-semibold">{issues.length}</span> Issues
                  </span>
                  <span className="text-white/30">
                    <span className="text-white font-semibold">{repoBreakdown.length}</span> Repos
                  </span>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="border-l-2 border-red-400 pl-4 py-3 mb-6">
                  <p className="text-red-400 text-sm">{error}</p>
                  <button
                    onClick={onRequestPat}
                    className="mt-3 flex items-center gap-2 text-xs text-white/50 hover:text-[#D0A730] transition-colors tracking-widest uppercase"
                  >
                    <FiKey size={13} /> Connect GitHub Token
                  </button>
                </div>
              )}

              {/* Loading skeleton */}
              {loading ? (
                <div className="border-t border-white/10 space-y-0">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between py-4 border-b border-white/10 gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="relative overflow-hidden bg-white/5 h-3 w-3/4">
                          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/8 to-transparent" />
                        </div>
                        <div className="relative overflow-hidden bg-white/5 h-2 w-1/3">
                          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/8 to-transparent" />
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-white/5 h-3 w-12 shrink-0">
                        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/8 to-transparent" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredItems.length === 0 ? (
                <p className="text-white/30 py-12 tracking-widest text-sm">NO CONTRIBUTIONS FOUND</p>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tabFilter}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="border-t max-h-[38rem] overflow-y-scroll scrollbar-none border-white/10"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none", overscrollBehavior: "contain" }}
                  >
                    {filteredItems.map((item, i) => {
                      const { label, gold } = resolveStatus(item);
                      const repoFull = item.repository_url
                        ? item.repository_url.split("/").slice(-2).join("/")
                        : "";
                      const repoName = repoFull.split("/").pop() || "unknown";
                      const orgName = repoFull.split("/")[0] || "";
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.02 * Math.min(i, 20) }}
                          className="flex items-start justify-between py-4 border-b border-white/10 gap-4 group hover:pl-1 transition-all duration-200"
                        >
                          <div className="flex-1 min-w-0 overflow-hidden">
                            <a
                              href={item.html_url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-sm text-white group-hover:text-[#D0A730] transition-colors font-medium line-clamp-1"
                            >
                              {item.title}
                            </a>
                            <div className="flex items-center gap-3 mt-1 flex-wrap">
                              {orgName && orgName !== repoName && (
                                <a
                                  href={`https://github.com/${orgName}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-xs text-[#D0A730]/60 hover:text-[#D0A730] transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {orgName}
                                </a>
                              )}
                              <span className="text-xs text-white/30">{repoName}</span>
                              <span className="text-xs text-white/20">#{item.number}</span>
                              <span className="text-xs text-white/20">{item.created_at?.slice(0, 10)}</span>
                            </div>
                          </div>
                          <span
                            className={`text-[10px] tracking-widest font-bold shrink-0 ${
                              gold ? "text-[#D0A730]" : "text-white/30"
                            }`}
                          >
                            {label}
                          </span>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberFootprintDetail;
