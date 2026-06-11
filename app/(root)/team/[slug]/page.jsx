import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const MEMBERS_DATA_URL =
  "https://raw.githubusercontent.com/amfoss/member-directory/main/members.json";
const ALUMNI_DATA_URL =
  "https://raw.githubusercontent.com/amfoss/member-directory/main/alumni.json";

async function fetchTeamData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) return [];
    return response.json();
  } catch (err) {
    return [];
  }
}

function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export async function generateStaticParams() {
  const [members, alumni] = await Promise.all([
    fetchTeamData(MEMBERS_DATA_URL),
    fetchTeamData(ALUMNI_DATA_URL),
  ]);

  const all = [...members, ...alumni];

  return all.map((m) => ({ slug: slugify(m.name) }));
}

export default async function Page({ params }) {
  const { slug } = params;

  const [members, alumni] = await Promise.all([
    fetchTeamData(MEMBERS_DATA_URL),
    fetchTeamData(ALUMNI_DATA_URL),
  ]);

  const all = [...members, ...alumni];
  const member = all.find((m) => slugify(m.name) === slug);

  if (!member) return notFound();

  const CDN_URL = "https://cdn.jsdelivr.net/gh";
  const imgSrc = CDN_URL + member.imgPath;

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-12 py-12">
      <div className="mt-4 md:mt-6 lg:mt-8">
        <Link href="/team" className="text-sm text-slate-400 hover:underline">← Back to team</Link>
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-8 items-start">
        <div className="rounded-2xl overflow-hidden bg-slate-950/70 shadow-lg">
          <div className="relative h-[30rem] md:h-[29rem] lg:h-[40rem]">
            <Image
              src={imgSrc}
              alt={member.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        </div>

        <div className="text-white">
          <h1 className="text-4xl font-bold">{member.name}</h1>
          <p className="text-xl text-slate-300 mt-2">{member.title}</p>

          <div className="mt-6">
            <p className="text-sm text-slate-400">Connect</p>
            <div className="flex flex-wrap gap-3 mt-3">
              {member.githubLink ? (
                <a
                  href={member.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  GitHub
                </a>
              ) : null}

              {member.linkedinLink ? (
                <a
                  href={member.linkedinLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  LinkedIn
                </a>
              ) : null}

              {member.twitterLink ? (
                <a
                  href={member.twitterLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Twitter
                </a>
              ) : null}

              {member.mailLink ? (
                <a
                  href={member.mailLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Email
                </a>
              ) : null}
            </div>
          </div>

          <div className="mt-8 text-slate-300">
            <h2 className="text-xl font-semibold">About</h2>
            <p className="mt-3">Bio comming sooon.....</p>
            <p className="mt-3 text-sm text-slate-500">Data source: amfoss/member-directory GitHub repo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
