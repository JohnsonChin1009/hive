"use client";

import Link from "next/link";
import ThemeToggleButton from "@/components/custom/ThemeToggleButton";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <nav className="px-4 md:px-[60px] py-6 text-[#1C1C1C] flex justify-between items-center">
        <Link href="/" className="text-[16px] md:text-[20px] font-semibold block dark:hidden">
          <Image src="/hive-logo.png" alt="logo" width={120} height={100} />
        </Link>
        <Link href="/" className="text-[16px] md:text-[20px] font-semibold hidden dark:block">
          <Image src="/hive-logo-white.png" alt="logo" width={120} height={100} />
        </Link>
        {/* Theme Mode Button */}
        <div>
          <ThemeToggleButton />
        </div>
      </nav>
    </>
  );
}
