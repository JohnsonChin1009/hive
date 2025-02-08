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
  return (
    <>
      {/* Card Border */}
      <div className="max-w-[370px] px-4 py-4 flex flex-col gap-4 justify-center items-center border-[2px] border-[#1C1C1C] rounded-[24px] bg-white">
        {/* Event Banner */}
        <div className="relative w-full h-full min-h-[200px]">
          <Image
            src={event.event_banner_url}
            alt={event.event_banner_alt}
            fill
            objectFit="cover"
            className="rounded-[16px]"
          />
        </div>

        <div className="w-full space-y-2">
          {/* Event Title and Host */}
          <div className="gap-1">
            <h1 className="text-[16px] font-bold">{event.event_title}</h1>
            <p className="text-[14px] text-[#BFBFBF] font-semibold">
              {event.event_host}
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-col space-y-2 text-[14px] font-semibold">
            <p className="event-details">
              <FaCalendarDay className="text-[20px]" />
              {event.event_date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              , {event.event_time}
            </p>
            <p className="event-details">
              <FaLocationDot className="text-[20px]" />
              {event.event_venue}
            </p>
            <div className="flex justify-between">
              <p className="event-details">
                <FaMoneyBill className="text-[20px]" />
                {event.event_fee}
              </p>
              <p className="event-details">
                <FaWalking className="text-[20px]" />
                {event.event_availability}
              </p>
            </div>

            {/* Slide Button */}
            <SlidingButton eventURL={event.event_url} />
          </div>
        </div>
      </div>
    </>
  );
}
