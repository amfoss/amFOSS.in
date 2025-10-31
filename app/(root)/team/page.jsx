import React from "react";
import MembersAndAlumni from "@/components/team/membersAndAlumni";
import Contact from "../contact/page";
import TeamHeroSection from "@/components/team/teamHeroSection"; // Client Component for the page's hero and motion logic

const MEMBERS_DATA_URL = 'https://raw.githubusercontent.com/amfoss/member-directory/main/members.json';
const ALUMNI_DATA_URL = 'https://raw.githubusercontent.com/amfoss/member-directory/main/alumni.json';
async function fetchTeamData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Failed to fetch data from ${url}. Status: ${response.status}`);
      return []; 
    }

    return response.json();
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    return []; // Return empty array on failure to prevent a site crash
  }
}

const Page = async () => { 
  const members = await fetchTeamData(MEMBERS_DATA_URL);
  const alumni = await fetchTeamData(ALUMNI_DATA_URL);

  return (
    <>
      {/* Client Component for the animated header, scroll ref, and hero image */}
      <TeamHeroSection />
      
      <MembersAndAlumni membersData={members} title="MEMBERS" />

      <MembersAndAlumni membersData={alumni} title="ALUMNI" />
      
      <Contact />
    </>
  );
};

export default Page;