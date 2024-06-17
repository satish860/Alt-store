import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getXataClient } from "../../../xata";
import { auth } from "@clerk/nextjs/server";
import { Workspace, WorkspaceGrid } from "./workspacegrid";
import { DataTable } from "../folders/datatable";
import Workspacecreation from "../components/workspacecreation";

const xata = getXataClient();

async function getData(): Promise<Workspace[]> {
  const { userId }: { userId: string | null } = auth();

  const records = await xata.db.WorkspaceData.select(["UserId", "WorkspaceName", "id"])
    .filter("UserId", userId)
    .getAll();

  const filteredRecords: Workspace[] = records
    .filter(
      (record) => record.WorkspaceName !== null && record.WorkspaceName !== undefined
    )
    .map((record) => ({
      id: record.id,
      name: record.WorkspaceName as string,
      shared: [{ name: "Static User", email: "staticuser@example.com" }], 
      updated: "Not yet implemented", 
      size: 0,
    }));

  return filteredRecords;
}

const Workspaces = async () => {
  const data = await getData();
  
  return (
    <div className="container w-full py-6 lg:py-6 flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">Workspace</span>
        <div className="flex items-center gap-2">
          <div className="w-[300px] h-10 border rounded-lg flex items-center p-1">
            <Search />
            <Input placeholder="Search by workspace name" />
          </div>
          <Workspacecreation />
        </div>
      </div>
      <WorkspaceGrid workspaces={data} />
    </div>
  );
};

export default Workspaces;
