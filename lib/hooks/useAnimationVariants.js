const useAnimationVariants = () => {
  const slideInLeftVariant = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  };

  const slideInRightVariant = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 }
  };

  const slideUpVariant = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  };

  const slideDownVariant = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 }
  };

  const imageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  };

  const textAnimationVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    }
  };

  return {
    slideInLeftVariant,
    slideInRightVariant,
    slideUpVariant,
    slideDownVariant,
    imageVariants,
    textAnimationVariants
  };
};

export default useAnimationVariants;