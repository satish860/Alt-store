import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className=" flex justify-between items-center w-full">
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[1] bg-grid-black/[0.10] relative flex flex-col items-center justify-start">
        <div className="w-full flex justify-center items-center">
          <div className="w-[70%] h-18 bg-gray-100 flex justify-between items-center rounded-xl p-2 fixed mt-20 shadow-xl border border-b">
            <img
              src="/aj_logo_21_09_2023 2 (1).png"
              className="w-16 h-12"
            ></img>
            <div className="flex items-center gap-10">
              <a>Home</a>
              <a>About</a>
              <a>Contact</a>
            </div>
            <div>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignIn />
              </SignedOut>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 w-full h-full flex justify-center items-center">
          Alt-Store
        </p>
      </div>
    </div>
  );
}
