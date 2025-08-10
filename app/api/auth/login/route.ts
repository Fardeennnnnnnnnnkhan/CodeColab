import { NextRequest, NextResponse } from "next/server";
import { getBackendUrl } from "../../../config/api";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(getBackendUrl("/api/auth/login"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || "Login failed" },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
