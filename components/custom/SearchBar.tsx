"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  onSearch: (query: string) => void;
  // onCategoryChange: (category: string) => void;
  // selectedCategory: string;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  
  // const categories = [
  //   "All Events",
  //   "Workshop",
  //   "Conference",
  //   "Meetup",
  //   "Hackathon",
  //   "Other"
  // ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="w-full max-w-[1400px] px-4 md:px-0 mb-6 space-y-4 ">
      {/* Search Input */}
      <div className="relative mx-8 xl:mx-4">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-2 rounded-full 
                   border-2 border-[#1C1C1C]/10 dark:border-[#adadad]/30
                   bg-white dark:bg-[#1C1C1C]/10 
                   focus:outline-none focus:border-[#1C1C1C]/30 dark:focus:border-[#adadad]/60
                   dark:text-white"
        />
      </div>

      {/* Categories */}
      {/* <div className="flex flex-wrap gap-2 mx-8 xl:mx-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-1 rounded-full text-sm
                     border-2 border-[#1C1C1C]/10 dark:border-[#adadad]/10
                     hover:border-[#1C1C1C]/30 dark:hover:border-[#adadad]/30
                     bg-white dark:bg-[#1C1C1C]/10
                     dark:text-white transition-colors
                     ${category == selectedCategory ? "bg-[#1c1c1c]/10 dark:bg-white/10" : "bg-white dark:bg-[#1c1c1c]"}
                     `}
          >
            {category}
          </button>
        ))}
      </div> */}
    </div>
  );
} 