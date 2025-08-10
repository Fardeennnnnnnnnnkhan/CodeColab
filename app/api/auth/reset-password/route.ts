import { NextRequest, NextResponse } from "next/server";
import { getBackendUrl } from "../../../config/api";

export async function POST(request: NextRequest) {
  try {
    const { token, password } = await request.json();

    // Validate required fields
    if (!token || typeof token !== "string") {
      return NextResponse.json(
        { message: "Reset token is required" },
        { status: 400 }
      );
    }

    if (!password || typeof password !== "string") {
      return NextResponse.json(
        { message: "New password is required" },
        { status: 400 }
      );
    }

    // Password strength validation
    if (password.length < 8) {
      return NextResponse.json(
        { message: "Password must be at least 8 characters long" },
        { status: 400 }
      );
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      return NextResponse.json(
        {
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, and one number",
        },
        { status: 400 }
      );
    }

    // Forward request to backend
    const backendUrl = getBackendUrl("/api/auth/reset-password");

    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || "Failed to reset password" },
        { status: response.status }
      );
    }

    // Return success response
    return NextResponse.json(
      {
        message: "Password reset successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
