"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { IoCopyOutline } from "react-icons/io5";
import { DropdownMenuItem } from "../../../components/ui/dropdown-menu";



const Sharedialog = () => {
  const [Open, setOpen] = useState(false);
  return (
    <Dialog onOpenChange={setOpen} open={Open}>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e: any) => e.preventDefault()}>
          Share
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-bold">Share file</DialogTitle>
          <div>
            <Separator />
            <div className="h-32 flex flex-col justify-center ">
              <span className="font-500">Email</span>
              <div className="border h-10 w-full flex justify-center items-center rounded-md">
                <Input />
              </div>
              <span className="text-xs">
                Only invited people can access this file
              </span>
            </div>
            <Separator />
          </div>
        </DialogHeader>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center">
            <IoCopyOutline className="text-[#17A34A]" />
            <h1 className="text-[#17A34A]">Copy</h1>
          </div>
          <div className="gap-4 flex justify-center items-center">
            <DialogClose>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button className="bg-[#17A34A] text-white hover:bg-[#17A34A] hover:text-white">
              Share
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Sharedialog;
