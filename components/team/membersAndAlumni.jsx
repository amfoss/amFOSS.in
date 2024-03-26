import React, { useEffect, useState } from "react";
import Title from "@/components/ui/title";
import MemberCard from "@/components/team/memberCard";
import data from "@/content/team.json";

const MembersAndAlumni = ({ contentFor }) => {
  const dataFinal = contentFor === "members" ? data.members : data.alumni;
  const [visibleMembers, setVisibleMembers] = useState(dataFinal.slice(0, 6));
  const [showAllMembers, setShowAllMembers] = useState(false);

  const updateVisibleMembers = () => {
    const screenSize = window.innerWidth;
    if (screenSize >= 768) {
      setVisibleMembers(dataFinal.slice(0, 8));
    } else {
      setVisibleMembers(dataFinal.slice(0, 6));
    }
  };

  useEffect(() => {
    updateVisibleMembers();

    const handleResize = () => {
      updateVisibleMembers();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMembersVisibility = () => {
    setShowAllMembers(!showAllMembers);
    if (showAllMembers) {
      updateVisibleMembers();
    } else {
      setVisibleMembers(dataFinal);
    }
  };

  return (
    <>
      <div className="w-full md:px-40 px-5 mb-10">
        <Title title={contentFor === "members" ? "MEMBERS" : "ALUMNI"} />
      </div>
      <div className="md:px-40 my-10 px-5 grid md:grid-cols-4 grid-cols-3 gap-x-20">
        {visibleMembers.map((member) => (
          <MemberCard
            key={member.name}
            name={member.name}
            title={member.title}
            githubLink={member.githubLink}
            twitterLink={member.twitterLink}
            linkedinLink={member.linkedinLink}
          />
        ))}
      </div>
      <button
        className="w-full flex justify-center text-white font-bold text-xl"
        onClick={toggleMembersVisibility}
      >
        <div className="flex justify-center flex-col items-center">
          {showAllMembers ? "See less" : "See more"}
          <img
            src="/assets/icons/seeMore2.png"
            className={`w-10 h-10 my-5 ${
              showAllMembers ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </button>
    </>
  );
};

export default MembersAndAlumni;
