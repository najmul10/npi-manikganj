import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const departments = await db.department.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json({ success: true, data: departments });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: "Failed to load departments" },
      { status: 500 }
    );
  }
}
