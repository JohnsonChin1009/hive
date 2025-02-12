"use client";

import EventCard from "@/components/custom/EventCard";
import SkeletonCard from "@/components/custom/SkeletonCard";
import { useState, useEffect } from "react";
import { EventProps } from "@/utils/props/event";

export default function HomePage() {
  const [events, setEvents] = useState<EventProps[]>([]);
  const [loading, setLoading] = useState(true);

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
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    }

    getEvents();
  }, []);

  return (
    <>
      <main className="min-h-screen flex justify-center">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 md:px-0 mx-auto my-4 justify-items-center h-fit max-w-[1400px]">
          {loading ? (
            // Show 8 skeleton cards while loading
            [...Array(8)].map((_, index) => (
              <SkeletonCard key={`skeleton-${index}`} />
            ))
          ) : events.length > 0 ? (
            events.map((event) => <EventCard key={event._id} event={event} />)
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
