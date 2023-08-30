// AnimationVariants.js
export const fadeVariants = {
  initial: { opacity: 0, scale: 0.9, y: 30 },
  animate: {
    opacity: 1,
    transition: { duration: 1, delay: 0.5 },
    scale: 1,
    y: 0,
    ease: "easeInOut",
    type: "spring",
    damping: 8,
    stiffness: 100,
  }, // Adjust duration and delay values as needed
};
