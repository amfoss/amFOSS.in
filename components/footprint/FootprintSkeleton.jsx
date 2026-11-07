"use client";
import React from "react";

/* ─── Shimmer base ────────────────────────────────────────────────── */
const Shimmer = ({ className = "" }) => (
  <div
    className={`relative overflow-hidden bg-white/5 ${className}`}
  >
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/8 to-transparent" />
  </div>
);

/* ─── Hero skeleton ───────────────────────────────────────────────── */
const HeroSkeleton = () => (
  <div className="md:h-screen flex items-center mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16 py-32">
    <div className="space-y-4 w-full">
      <Shimmer className="h-16 md:h-24 w-48 md:w-80" />
      <Shimmer className="h-16 md:h-24 w-72 md:w-[28rem]" />
    </div>
  </div>
);

/* ─── Stats block skeleton (4 cells in a row) ─────────────────────── */
const StatsSkeleton = () => (
  <div className="bg-[#242424] py-16">
    <div className="mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
      {/* Title */}
      <Shimmer className="h-6 w-56 mb-12" />
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center justify-center py-12 px-6 border border-white/10 space-y-3">
            <Shimmer className="h-12 w-24 md:w-32" />
            <Shimmer className="h-3 w-20" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Repos + Languages skeleton ──────────────────────────────────── */
const ReposSkeleton = () => (
  <div className="mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16 py-16">
    <div className="grid md:grid-cols-3 grid-cols-1 gap-16">
      {/* Left: stack */}
      <div className="md:col-span-1 space-y-6">
        <Shimmer className="h-6 w-24 mb-4" />
        <Shimmer className="h-3 w-full" />
        <Shimmer className="h-3 w-4/5" />
        <div className="mt-8 space-y-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between">
                <Shimmer className="h-3 w-20" />
                <Shimmer className="h-3 w-8" />
              </div>
              <Shimmer className="h-[2px] w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Right: top repos */}
      <div className="md:col-span-2">
        <Shimmer className="h-6 w-48 mb-10" />
        <div className="border-t border-white/10">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between py-6 border-b border-white/10 gap-4">
              <div className="flex-1 space-y-2">
                <Shimmer className="h-4 w-40 md:w-56" />
                <Shimmer className="h-3 w-64 md:w-80" />
              </div>
              <div className="flex items-center gap-6 shrink-0">
                <Shimmer className="h-3 w-10" />
                <Shimmer className="h-4 w-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ─── Members grid skeleton ───────────────────────────────────────── */
const MembersSkeleton = () => (
  <div className="bg-[#242424] py-16">
    <div className="mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
      {/* Header */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 mb-12">
        <div className="space-y-4">
          <Shimmer className="h-6 w-36" />
          <Shimmer className="h-3 w-full" />
          <Shimmer className="h-3 w-4/5" />
        </div>
        <div className="md:col-span-2 flex items-end gap-4">
          <Shimmer className="h-8 w-64" />
          <div className="flex gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <Shimmer key={i} className="h-8 w-20" />
            ))}
          </div>
        </div>
      </div>

      {/* Avatar grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0 border-t border-l border-white/10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="border-b border-r border-white/10 p-5 flex flex-col items-center gap-3">
            <Shimmer className="w-14 h-14 rounded-full" />
            <Shimmer className="h-3 w-20" />
            <Shimmer className="h-2 w-16" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Full page skeleton ──────────────────────────────────────────── */
const FootprintSkeleton = () => (
  <>
    <style>{`
      @keyframes shimmer {
        100% { transform: translateX(100%); }
      }
    `}</style>
    <HeroSkeleton />
    <StatsSkeleton />
    <ReposSkeleton />
    <MembersSkeleton />
  </>
);

export default FootprintSkeleton;
export { HeroSkeleton, StatsSkeleton, ReposSkeleton, MembersSkeleton };
