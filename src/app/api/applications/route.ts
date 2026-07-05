import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, sscGpa, department, message } = body;

    if (!name || !email || !phone || !department) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }
    if (typeof sscGpa !== "number" || sscGpa < 0 || sscGpa > 5) {
      return NextResponse.json(
        { success: false, error: "SSC GPA must be between 0 and 5." },
        { status: 400 }
      );
    }

    const application = await db.application.create({
      data: {
        name: String(name).slice(0, 120),
        email: String(email).slice(0, 160),
        phone: String(phone).slice(0, 40),
        sscGpa,
        department: String(department).slice(0, 120),
        message: String(message || "").slice(0, 1000),
      },
    });

    return NextResponse.json({
      success: true,
      data: { id: application.id, reference: application.id.slice(-8).toUpperCase() },
      message: "Application submitted successfully.",
    });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: "Failed to submit application." },
      { status: 500 }
    );
  }
}
