"use client";

import Link from "next/link";


export default function Navbar() {
    return (
        <>
            <nav className="px-4 md:px-[40px] lg:px-[100px] py-4 text-[#1C1C1C] flex justify-between items-center">
                <Link href="/" className="text-[16px] md:text-[20px] font-medium">hive</Link>
            </nav>
            {/* Theme Mode Button */}
            <div>
                {/* To be added in future version */}
            </div>
        </>
    )
}