import React from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactElement, useEffect, useRef } from "react";

export default function MotionDiv({ children, delayOffset, className }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className={cn("relative flex items-center justify-center")}
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        delay: delayOffset,
      }}
    >
      {children}
    </motion.div>
  );
}
