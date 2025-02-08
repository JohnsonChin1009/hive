"use client";

import { FaArrowRight } from "react-icons/fa";
import { motion, PanInfo, useSpring } from "motion/react";
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

  // Spring value to smoothly animate position
  const springPosition = useSpring(0, { stiffness: 300, damping: 20 });

  // Handle drag release to check position and animate
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x >= constraints.right) {
      window.open(eventURL, "_blank");
      setTimeout(() => {
        springPosition.set(0); // Resets the button position
      }, 1000);
    } else {
      console.log(false); // Button has not slid past
      springPosition.set(0); // Spring it back to the starting position
    }
  };

  useEffect(() => {
    if (constraintsRef.current) {
      const containerWidth = constraintsRef.current.offsetWidth;
      const buttonWidth = 50;
      const padding = 20;
      setConstraints({
        left: 0,
        right: containerWidth - buttonWidth - padding,
      });
    }
  }, []);

  return (
    <div
      ref={constraintsRef}
      className="w-full max-w-[300px] h-[60px] border border-[#1C1C1C] px-[10px] rounded-[100px] py-[14px] relative overflow-auto flex items-center"
    >
      {/* Draggable Circle */}
      <motion.div
        drag="x"
        dragConstraints={{ left: constraints.left, right: constraints.right }} // Use proper drag constraints
        dragElastic={0.2} // Add slight elasticity for a better experience
        onDragEnd={handleDragEnd} // Check position after drag
        style={{ x: springPosition }} // Bind spring position to draggable element
        className="flex items-center justify-center w-[50px] h-[50px] bg-[#1C1C1C] rounded-full shadow-md cursor-pointer text-white"
      >
        <FaArrowRight className="text-[20px]" />
      </motion.div>

      {/* Text */}
      <p className="absolute inset-0 flex items-center justify-center text-[#1C1C1C] font-semibold pointer-events-none">
        SLIDE TO EVENT
      </p>
    </div>
  );
}
