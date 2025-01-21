import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { targetURL } = body;

    if (!targetURL) {
      return NextResponse.json(
        { error: "targetURL is missing from the request" },
        { status: 400 },
      );
    }

    if (!isAllowedDomain(targetURL)) {
      return NextResponse.json(
        {
          error:
            "URL Domain is not accepted. Only Luma or Meetup events are accepted",
        },
        { status: 400 },
      );
    }

    return NextResponse.json({ message: "URL is valid" }, { status: 200 });
  } catch (error: unknown) {
    console.error({ error: error }, { status: 500 });
  }

  // Function to check whether the event is from Luma and Meetup
  function isAllowedDomain(url: string) {
    const allowedDomains = ["lu.ma", "www.meetup.com"];

    try {
      const hostname = new URL(url).hostname;
      return allowedDomains.includes(hostname);
    } catch (error: unknown) {
      console.error({ error: error }, { status: 500 });
    }
  }
}
