import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const items = await db.galleryItem.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: items });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: "Failed to load gallery" },
      { status: 500 }
    );
  }
}
