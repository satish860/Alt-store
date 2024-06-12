"use client"
 
import { ColumnDef } from "@tanstack/react-table"
 
export type Folder = {
  id: string
  name: string
  size: number
}
 
export const Column: ColumnDef<Folder>[] = [
  {
    accessorKey: "Name",
    header: "Foldername",
  },
  {
    accessorKey: "Size",
    header: "Foldersize",
  },
]