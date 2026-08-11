"use client";
import React from "react";
import { motion } from "framer-motion";
import Title from "@/components/ui/title";

const slideLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};
const slideRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
};

const OrgOverview = ({ repos = [], members = [] }) => {
  const totalRepos = repos.length;
  const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
  const totalForks = repos.reduce((s, r) => s + (r.forks_count || 0), 0);
  const now = Date.now();
  const activeRepos = repos.filter((r) => {
    if (!r.pushed_at) return false;
    return (now - new Date(r.pushed_at).getTime()) / (1000 * 3600 * 24) <= 90;
  }).length;

  const stats = [
    { label: "Repositories", value: totalRepos },
    { label: "Total Stars", value: totalStars.toLocaleString() },
    { label: "Total Forks", value: totalForks.toLocaleString() },
    { label: "Active (90d)", value: activeRepos },
  ];

  return (
    <div className="bg-[#242424] py-16">
      <div className="mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <motion.div
          variants={slideLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <Title title="OPEN SOURCE IMPACT" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={slideRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="flex flex-col items-center justify-center py-12 px-6 border border-white/10"
            >
              <span className="text-5xl md:text-6xl font-bold text-[#D0A730] tracking-tight">
                {stat.value}
              </span>
              <span className="text-white/60 text-sm mt-3 tracking-widest uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrgOverview;
