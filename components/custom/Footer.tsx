"use client";

import { GithubIcon } from "@/components/ui/github";

import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="px-4 md:px-[60px] py-4 bg-[#1C1C1C] text-white flex justify-between items-center text-center gap-2 md:gap-0">
        <div className="text-[12px] md:text-[16px] font-medium">
          <div className="relative w-[60px] h-[40px] md:w-[80px] md:h-[80px]">
            <Image
              src="/hive-logo-white.png"
              alt="logo"
              fill
              objectFit="contain"
            />
          </div>
        </div>
        <div className=" text-[16px]">
          made with 🤍 by{" "}
          <hr className="md:hidden" />
          <a
            href="https://github.com/JohnsonChin1009"
            target="_blank"
            className="underline"
          >
            johnson
          </a>{" "}
          and{" "}
          <a
            href="https://junshen.vercel.app"
            target="_blank"
            className="underline"
          >
            junshen
          </a>
        </div>
        <a
          href="https://github.com/JohnsonChin1009/hive"
          target="_blank"
          className="md:hidden"
        >
          <GithubIcon size={20} />
        </a>
        <a
          href="https://github.com/JohnsonChin1009/hive"
          target="_blank"
          className="hidden md:block"
        >
          <GithubIcon size={24} />
        </a>
      </footer>
    </>
  );
}
