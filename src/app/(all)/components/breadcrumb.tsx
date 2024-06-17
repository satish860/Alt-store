"use client";
import * as React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbHeaderProps {
  items: BreadcrumbItem[];
}

const ITEMS_TO_DISPLAY = 3;

const BreadcrumbResponsive: React.FC<BreadcrumbHeaderProps> = ({ items }) => {
  const itemsToRender = items.slice(-ITEMS_TO_DISPLAY);
  const lastItem = itemsToRender[itemsToRender.length - 1];
  const otherItems = itemsToRender.slice(0, -1);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {otherItems.map((item, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink asChild className="max-w-20 truncate md:max-w-none">
              <Link href={item.href!}>{item.label}</Link>
            </BreadcrumbLink>
            <BreadcrumbSeparator />
          </BreadcrumbItem>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
            {lastItem.label}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbResponsive;
