"use client";
import React from "react";
import { motion } from "framer-motion";
import Title from "@/components/ui/title";
import { computeRepoHealth } from "@/lib/githubApi";

const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C++": "#f34b7d",
  C: "#555555",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  Shell: "#89e051",
  Dart: "#00B4AB",
  Vue: "#41b883",
  Ruby: "#701516",
};
const FALLBACK_COLORS = ["#D0A730", "#3b82f6", "#22c55e", "#ef4444", "#a855f7", "#ec4899", "#06b6d4"];

const slideLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};
const slideRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
};

const ReposAndLanguages = ({ repos = [] }) => {
  // --- Language distribution ---
  const langMap = {};
  repos.forEach((r) => {
    if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1;
  });
  const sortedLangs = Object.entries(langMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 7);
  const langTotal = sortedLangs.reduce((s, [, c]) => s + c, 0);

  // --- Top repos by health ---
  const topRepos = [...repos]
    .map((r) => ({ ...r, health: computeRepoHealth(r) }))
    .sort((a, b) => b.health - a.health)
    .slice(0, 5);

  return (
    <div className="mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16 py-16 text-white">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-16">
        {/* Left: Title + Languages */}
        <motion.div
          variants={slideLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-1"
        >
          <Title title="STACK" />
          <p className="text-white/60 mt-6 text-base leading-relaxed">
            Primary programming languages used across amFOSS repositories.
          </p>

          {langTotal > 0 && (
            <div className="mt-8 space-y-4">
              {sortedLangs.map(([lang, count], i) => {
                const pct = Math.round((count / langTotal) * 100);
                const color = LANG_COLORS[lang] || FALLBACK_COLORS[i % FALLBACK_COLORS.length];
                return (
                  <motion.div
                    key={lang}
                    variants={slideLeft}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full inline-block"
                          style={{ backgroundColor: color }}
                        />
                        {lang}
                      </span>
                      <span className="text-[#D0A730] font-bold">{pct}%</span>
                    </div>
                    <div className="h-[2px] bg-white/10 w-full">
                      <div
                        className="h-full transition-all duration-700"
                        style={{ width: `${pct}%`, backgroundColor: color }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Right: Top Repos */}
        <div className="md:col-span-2">
          <motion.div
            variants={slideRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10"
          >
            <Title title="TOP REPOSITORIES" />
          </motion.div>

          <div className="space-y-0 border-t border-white/10">
            {topRepos.map((repo, i) => (
              <motion.a
                key={repo.id || repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                variants={slideRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className="flex items-center justify-between py-6 border-b border-white/10 group hover:pl-2 transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-lg tracking-wide group-hover:text-[#D0A730] transition-colors">
                      {repo.name}
                    </span>
                    {repo.language && (
                      <span className="text-xs text-white/40 tracking-widest uppercase">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  {repo.description && (
                    <p className="text-white/50 text-sm mt-1 truncate">{repo.description}</p>
                  )}
                </div>
                <div className="flex items-center gap-6 ml-6 shrink-0 text-sm text-white/40">
                  <span>★ {repo.stargazers_count}</span>
                  <span className="text-[#D0A730] font-bold">{repo.health}/100</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReposAndLanguages;
