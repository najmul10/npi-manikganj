import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, rating, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }
    const r = Number(rating);
    if (!Number.isFinite(r) || r < 1 || r > 5) {
      return NextResponse.json(
        { success: false, error: "Rating must be between 1 and 5." },
        { status: 400 }
      );
    }

    const feedback = await db.feedback.create({
      data: {
        name: String(name).slice(0, 120),
        email: String(email).slice(0, 160),
        rating: Math.round(r),
        message: String(message).slice(0, 1500),
      },
    });

    return NextResponse.json({
      success: true,
      data: { id: feedback.id },
      message: "Thank you for your feedback!",
    });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: "Failed to submit feedback." },
      { status: 500 }
    );
  }
}
