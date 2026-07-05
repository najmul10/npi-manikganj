import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const blogs = await db.blog.findMany({
      orderBy: { date: "desc" },
    });
    return NextResponse.json({ success: true, data: blogs });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: "Failed to load blog posts" },
      { status: 500 }
    );
  }
}
