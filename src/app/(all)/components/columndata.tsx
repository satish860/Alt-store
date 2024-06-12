"use client"
 
import { ColumnDef } from "@tanstack/react-table"
 

export type Folder = {
  Folderid: string
  Foldername: string
  Foldersize: number
}
 
export const Columndata: ColumnDef<Folder>[] = [
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