import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export async function POST(request: NextRequest) {
    const { eventDetails } = await request.json();

    try {
        await client.connect();
        const database = client.db(process.env.DATABASE_NAME as string);
        const collection = database.collection(process.env.COLLECTION_NAME as string);

        const result = await collection.insertOne(eventDetails);
        
        if (result.acknowledged) {
            return NextResponse.json({ message: "Event added successfully" }, { status: 200 });
        } else {
            return NextResponse.json({ error: "Failed to add event" }, { status: 500 });
        }
    } catch (error: unknown) {
        console.error("Error adding event to mongoDB:", error);
        return NextResponse.json({ error: error as string }, { status: 500 });
    } finally {
        await client.close();
    }
}
