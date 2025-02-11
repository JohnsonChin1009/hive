"use client";

import Image from "next/image";
import { FaCalendarDay } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import SlidingButton from "@/components/custom/SlidingButton";
import EventProps from "@/utils/props/event";

interface EventCardProps {
  event: EventProps;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* Card Border */}
      <div className="lg:w-[370px] h-[520px] px-4 py-4 flex flex-col gap-4 items-center border-[2px] border-[#1C1C1C] dark:border-[#adadad] rounded-[24px] bg-white dark:bg-[#1C1C1C]/10 dark:backdrop-blur-md justify-between">
        {/* Event Banner */}
        <div className="relative w-full h-[250px] ">
          <Image
            src={event.banner_url}
            alt={event.banner_alt}
            fill
            objectFit="cover"
            className="rounded-[16px]"
          />
        </div>

        <div className="w-full space-y-2">
          {/* Event Title and Host */}
          <div className="gap-1">
            <h1 className="text-[16px] font-bold overflow-hidden text-ellipsis whitespace-nowrap dark:text-[#ffffff]">{event.banner_alt}</h1>
            <p className="text-[14px] text-[#626262] dark:text-[#adadad] font-semibold ">
              {event.host}
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-col space-y-2 text-[14px] font-medium text-black ">
            <p className="event-details dark:text-[#ffffff]">
              <FaCalendarDay className="text-[20px]" />
              {formatDate(event.date)}
              , {event.time}
            </p>
            <p className="event-details dark:text-[#ffffff]">
              <FaLocationDot className="text-[20px]" />
              {event.venue}
            </p>
            <div className="flex gap-2">
              <p className="flex items-center gap-2 border px-2 py-1 rounded-md dark:text-white dark:border-[#686868]">
                <FaMoneyBill className="text-[20px] text-[#90ec8c]" />
                {/* {event.event_fee} */}
                {event.fee}
              </p>
              <p className="flex items-center gap-2 border px-2 py-1 rounded-md dark:text-white dark:border-[#686868]">
                <FaWalking className="text-[20px] text-[#b1cfff]" />
                {/* {event.event_availability} */}
                Walk-in
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
