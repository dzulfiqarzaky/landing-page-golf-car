import { theme } from "@/style/theme/theme";
import {
  easeIn,
  easeInOut,
  easeOut,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (index: number) => {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["0 1", "1.33 1"],
  });
  const { scrollYProgress: yProgressColor } = useScroll({
    target: imageRef,
    offset: ["0 1", "2 1"],
  });

  const springY = useSpring(yProgressColor);

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const colorProgress = useTransform(springY, [0, 1], [0, 1.5], {
    ease: easeInOut,
  });
  const targetIndex =
    index === theme.colors.imageBackground.length - 1 ? 0 : index + 1;

  const currentBackgroundColor = theme.colors.imageBackground[index];
  const targetBackgroundColor = theme.colors.imageBackground[targetIndex];

  const opacity = useTransform(
    colorProgress,
    [0, 0.8],
    [currentBackgroundColor, targetBackgroundColor]
  );

  return {
    imageRef,
    scaleProgress,
    opacityProgress,
    opacity,
  };
};
