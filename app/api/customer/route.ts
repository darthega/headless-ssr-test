import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    isRegistered: false,
    customerId: "abQJug7W2RX5D66cYbwlT3pyWM",
  });
}
