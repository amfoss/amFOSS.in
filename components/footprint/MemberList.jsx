"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Title from "@/components/ui/title";

const slideLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};
const slideUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const MemberList = ({ members = [], onSelectMember }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  const filtered = useMemo(() => {
    return members.filter((m) => {
      const name = (m.name || "").toLowerCase();
      const login = (m.login || m.username || "").toLowerCase();
      const role = (m.role || m.title || "").toLowerCase();
      const term = search.toLowerCase();
      const matchSearch = !search || name.includes(term) || login.includes(term);
      let matchFilter = true;
      if (filter === "MEMBERS") matchFilter = !role.includes("alumni");
      else if (filter === "ALUMNI") matchFilter = role.includes("alumni");
      return matchSearch && matchFilter;
    });
  }, [members, search, filter]);

  return (
    <div className="bg-[#242424] py-16">
      <div className="mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <div className="flex mb-10 justify-between items-center gap-6">
          <motion.div
            variants={slideLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Title title="CONTRIBUTORS" />
          </motion.div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name..."
            className="bg-transparent border-b border-white/20 focus:border-[#D0A730] outline-none text-white placeholder-white/30 py-2 text-base w-full sm:w-72 transition-colors duration-200"
          />
        </div>

        {/* Member Grid */}
        {filtered.length === 0 ? (
          <p className="text-white/40 text-center py-12 tracking-widest">NO MEMBERS FOUND</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0 border-t border-l border-white/10">
            {filtered.map((m, i) => {
              const username = m.login || m.username || (m.github ? m.github.split("/").filter(Boolean).pop() : "");
              const isAlumni = (m.role || m.title || "").toLowerCase().includes("alumni");
              const avatarUrl = m.avatar_url || (username ? `https://github.com/${username}.png` : null);

              return (
                <motion.div
                  key={username || m.name || i}
                  variants={slideUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.02 * i }}
                  onClick={() => username && onSelectMember(username)}
                  className={`border-b border-r border-white/10 p-5 flex flex-col items-center text-center gap-3 transition-all duration-200 ${
                    username ? "cursor-pointer hover:bg-white/5 group" : ""
                  }`}
                >
                  <div className="relative">
                    {avatarUrl ? (
                      <img
                        src={avatarUrl}
                        alt={m.name || username}
                        className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 border border-white/10"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name || username || "AM")}&background=252524&color=D0A730`;
                        }}
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-[#181818] border border-white/10 flex items-center justify-center text-[#D0A730] text-xl font-bold">
                        {(m.name || username || "?").charAt(0).toUpperCase()}
                      </div>
                    )}
                    {isAlumni && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#D0A730] rounded-full" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white group-hover:text-[#D0A730] transition-colors truncate">
                      {m.name || username}
                    </p>
                    {username && (
                      <p className="text-xs text-white/30 mt-0.5 truncate">@{username}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <p className="text-white/30 text-xs mt-4 tracking-widest text-right">
          {filtered.length} of {members.length} shown — gold dot indicates alumni
        </p>
      </div>
    </div>
  );
};

export default MemberList;
