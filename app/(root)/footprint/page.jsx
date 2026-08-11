"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import useScrollRef from "@/lib/hooks/useScrollRef";
import ScrollDownButton from "@/components/shared/ScrollDown";
import Contact from "../contact/page";

import FootprintHero from "@/components/footprint/FootprintHero";
import FootprintSkeleton from "@/components/footprint/FootprintSkeleton";
import OrgOverview from "@/components/footprint/OrgStatsOverview";
import ReposAndLanguages from "@/components/footprint/ReposAndLanguages";
import MemberList from "@/components/footprint/MemberList";
import MemberFootprintDetail from "@/components/footprint/MemberFootprintDetail";
import PatModal from "@/components/footprint/PatModal";

import {
  fetchOrgRepos,
  fetchDirectoryMembers,
  fetchGithubOrgMembers,
  getStoredPat,
  exportFootprintCSV,
} from "@/lib/githubApi";

import { FiRefreshCw, FiKey, FiDownload } from "react-icons/fi";

function FootprintContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { scrollRef } = useScrollRef();

  const [repos, setRepos] = useState([]);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isPatModalOpen, setIsPatModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(searchParams.get("member") || null);

  const loadData = async () => {
    setLoading(true);
    setError("");
    try {
      const pat = getStoredPat();
      const [orgRepos, directoryData, ghMembers] = await Promise.all([
        fetchOrgRepos("amfoss", pat),
        fetchDirectoryMembers(),
        fetchGithubOrgMembers("amfoss", pat),
      ]);

      setRepos(orgRepos);

      const combinedMap = new Map();
      const allDir = [...(directoryData.members || []), ...(directoryData.alumni || [])];
      allDir.forEach((m) => {
        // members.json uses "githubLink" (full URL), fall back to "github", then "username"
        const rawGithub = m.githubLink || m.github || null;
        const username = rawGithub
          ? rawGithub.split("/").filter(Boolean).pop()
          : m.username || null;
        if (username) {
          combinedMap.set(username.toLowerCase(), {
            name: m.name,
            login: username,
            title: m.role || m.title || "Member",
            avatar_url: `https://github.com/${username}.png`,
            html_url: `https://github.com/${username}`,
            // preserve source avatar if from directory
            imgPath: m.imgPath || null,
          });
        }
      });
      ghMembers.forEach((gh) => {
        const key = gh.login.toLowerCase();
        if (!combinedMap.has(key)) {
          combinedMap.set(key, {
            name: gh.login,
            login: gh.login,
            title: "Member",
            avatar_url: gh.avatar_url,
            html_url: gh.html_url,
          });
        }
      });

      setMembers(Array.from(combinedMap.values()));
    } catch (err) {
      if (err.message === "RATE_LIMIT") {
        setError("GitHub API rate limit reached (60 req/hr). Add a Personal Access Token to continue.");
      } else {
        setError("Failed to load data from GitHub API.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const mem = searchParams.get("member");
    if (mem !== selectedMember) setSelectedMember(mem);
  }, [searchParams]);

  const handleSelectMember = (username) => {
    setSelectedMember(username);
    if (username) {
      router.push(`/footprint?member=${encodeURIComponent(username)}`, { scroll: false });
    } else {
      router.push("/footprint", { scroll: false });
    }
  };

  const currentMemberObj = members.find(
    (m) => (m.login || "").toLowerCase() === (selectedMember || "").toLowerCase()
  );

  return (
    <div className="overflow-hidden">
      <PatModal
        isOpen={isPatModalOpen}
        onClose={() => setIsPatModalOpen(false)}
        onSave={() => loadData()}
      />

      {!selectedMember && (
        <>
          <FootprintHero scrollRef={scrollRef} />
          <div ref={scrollRef} className="md:mt-6 min-[1700px]:mt-28" />
        </>
      )}

      {loading && !selectedMember && <FootprintSkeleton />}

      {error && (
        <div className="mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16 py-6">
          <div className="border-l-2 border-[#D0A730] pl-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-white/60 text-sm">{error}</p>
            <button
              onClick={() => setIsPatModalOpen(true)}
              className="flex items-center gap-2 text-xs tracking-widest text-[#D0A730] uppercase hover:underline shrink-0"
            >
              <FiKey size={13} /> Connect PAT Token
            </button>
          </div>
        </div>
      )}

      {/* ── Main Content ── */}
      {!loading && (
        <>
          {selectedMember ? (
            <MemberFootprintDetail
              username={selectedMember}
              memberInfo={currentMemberObj}
              onBack={() => handleSelectMember(null)}
              onRequestPat={() => setIsPatModalOpen(true)}
            />
          ) : (
            <>
              <OrgOverview repos={repos} members={members} />
              <ReposAndLanguages repos={repos} />
              <MemberList members={members} onSelectMember={handleSelectMember} />
            </>
          )}
        </>
      )}

      <Contact />
    </div>
  );
}

export default function FootprintPage() {
  return (
    <Suspense fallback={<FootprintSkeleton />}>
      <FootprintContent />
    </Suspense>
  );
}
