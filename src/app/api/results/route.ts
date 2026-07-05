import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const roll = req.nextUrl.searchParams.get("roll")?.trim();
    if (roll) {
      const result = await db.result.findUnique({
        where: { rollNo: roll },
      });
      if (!result) {
        return NextResponse.json(
          { success: false, error: "No result found for this roll number." },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, data: result });
    }
    const results = await db.result.findMany({
      orderBy: { rollNo: "asc" },
      take: 50,
    });
    return NextResponse.json({ success: true, data: results });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: "Failed to load results" },
      { status: 500 }
    );
  }
}
