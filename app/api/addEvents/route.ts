import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { RawEventProps } from "@/utils/props/event";

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export async function POST(request: NextRequest) {
  const { eventDetails } = await request.json();

  const formattedEventDetails: RawEventProps = {
    title: eventDetails.title,
    host: eventDetails.host,
    date: eventDetails.date,
    time: removeTimezone(eventDetails.time),
    venue: eventDetails.venue,
    fee: formatFee(eventDetails.fee),
    availability: capitalizeFirstLetter(eventDetails.availability),
    url: eventDetails.url,
    banner_url: eventDetails.banner_url,
    banner_alt: eventDetails.banner_alt,
    category: eventDetails.category,
  };

  try {
    await client.connect();
    const database = client.db(process.env.DATABASE_NAME as string);
    const collection = database.collection(
      process.env.COLLECTION_NAME as string,
    );

    const result = await collection.insertOne(formattedEventDetails);

    if (result.acknowledged) {
      return NextResponse.json(
        { message: "Event added successfully" },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        { error: "Failed to add event" },
        { status: 500 },
      );
    }
  } catch (error: unknown) {
    console.error("Error adding event to mongoDB:", error);
    return NextResponse.json({ error: error as string }, { status: 500 });
  } finally {
    await client.close();
  }
}

const removeTimezone = (time: string): string => {
  return time.replace(/\s*[A-Z]{2,4}$/, "");
};

const formatFee = (fee: string): string => {
  if (fee === "FREE") {
    return capitalizeFirstLetter(fee);
  } else {
    return fee;
  }
};

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
