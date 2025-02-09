"use client";

import { GithubIcon } from "@/components/ui/github";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className="px-4 md:px-[60px] py-4 bg-[#1C1C1C] text-white flex justify-between items-center">
        <div className="text-[12px] md:text-[16px] font-medium">
          <Image src="/hive-logo-white.png" alt="logo" width={80} height={80} />
        </div>
        <div className="text-[12px] md:text-[16px]">
          made with 🤍 by{" "}
          <a
            href="https://github.com/JohnsonChin1009"
            target="_blank"
            className="underline"
          >
            johnson
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
