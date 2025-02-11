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
      <div className="lg:w-[20vw] md:h-auto 2xl:w-[20vw] xl:h-[480px] px-4 py-4 flex flex-col gap-4 items-center border-[2px] border-[#1C1C1C] dark:border-[#adadad] rounded-[24px] bg-white dark:bg-[#1C1C1C]/10 dark:backdrop-blur-md justify-between py-10">
        {/* Event Banner */}
        <div className="relative w-full lg:h-[210px] 2xl:h-[250px] ">
          <Image
            src={event.banner_url}
            alt={event.banner_alt}
            fill
            className="rounded-[16px] object-cover"
          />
        </div>

        <div className="w-full space-y-2">
          {/* Event Title and Host */}
          <div className="gap-1">
            <h1 className="text-sm font-bold overflow-hidden text-ellipsis whitespace-nowrap dark:text-[#ffffff]">{event.banner_alt}</h1>
            <p className="text-xs text-[#626262] dark:text-[#adadad] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
              {event.host}
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-col space-y-2 text-xs font-medium text-black ">
            <div className="flex items-center gap-2 dark:text-[#ffffff]">
              <div className="w-5 h-5">
                <FaCalendarDay className="text-lg" />
              </div>
              {formatDate(event.date)}
              , {event.time}
            </div>
            <div className="flex items-center gap-2 dark:text-[#ffffff]">
              <div className="">
                <FaLocationDot className="text-lg" />
              </div>
              {event.venue}
            </div>
            <div className="flex gap-2">
              <p className="text-[10px] flex items-center gap-2 border px-2 py-1 rounded-md dark:text-white dark:border-[#686868]">
                <FaMoneyBill className="text-base text-[#90ec8c]" />
                {/* {event.event_fee} */}
                {event.fee}
              </p>
              <p className="text-[10px] flex items-center gap-2 border px-2 py-1 rounded-md dark:text-white dark:border-[#686868]">
                <FaCheckCircle className="text-base text-[#b1cfff]" />
                {/* {event.event_availability} */}
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
