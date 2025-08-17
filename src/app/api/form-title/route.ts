import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const formId = searchParams.get("formId");

  if (!formId) {
    return NextResponse.json({ error: "Form ID required" }, { status: 400 });
  }

  try {
    const response = await fetch(`https://tally.so/r/${formId}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Bot/1.0)",
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    const html = await response.text();
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);

    if (titleMatch && titleMatch[1]) {
      return NextResponse.json({ title: titleMatch[1].trim() });
    }

    return NextResponse.json({ title: `Form ${formId}` });
  } catch (error) {
    console.error("Error fetching form title:", error);
    return NextResponse.json({ title: `Form ${formId}` });
  }
}
