import { useState, useEffect } from "react";

export const useResponsiveGrid = (data) => {
  const [visibleMembers, setVisibleMembers] = useState([]);
  const [showAllMembers, setShowAllMembers] = useState(false);

  const updateVisibleMembers = () => {
    const screenSize = window.innerWidth;
    if (screenSize >= 768) {
      setVisibleMembers(data.slice(0, 9));
    } else {
      setVisibleMembers(data.slice(0, 6));
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
  }, [data]);

  const toggleMembersVisibility = () => {
    setShowAllMembers(!showAllMembers);
    if (showAllMembers) {
      updateVisibleMembers();
    } else {
      setVisibleMembers(data);
    }
  };

  return {
    visibleMembers,
    showAllMembers,
    toggleMembersVisibility,
  };
};

export default useResponsiveGrid;