import React, { RefObject } from "react";
import { motion } from "framer-motion";
import { CANVAS_SIZE } from "@/common/constants/canvasSize";

interface BgProps {
  bgRef: RefObject<HTMLCanvasElement>;
}
const Background = ({ bgRef }: BgProps) => {
    const bg = useBackground()
  return (
    <motion.canvas
      ref={bgRef}
      width={CANVAS_SIZE.width}
      height={CANVAS_SIZE.height}
      className="absolute top-0 bg-zinc-100"
      style={{ x, y }}
    />
  );
};

export default Background;
