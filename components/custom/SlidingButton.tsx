"use client";

import { FaArrowRight } from "react-icons/fa";
import { motion, PanInfo, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface SlidingButtonProps {
  eventURL: string;
}

export default function SlidingButton({ eventURL }: SlidingButtonProps) {

  const btnWidth = 40;
  const constraintsRef = useRef<HTMLDivElement | null>(null);
  const [constraints, setConstraints] = useState<{
    left: number;
    right: number;
  }>({
    left: 0,
    right: 0,
  });
  // const [isSlid, setIsSlid] = useState(false);

  // Spring value to smoothly animate position
  const springPosition = useSpring(0, { stiffness: 300, damping: 20 });
  const bgWidth = useTransform(springPosition, (latest: number) => latest + btnWidth);

  const whiteTextOpacity = useTransform(
    springPosition,
    [30, 100], // position values
    [0, 1], // opacity values
  );

  // Handle drag release to check position and animate
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x >= constraints.right) {
      // Open in new tab
      window.open(eventURL, "_blank");
      // Immediately reset the button position
      springPosition.set(0);
    } else {
      springPosition.set(0);
    }
  };

  // Add onDrag handler to update position in real-time
  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    springPosition.set(Math.max(0, info.offset.x));
  };

  useEffect(() => {
    if (constraintsRef.current) {
      const containerWidth = constraintsRef.current.offsetWidth;
      const padding = 10;
      setConstraints({
        left: 0,
        right: containerWidth - btnWidth - padding,
      });
    }
  }, []);

  return (
    <div
      ref={constraintsRef}
      className="w-full h-fit border-2 border-[#1C1C1C] dark:border-white p-1 rounded-[100px] relative flex items-center overflow-hidden"
    >
      {/* Background that follows the button */}
      <motion.div
        style={{
          width: bgWidth,
          opacity: 1,
        }}
        className="absolute left-0 top-0 h-[40px] bg-[#1C1C1C] dark:bg-white rounded-[100px] m-1"
      />

      {/* Draggable Circle */}
      <motion.div
        drag="x"
        dragConstraints={{ left: constraints.left, right: constraints.right }}
        dragElastic={0.2}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{ x: springPosition }}
        className={`z-10 flex items-center justify-center w-[${btnWidth}px] h-[${btnWidth}px] bg-[#1C1C1C] dark:bg-white rounded-full shadow-md cursor-pointer text-white dark:text-black`}
      >
        <FaArrowRight className="text-lg text-white dark:text-black" />
      </motion.div>

      {/* Black Text (static) */}
      <p className="text-sm absolute inset-0 flex items-center justify-center font-semibold pointer-events-none text-[#1C1C1C] dark:text-white">
        SLIDE TO EVENT
      </p>

      {/* White Text (appears on dark background) */}
      <motion.p
        style={{ opacity: whiteTextOpacity }}
        className="text-sm absolute inset-0 flex items-center justify-center font-semibold pointer-events-none text-white dark:text-[#1C1C1C]"
      >
        SLIDE TO EVENT
      </motion.p>
    </div>
  );
}
