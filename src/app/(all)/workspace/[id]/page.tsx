import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Foldercreation from "../../components/foldercreation";
import { getXataClient } from "../../../../xata";
import { Folder, Column } from "../[id]/columns";
import { DataTable } from "./datatable";
import BreadcrumbResponsive from "../../components/breadcrumb";

const xata = getXataClient();

async function getData(id: string): Promise<Folder[]> {
  const records = await xata.db.FolderData.select([
    "Userid",
    "Foldername",
    "id",
  ])
    .filter("Workspace", id)
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

export default async function Workspace({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);
  const record = await xata.db.WorkspaceData.read(params.id);
  const name = record?.WorkspaceName;
  const items = [
    { href: "/dashboard", label: "Workspace" },
    { href: "/", label: name! },
  ];

  return (
    <div className="container w-full py-6 lg:py-4 flex flex-col space-y-6">
      <div className="flex justify-between items-center h-[10%] pt-2">
        <BreadcrumbResponsive items={items} />
      </div>
      <hr />
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
}
