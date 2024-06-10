import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import FolderPopup from "../components/folderpopup";
import { DataTable } from "../components/datatable";

const Folders = () => {
  return (
    <div className="container max-w-7xl py-6 lg:py-6 flex flex-col">
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">Folders</span>
        <div className="flex items-center gap-2">
          <div className="w-[300px] h-10 border rounded-lg flex items-center p-1">
            <Search />
            <Input />
          </div>
          <FolderPopup />
        </div>
      </div>
      <DataTable />
    </div>
  );
};

export default Folders;
