"use client";

import Image from "next/image";
import { FaCalendarDay, FaMoneyBill, FaCheckCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import SlidingButton from "@/components/custom/SlidingButton";
import { EventProps } from "@/utils/props/event";

interface EventCardProps {
  event: EventProps;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {/* Card Border */}
      <div className="w-full sm:w-[70vw] md:w-[45vw] lg:w-[30vw] xl:w-[22vw] 2xl:w-[20vw] 
                    md:min-h-[450px] 
                    px-3 sm:px-4 py-3 sm:py-4 
                    flex flex-col gap-3 sm:gap-4 
                    items-center border-[2px] border-[#1C1C1C] 
                    dark:border-[#adadad] rounded-[24px] 
                    bg-white dark:bg-[#1C1C1C]/10 
                    dark:backdrop-blur-md justify-between">
        {/* Event Banner */}
        <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[210px] 2xl:h-[250px]">
          <Image
            src={event.banner_url ? event.banner_url : "/no-img.jpg"}
            alt={event.banner_alt ? event.banner_alt : "No Image"}
            fill
            className="rounded-[16px] object-cover"
          />
        </div>

        <div className="w-full space-y-2">
          {/* Event Title and Host */}
          <div className="gap-1">
            <h1 className="text-xs sm:text-sm font-bold overflow-hidden text-ellipsis whitespace-nowrap dark:text-[#ffffff]">
              {event.title}
            </h1>
            <p className="text-[10px] sm:text-xs text-[#626262] dark:text-[#adadad] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
              {event.host}
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-col space-y-2 text-[10px] sm:text-xs font-medium text-black">
            <div className="flex items-center gap-2 dark:text-[#ffffff]">
              <div className="w-4 sm:w-5 h-4 sm:h-5">
                <FaCalendarDay className="text-base sm:text-lg" />
              </div>
              <span className="flex-1 truncate">
                {formatDate(event.date)}, {event.time}
              </span>
            </div>
            
            <div className="flex items-center gap-2 dark:text-[#ffffff]">
              <div className="w-4 sm:w-5 h-4 sm:h-5">
                <FaLocationDot className="text-base sm:text-lg" />
              </div>
              <span className="flex-1 truncate">
                {event.venue}
              </span>
            </div>

            <div className="flex gap-2 flex-wrap">
              <p className="text-[10px] flex items-center gap-1 sm:gap-2 border px-2 py-1 rounded-md dark:text-white dark:border-[#686868]">
                <FaMoneyBill className="text-sm sm:text-base text-[#90ec8c]" />
                {event.fee}
              </p>
              <p className="text-[10px] flex items-center gap-1 sm:gap-2 border px-2 py-1 rounded-md dark:text-white dark:border-[#686868]">
                <FaCheckCircle className="text-sm sm:text-base text-[#b1cfff]" />
                Available
              </p>
            </div>
          </div>
        </div>

        {/* Slide Button */}
        <div className="w-full">
          <SlidingButton eventURL={event.url} />
        </div>
      </div>
    </>
  );
}
