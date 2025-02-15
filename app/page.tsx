"use client";

import EventCard from "@/components/custom/EventCard";
import SkeletonCard from "@/components/custom/SkeletonCard";
import SearchBar from "@/components/custom/SearchBar";
import { useState, useEffect } from "react";
import { EventProps } from "@/utils/props/event";

export default function HomePage() {
  const [events, setEvents] = useState<EventProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredEvents, setFilteredEvents] = useState<EventProps[]>([]);
  // const [selectedCategory, setSelectedCategory] = useState("All Events");

  // Function to fetch events from the API
  async function fetchEvents() {
    const res = await fetch("/api/fetchEvents");
    const data = await res.json();

    // Ensure event_date is converted to a Date object
    return data.map((event: EventProps) => ({
      ...event,
      date: new Date(event.date),
    }));
  }

  useEffect(() => {
    async function getEvents() {
      try {
        const result = await fetchEvents();
        setEvents(result);
        setFilteredEvents(result);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    }

    getEvents();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = events.filter((event) => {
      const searchString =
        `${event.title} ${event.host} ${event.venue}`.toLowerCase();
      return searchString.includes(query.toLowerCase());
    });
    setFilteredEvents(filtered);
  };

  // const handleCategoryChange = (category: string) => {
  //   console.log("Selected Category", selectedCategory); // Placeholder to prevent deployment error
  //   setSelectedCategory(category);
  //   if (category === "All Events") {
  //     setFilteredEvents(events);
  //   } else {
  //     const filtered = events.filter(
  //       (event) => event.category === category, // You'll need to add category to your EventProps
  //     );
  //     setFilteredEvents(filtered);
  //   }
  // };

  return (
    <>
      <main className="min-h-screen flex flex-col items-center py-6">
        <SearchBar
          onSearch={handleSearch}
          // onCategoryChange={handleCategoryChange}
        />
        
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 md:px-0 mx-2 my-4 justify-items-center h-fit max-w-[1480px]">
          {loading ? (
            // Show 8 skeleton cards while loading
            [...Array(8)].map((_, index) => (
              <SkeletonCard key={`skeleton-${index}`} />
            ))
          ) : filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
              No events found
            </p>
          )}
        </section>
      </main>
    </>
  );
}
