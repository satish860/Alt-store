import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Fileupload from "../components/fileupload";
import Filesview from "../components/filesview";

const Fileview = () => {
  return (
    <div className="container w-full py-6 lg:py-6 flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">Files</span>
        <div className="flex items-center gap-2">
          <div className="w-[300px] h-10 border rounded-lg flex items-center p-1">
            <Search />
            <Input />
          </div>
          <Fileupload />
        </div>
      </div>
      <Filesview/>
    </div>
  );
};

export default Fileview;
