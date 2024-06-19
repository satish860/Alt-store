"use client";
import { Button } from "@/components/ui/button";
import { Topnav } from "./(all)/components/topnav";
import { IoMdArrowDropright } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SignIn, SignInButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import Landinginput from "./(all)/components/landinginput";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[1] bg-grid-black/[0.10] flex flex-col items-center justify-start">
        <div className="w-full flex justify-between items-center h-16 fixed p-6 bg-white z-30 rounded-full mt-4">
          {/* <Topnav /> */}
          <div className="flex items-center gap-10">
            <img src="/Frame 6 (1).svg" className="w-24 h-14"></img>
            <div className="flex items-center gap-6">
              <a className="text-gray-600 text-sm">Home</a>
              <a className="text-gray-600 text-sm">Contact</a>
              <a className="text-gray-600 text-sm">Help</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <SignedOut>
              <Button className="rounded-full">Log in</Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </div>

        <div className="relative z-20 bg-clip-text bg-gradient-to-b text-black py-8 w-full h-[40rem] flex flex-col justify-center items-center space-y-10">
          <div className="w-[20%] h-6 rounded-full border bg-gray-50 flex items-center justify-center text-sm">
            we&#39;ve raised 1m seed funding
            <IoMdArrowDropright />
          </div>
          <div className="space-y-6 flex flex-col justify-center items-center">
            <h1 className="text-4xl sm:text-8xl font-bold">
              S3 for the Rest of Us
            </h1>
            <p className="w-[70%] text-center text-md z-10 text-xl">
              You don&#39;t need to be a cloud guru to keep your data safe and
              scale to infinity. Our S3 makes industrial-strength security and
              scalability as easy as microwaving popcorn.
            </p>
          </div>
          <Landinginput />
        </div>
        <div className="w-full h-[50rem]"></div>
      </div>
    </div>
  );
}
