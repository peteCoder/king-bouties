import { NextRequest, NextResponse } from "next/server";

export default async function PUT(req: NextRequest) {
  return NextResponse.json({ message: "Working" });
}
