"use client";

import { GithubIcon } from "@/components/ui/github";

export default function Footer() {
    return (
        <>
            <footer className="px-4 lg:px-[100px] py-4 bg-[#1C1C1C] text-white flex justify-between items-center">
                <div>
                    hive
                </div>
                <div>
                    made with 🤍 by <a href="https://github.com/JohnsonChin1009" target="_blank" className="underline">johnson</a>
                </div>
                <div>
                    <GithubIcon size={24}/>
                </div>
            </footer>
        </>
    )
}