"use client";

import Image from "next/image";
import { FaCalendarDay } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import SlidingButton from "@/components/custom/SlidingButton";

export default function EventCard() {
  return (
    <>
      {/* Card Border */}
      <div className="max-w-[370px] px-4 py-4 flex flex-col gap-4 justify-center items-center border-[2px] border-[#1C1C1C] rounded-[24px] bg-white shadow-eventCard">
        {/* Event Banner */}
        <div className="relative w-full h-full min-h-[200px]">
          <Image
            src="/test-banner.avif"
            alt="Event Banner"
            fill
            objectFit="cover"
            className="rounded-[16px]"
          />
        </div>

        <div className="w-full space-y-2">
          {/* Event Title and Host */}
          <div className="gap-1">
            <h1 className="text-[16px] font-bold">
              Kuala Lumpur AWS Meetup ( In person ) January 2025 @ AWS Office
            </h1>
            <p className="text-[14px] text-[#BFBFBF] font-semibold">
              AWS User Group Malaysia
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-col space-y-2 text-[14px] font-semibold">
            <p className="event-details">
              <FaCalendarDay className="text-[20px]" />
              16 Jan 2025 (7.00p.m. - 9.00p.m.)
            </p>
            <p className="event-details">
              <FaLocationDot className="text-[20px]" />
              The Gardens North Tower
            </p>
            <div className="flex justify-between">
              <p className="event-details">
                <FaMoneyBill className="text-[20px]" />
                Free of Charge
              </p>
              <p className="event-details">
                <FaWalking className="text-[20px]" />
                Walk-in Available
              </p>
            </div>

            {/* Slide Button */}
            <SlidingButton />
          </div>
        </div>
      </div>
    </>
  );
}
