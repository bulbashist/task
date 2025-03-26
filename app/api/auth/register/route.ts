/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthService } from "@/app/services/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    await AuthService.signIn(body.user);
    return NextResponse.json({});
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
}
