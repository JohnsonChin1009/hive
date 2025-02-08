import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const database = client.db("hive-website");
    const collection = database.collection("event-details");

    const events = await collection.find({}).toArray();
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error("Error fetching events from mongoDB:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 },
    );
  } finally {
    await client.close();
  }
}
