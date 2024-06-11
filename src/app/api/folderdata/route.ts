import { NextRequest, NextResponse } from "next/server";
import { getXataClient } from "../../../xata";

const xata = getXataClient();

export async function POST(request: NextRequest) {
  const req = await request.json();
  const record = await xata.db.Altstore.create({
    Userid: req.User_id,
    Foldername: req.Foldername,
  });

  return NextResponse.json("");
}
