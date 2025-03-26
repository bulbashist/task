import { AuthService } from "@/app/services/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    await AuthService.verify(body.token);
    return NextResponse.json({});
  } catch {
    return NextResponse.json({}, { status: 401 });
  }
}
