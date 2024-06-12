import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Foldercreation from "../components/foldercreation";
import { getXataClient } from "../../../xata";
import { auth } from "@clerk/nextjs/server";

interface FolderRecord {
  id: string;
  Userid?: string;
  Foldername: string;
}

const xata = getXataClient();

const Folders = async () => {
  const { userId }: { userId: string | null } = auth();

  const records = await xata.db.Altstore.select(["Userid", "Foldername", "id"])
    .filter("Userid", userId)
    .getAll();

  const filteredRecords: FolderRecord[] = records
    .filter(
      (record) => record.Foldername !== null && record.Foldername !== undefined
    )
    .map((record) => ({
      id: record.id,
      Userid: record.Userid || undefined,
      Foldername: record.Foldername as string,
    }));

  return (
    <div className="container w-full py-6 lg:py-6 flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">Folders</span>
        <div className="flex items-center gap-2">
          <div className="w-[300px] h-10 border rounded-lg flex items-center p-1">
            <Search />
            <Input placeholder="Search by folder / file name" />
          </div>
          <Foldercreation />
        </div>
      </div>
    </div>
  );
};

export default Folders;
