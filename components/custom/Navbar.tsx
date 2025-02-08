"use client";

import Link from "next/link";
import ThemeToggleButton from "@/components/custom/ThemeToggleButton";

export default function Navbar() {
  return (
    <>
      <nav className="px-4 md:px-[60px] py-6 text-[#1C1C1C] flex justify-between items-center">
        <Link href="/" className="text-[16px] md:text-[20px] font-semibold">
          hive
        </Link>
        {/* Theme Mode Button */}
        <div>
          <ThemeToggleButton />
        </div>
      </nav>
    </>
  );
}
