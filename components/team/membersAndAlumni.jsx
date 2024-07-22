import React, { useEffect, useState } from "react";
import Title from "@/components/ui/title";
import MemberCard from "@/components/team/memberCard";
import data from "@/content/team.json";
import members from "@/content/members.json";
import alumni from "@/content/alumni.json";
import { motion } from "framer-motion";

const MembersAndAlumni = ({ contentFor }) => {
  const dataFinal = contentFor === "members" ? members : alumni;
  const [visibleMembers, setVisibleMembers] = useState(dataFinal.slice(0, 6));
  const [showAllMembers, setShowAllMembers] = useState(false);

  const updateVisibleMembers = () => {
    const screenSize = window.innerWidth;
    if (screenSize >= 768) {
      setVisibleMembers(dataFinal.slice(0, 9));
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
      <div className="w-full mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16 pt-10 md:pb-10">
        <Title title={contentFor === "members" ? "MEMBERS" : "ALUMNI"} />
      </div>
      <div className="w-full max-w-screen-2xl mx-auto xl:px-1 px-7 sm:px-12 my-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 col lg:gap-x-20 md:gap-x-10 gap-x-3 lg:gap-y-10">
        {visibleMembers.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, x: -50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.01 * i }}
            className="w-full flex justify-center items-center"
          >
            <MemberCard
              key={member.name}
              name={member.name}
              title={member.title}
              githubLink={member.githubLink}
              twitterLink={member.twitterLink}
              linkedinLink={member.linkedinLink}
              imgPath={member.imgPath}
            />
          </motion.div>
        ))}
      </div>
      <button
        className="w-full flex justify-center text-white font-bold text-xl pb-5 md:pb-40"
        onClick={toggleMembersVisibility}
      >
        <div className="flex justify-center flex-col items-center">
          {showAllMembers ? "See less" : "See more"}
          <img
            alt="Arrow icon"
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
