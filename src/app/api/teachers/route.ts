import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const teachers = await db.teacher.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json({ success: true, data: teachers });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: "Failed to load faculty" },
      { status: 500 }
    );
  }
}
