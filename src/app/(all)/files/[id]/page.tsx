import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Fileupload from "../../components/fileupload";
import Filesview from "../../components/filesview";
import { getXataClient } from "../../../../../src/xata";
import { auth } from "@clerk/nextjs/server";

const xata = getXataClient();

const Fileview = async ({ params }: { params: { id: string } }) => {
  console.log("paramssss", params);
  const { userId }: { userId: string | null } = auth();

  const records = await xata.db.Altstore.select(["Userid", "Foldername", "id"])
    .filter("Userid", userId)
    .getAll();
  console.log("recordssss", records);

  const firstRecord =
    records.length > 0 ? records[0] : { Foldername: "", Userid: "" };
  const folderName = firstRecord.Foldername || "Default Folder";
  const userIdString = firstRecord.Userid || "Default User";

  return (
    <div className="container w-full py-6 lg:py-6 flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">Files</span>
        <div className="flex items-center gap-2">
          <div className="w-[300px] h-10 border rounded-lg flex items-center p-1">
            <Search />
            <Input placeholder="Search by file name" />
          </div>
          <Fileupload folderName={folderName} userId={userIdString} />
        </div>
      </div>
      <Filesview />
    </div>
  );
};

export default Fileview;
