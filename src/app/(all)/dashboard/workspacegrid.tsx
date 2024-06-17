import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Sharedialog from "../components/sharedialog";

export type Workspace = {
  id: string;
  name: string;
  size: number;
  shared: { name: string; email: string }[];
  updated: string;
};

export const WorkspaceGrid = ({ workspaces }: { workspaces: Workspace[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {workspaces.map((workspace) => (
        <div key={workspace.id} className="bg-white rounded shadow p-4 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <Link href={`/workspace/${workspace.id}`}>
              <h3 className="text-lg font-semibold">{workspace.name}</h3>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <HiOutlineDotsVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <Link href={`/workspace/${workspace.id}`}>
                  <DropdownMenuItem>View</DropdownMenuItem>
                </Link>
                <DropdownMenuItem>Rename</DropdownMenuItem>
                <Sharedialog />
                <DropdownMenuItem>Copy link</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex space-x-2">
            {workspace.shared.map((user, index) => (
              <Avatar key={index}>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm text-gray-500">
              {workspace.size} kb - {workspace.updated}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
