"use client";
import { Button } from "@/components/ui/button";
import { IoMdArrowDropright } from "react-icons/io";
import { SignInButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Landinginput from "./(all)/components/landinginput";
import { Dock } from "lucide-react";
import { Spline } from "lucide-react";
import { DollarSign } from "lucide-react";
import { Cloud } from "lucide-react";
import { Split } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { GitCompareArrows } from "lucide-react";
import { Heart } from "lucide-react";
import { BarChartHero } from "./(all)/components/barchat";

export default function Home() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[1] bg-grid-black/[0.10] flex flex-col items-center justify-start">
        <div className="w-[80%] flex justify-between items-center h-16 fixed p-6 bg-white z-30 rounded-full mt-4">
          {/* <Topnav /> */}
          <div className="flex items-center gap-10">
            <img src="/Frame 6 (1).svg" className="w-24 h-14"></img>
            <div className="flex items-center gap-6">
              <a className="text-gray-600 text-sm">Home</a>
              <a className="text-gray-600 text-sm">Contact</a>
              <a className="text-gray-600 text-sm">Help</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <SignedOut>
              <SignInButton>
                <Button variant="secondary" className="rounded-full">
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <Button className="rounded-full">Sign up</Button>
              </SignInButton>
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
        <div className="w-full flex justify-center items-center mb-10">
          <BarChartHero />
        </div>

        <div className="w-full h-[30rem] flex justify-center items-center">
          <div className=" w-full flex flex-col justify-center items-center">
            <div className="w-full h-full flex items-center justify-center">
              <div className="group w-[24%] h-52 border-l border-r border-b border-gray-300 p-8 space-y-4 bg-white hover:bg-gradient-to-t hover:from-gray-100 hover:to-white">
                <Dock className="w-7 h-7" />
                <h1 className="text-lg font-bold transition-all duration-300 group-hover:ml-1">
                  Built for developers
                </h1>
                <p className="text-sm text-gray-600">
                  Built for engineers, developers, dreamers, thinkers and doers.
                </p>
              </div>
              <div className="group w-[24%] h-52 border-l border-r border-b border-gray-300 p-8 space-y-4 bg-white hover:bg-gradient-to-t hover:from-gray-100 hover:to-white">
                <Spline className="w-7 h-7" />
                <h1 className="text-lg font-bold transition-all duration-300 group-hover:ml-1">
                  Ease of use
                </h1>
                <p className="text-sm text-gray-600">
                  It&#39;s as easy as using an Apple, and as expensive as buying
                  one.
                </p>
              </div>
              <div className="group w-[24%] h-52 border-l border-r border-b border-gray-300 p-8 space-y-4 bg-white hover:bg-gradient-to-t hover:from-gray-100 hover:to-white">
                <DollarSign className="w-7 h-7" />
                <h1 className="text-lg font-bold transition-all duration-300 group-hover:ml-1">
                  Pricing like no other
                </h1>
                <p className="text-sm text-gray-600">
                  Our prices are best in the market. No cap, no lock, no credit
                  card required.
                </p>
              </div>
              <div className="group w-[24%] h-52 border-l border-r border-b border-gray-300 p-8 space-y-4 bg-white hover:bg-gradient-to-t hover:from-gray-100 hover:to-white">
                <Cloud className="w-7 h-7" />
                <h1 className="text-lg font-bold transition-all duration-300 group-hover:ml-1">
                  100% Uptime guarantee
                </h1>
                <p className="text-sm text-gray-600">
                  We just cannot be taken down by anyone.
                </p>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="group w-[24%] h-52 border-l border-r border-t border-gray-300 p-8 space-y-4 bg-white hover:bg-gradient-to-b hover:from-gray-100 hover:to-white">
                <Split className="w-7 h-7" />
                <h1 className="text-lg font-bold transition-all duration-300 group-hover:ml-1">
                  Multi-tenant Architecture
                </h1>
                <p className="text-sm text-gray-600">
                  You can simply share passwords instead of buying new seats
                </p>
              </div>
              <div className="group w-[24%] h-52 border-l border-r border-t border-gray-300 p-8 space-y-4 bg-white hover:bg-gradient-to-b hover:from-gray-100 hover:to-white">
                <CircleHelp className="w-7 h-7" />
                <h1 className="text-lg font-bold transition-all duration-300 group-hover:ml-1">
                  24/7 Customer Support
                </h1>
                <p className="text-sm text-gray-600">
                  We are available a 100% of the time. Atleast our AI Agents
                  are.
                </p>
              </div>
              <div className="group w-[24%] h-52 border-l border-r border-t border-gray-300 p-8 space-y-4 bg-white hover:bg-gradient-to-b hover:from-gray-100 hover:to-white">
                <GitCompareArrows className="w-7 h-7" />
                <h1 className="text-lg font-bold transition-all duration-300 group-hover:ml-1">
                  Money back guarantee
                </h1>
                <p className="text-sm text-gray-600">
                  If you donot like EveryAI, we will convince you to like us.
                </p>
              </div>
              <div className="group w-[24%] h-52 border-l border-r border-t border-gray-300 p-8 space-y-4 bg-white hover:bg-gradient-to-b hover:from-gray-100 hover:to-white">
                <Heart className="w-7 h-7" />
                <h1 className="text-lg font-bold transition-all duration-300 group-hover:ml-1">
                  And everything else
                </h1>
                <p className="text-sm text-gray-600">
                  I just ran out of copy ideas. Accept my sincere apologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
