"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Workspacecreation() {
  const { userId } = useAuth();
  const [workspaceName, setWorkspaceName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleCreateClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/workspacedata", {
        UserId: userId,
        WorkspaceName: workspaceName,
      });
      console.log(response.data.id);
      router.push(`/workspace/${response.data.id}`);
      setOpen(false);
    } catch (err) {
      console.error("Error creating workspace:", err);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#17A34A] text-white hover:bg-[#17A34A] hover:text-white"
        >
          Create Workspace
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="">
          <DialogTitle className="font-bold ">Create Workspace</DialogTitle>
          <Separator />
          <div className="h-32 flex flex-col justify-center ">
            <span className="font-500">Workspace Name</span>
            <div className="border h-10 w-full flex justify-center items-center rounded-md">
              <Input
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
              />
            </div>
          </div>
          <Separator />
        </DialogHeader>

        <DialogFooter className="flex justify-center items-center">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button
            className="bg-[#17A34A] text-white hover:bg-[#17A34A] hover:text-white"
            onClick={handleCreateClick}
          >
            {loading ? "Creating..." : "Create"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
