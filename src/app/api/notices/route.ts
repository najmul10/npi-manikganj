import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const notices = await db.notice.findMany({
      orderBy: [{ isPinned: "desc" }, { date: "desc" }],
    });
    return NextResponse.json({ success: true, data: notices });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: "Failed to load notices" },
      { status: 500 }
    );
  }
}
