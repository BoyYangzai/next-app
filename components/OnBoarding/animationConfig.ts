import { MotionProps } from "framer-motion";

export const fadeInAnimation: MotionProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { ease: "easeOut", duration: 0.6 },
};

export const slideAnimation: MotionProps = {
  initial: { y: -150 },
  whileInView: { y: 0 },
  transition: { ease: "easeOut", duration: 0.7 },
};
