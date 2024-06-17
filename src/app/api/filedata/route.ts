import { NextRequest, NextResponse } from "next/server";
import { getXataClient } from "../../../../src/xata";

export const runtime = "edge";

const xata = getXataClient();

export async function POST(request: NextRequest) {
  const req = await request.json();
  try {
    const record = await xata.db.Filedata.create({
      Filename: req.Filename,
      File_url: req.FileUrl,
      Folder: req.id,
    });
    return NextResponse.json({ id: record.id });
  } catch (error) {
    console.error("Error:", error);
  }
}
