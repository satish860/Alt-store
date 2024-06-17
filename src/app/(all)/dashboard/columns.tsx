"use client";
import { ColumnDef } from "@tanstack/react-table";
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

export const Column: ColumnDef<Workspace>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const folder = row.original;
      return (
        <Link href={`/files/${folder.id}`}>
          <span>{folder.name}</span>
        </Link>
      );
    },
  },
  {
    accessorKey: "size",
    header: "Total size",
  },
  {
    accessorKey: "shared",
    header: "Shared with",
    cell: ({ row }) => {
      const shared = row.original.shared;
      return (
        <div className="flex -space-x-2">
          {shared.map((user, index) => (
            <Avatar key={index}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "updated",
    header: "Last Update",
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const folder = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <HiOutlineDotsVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href={`/files/${folder.id}`}>
              <DropdownMenuItem>View</DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Rename</DropdownMenuItem>
            <Sharedialog />
            <DropdownMenuItem>Copy link</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
