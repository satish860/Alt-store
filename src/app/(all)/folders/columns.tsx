"use client"
 
import { ColumnDef } from "@tanstack/react-table"
 
export type Folder = {
  id: string
  name: string
  size: number
}
 
export const Column: ColumnDef<Folder>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "size",
    header: "Total size",
  },
]