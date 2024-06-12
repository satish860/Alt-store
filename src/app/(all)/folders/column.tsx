"use client"
 
import { ColumnDef } from "@tanstack/react-table"
 
export type Folder = {
  id: string
  Name: string
  Size: number
}
 
export const Column: ColumnDef<Folder>[] = [
  {
    accessorKey: "Foldername",
    header: "Foldername",
  },
  {
    accessorKey: "Foldersize",
    header: "Foldersize",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]