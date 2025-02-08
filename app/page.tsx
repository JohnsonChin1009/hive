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
      event_date: new Date(event.event_date),
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
      <main className="px-10 py-4 min-h-screen">
        <section className="flex flex-grow space-x-8">
          {events.length > 0 ? (
            events.map((event) => (
              <EventCard key={event._id} event={event} /> // Pass event data to EventCard
            ))
          ) : (
            <p>Loading events...</p> // Display a loading message until events are fetched
          )}
        </section>
      </main>
    </>
  );
}
