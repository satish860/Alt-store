import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "../../../components/ui/separator";

const FolderPopup = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#17A34A] text-white hover:bg-[#17A34A] hover:text-white"
        >
          Create Folder
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-bold">Create folder</DialogTitle>
          <Separator />
          <span className="font-500">Folder Name</span>
          <div className="border h-10 w-full flex justify-center items-center rounded-md">
            <Input />
          </div>
        </DialogHeader>
        <DialogFooter className="flex justify-center items-center">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button className="bg-[#17A34A] text-white hover:bg-[#17A34A] hover:text-white">
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FolderPopup;
