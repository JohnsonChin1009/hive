"use client";

import { FaArrowRight } from "react-icons/fa";
import { motion, PanInfo, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface SlidingButtonProps {
  eventURL: string;
}

export default function SlidingButton({ eventURL }: SlidingButtonProps) {
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
  const bgWidth = useTransform(springPosition, (latest) => latest + 50);

  // Add this near other useTransform hooks
  const textColor = useTransform(
    springPosition,
    [30, 100], // position values
    ["#1C1C1C", "white"] // corresponding colors
  );

  const whiteTextOpacity = useTransform(
    springPosition,
    [30, 100], // position values
    [0, 1] // opacity values
  );

  // Handle drag release to check position and animate
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x >= constraints.right) {
      // setIsSlid(true);
      window.open(eventURL, "_blank");
      setTimeout(() => {
        springPosition.set(0); // Resets the button position
        // setIsSlid(false);
      }, 1000);
    } else {
      console.log(false); // Button has not slid past
      springPosition.set(0); // Spring it back to the starting position
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
      const buttonWidth = 50;
      const padding = 10;
      setConstraints({
        left: 0,
        right: containerWidth - buttonWidth - padding ,
      });
    }
  }, []);

  return (
    <div
      ref={constraintsRef}
      className="w-full h-fit border border-[#1C1C1C] p-1 rounded-[100px] relative flex items-center overflow-hidden"
    >
      {/* Background that follows the button */}
      <motion.div
        style={{ 
          width: bgWidth,
          opacity: 1
        }}
        className="absolute left-0 top-0 h-[50px] bg-[#1C1C1C] rounded-[100px] m-1"
      />

      {/* Draggable Circle */}
      <motion.div
        drag="x"
        dragConstraints={{ left: constraints.left, right: constraints.right }}
        dragElastic={0.2}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{ x: springPosition }}
        className="z-10 flex items-center justify-center w-[50px] h-[50px] bg-[#1C1C1C] rounded-full shadow-md cursor-pointer text-white"
      >
        <FaArrowRight className="text-[20px] text-white" />
      </motion.div>

      {/* Black Text (static) */}
      <p className="absolute inset-0 flex items-center justify-center font-semibold pointer-events-none text-[#1C1C1C]">
        SLIDE TO EVENT
      </p>

      {/* White Text (appears on dark background) */}
      <motion.p 
        style={{ opacity: whiteTextOpacity }}
        className="absolute inset-0 flex items-center justify-center font-semibold pointer-events-none text-white"
      >
        SLIDE TO EVENT
      </motion.p>
    </div>
  );
}
