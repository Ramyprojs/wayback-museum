import { NextResponse } from "next/server";
import { getVisitorCount, incrementVisitorCount } from "@/lib/visitor-counter";

export async function GET() {
  const totalVisitors = await getVisitorCount();
  return NextResponse.json({ totalVisitors });
}

export async function POST() {
  const totalVisitors = await incrementVisitorCount();
  return NextResponse.json({ totalVisitors });
}
