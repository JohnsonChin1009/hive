"use client";

import EventCard from "@/components/custom/EventCard";
import { useState, useEffect } from "react";
import EventProps from "@/utils/props/event";

export default function HomePage() {
  const [events, setEvents] = useState<EventProps[]>([]);

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
      const result = await fetchEvents();
      setEvents(result);
    }

    getEvents();
  }, []);

  return (
    <>
      <main className=" min-h-screen flex justify-center">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto my-4 justify-items-center h-fit">
          {events.length > 0 ? (
            events.map((event) => <EventCard key={event._id} event={event} />)
          ) : (
            <p>Loading events...</p>
          )}
        </section>
      </main>
    </>
  );
}
