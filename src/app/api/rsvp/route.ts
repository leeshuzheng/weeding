import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycby2lzdQKqF8WhA2psgzWKTfwBB_cuxOocGIsPepoxxUZ6zTZj3SB2SwCJAHQ9p_8glF/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Failed to submit RSVP" }, { status: 500 });
  }
}
