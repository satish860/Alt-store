import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-start">
        <div className="w-full flex justify-end items-end">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignIn />
          </SignedOut>
        </div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 w-full h-full flex justify-center items-center">
          Alt-Store
        </p>
      </div>
    </div>
  );
}
