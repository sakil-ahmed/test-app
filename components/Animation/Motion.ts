export const animationFade = (direction: string, distance: number) => {
  if (direction === "left" || direction === "right") {
    return {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.5 },
      transition: { type: "spring", Bounce: 0.25, duration: 1 },
      variants: {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 },
      },
    };
  } else if (direction === "top" || direction === "bottom") {
    return {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.5 },
      transition: { type: "spring", Bounce: 0.5, duration: 1 },
      variants: {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      },
    };
  }
};
