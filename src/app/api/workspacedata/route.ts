import { NextRequest, NextResponse } from "next/server";
import { getXataClient } from "../../../xata";

const xata = getXataClient();

export async function POST(request: NextRequest) {
  const req = await request.json();
  const record = await xata.db.WorkspaceData.create({
    UserId: req.UserId,
    WorkspaceName: req.WorkspaceName,
  });
  return NextResponse.json({ id: record.id });
}
