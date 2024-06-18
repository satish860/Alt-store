import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Fileupload from "../../components/fileupload";
import Filesview from "../../components/filesview";
import { getXataClient } from "../../../../../src/xata";
import { FileData } from "@/lib/types";

const xata = getXataClient();

async function getData(folderId: string): Promise<FileData[]> {
  const records = await xata.db.Filedata.select(["Filename", "File_url", "id"])
    .filter("Folder", folderId)
    .getAll();

  return records.map(record => ({
    id: record.id,
    Filename: record.Filename ?? "",
    File_url: record.File_url ?? "",
  }));
}

const Fileview = async ({ params }: { params: { id: string } }) => {
  const filedata = await getData(params.id);
  const record = await xata.db.FolderData.read(params.id);
  const folderName = record?.Foldername;
  const userId = record?.Userid;

  return (
    <div className="container w-full py-6 lg:py-6 flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">Files</span>
        <div className="flex items-center gap-2">
          <div className="w-[300px] h-10 border rounded-lg flex items-center p-1">
            <Search />
            <Input placeholder="Search by file name" />
          </div>
          <Fileupload
            folderName={folderName!}
            userId={userId!}
            id={params.id}
          />
        </div>
      </div>
      <Filesview files={filedata} />
    </div>
  );
};

export default Fileview;
