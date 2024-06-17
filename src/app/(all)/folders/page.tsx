import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Foldercreation from "../components/foldercreation";
import { getXataClient } from "../../../xata";
import { auth } from "@clerk/nextjs/server";
import { Folder, Column } from "./columns";
import { DataTable } from "../folders/datatable";

const xata = getXataClient();

async function getData(): Promise<Folder[]> {
  const { userId }: { userId: string | null } = auth();

  const records = await xata.db.FolderData.select(["Userid", "Foldername", "id"])
    .filter("Userid", userId)
    .getAll();

  const filteredRecords: Folder[] = records
    .filter(
      (record) => record.Foldername !== null && record.Foldername !== undefined
    )
    .map((record) => ({
      id: record.id,
      name: record.Foldername as string,
      shared: [{ name: "Static User", email: "staticuser@example.com" }], 
      updated: "Not yet implemented", 
      size: 0,
    }));

  return filteredRecords;
}

const Folders = async () => {
  const data = await getData();
  
  return (
    <div className="container w-full py-6 lg:py-6 flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">Home</span>
        <div className="flex items-center gap-2">
          <div className="w-[300px] h-10 border rounded-lg flex items-center p-1">
            <Search />
            <Input placeholder="Search by folder / file name" />
          </div>
          <Foldercreation />
        </div>
      </div>
      <DataTable columns={Column} data={data} />
    </div>
  );
};

export default Folders;
