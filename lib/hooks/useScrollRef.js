import { useRef } from 'react';

const useScrollRef = () => {
  const scrollRef = useRef(null);
  
  return {
    scrollRef,
  };
};

export default useScrollRef;
