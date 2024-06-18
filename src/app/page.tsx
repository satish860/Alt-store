import { Button } from "@/components/ui/button";
import { Topnav } from "./(all)/components/topnav";
import { IoMdArrowDropright } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <div className=" flex justify-between items-center w-full">
      <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[1] bg-grid-black/[0.10] relative flex flex-col items-center justify-start">
        <div className="w-full flex justify-center items-center">
          <Topnav />
        </div>
        <div className="absolute flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="  relative z-20 bg-clip-text bg-gradient-to-b text-black py-8 w-full h-[40rem] flex flex-col justify-center items-center space-y-10">
          <div className="w-[20%] h-6 rounded-full border bg-gray-50 flex items-center justify-center text-sm">
            we&#39;ve raised 1m seed funding
            <IoMdArrowDropright />
          </div>
          <div className=" space-y-6 flex flex-col justify-center items-center">
            <h1 className="text-4xl sm:text-8xl font-bold">
              S3 for the Rest of Us
            </h1>
            <p className="w-[60%] text-center text-md">
              You don&#39;t need to be a cloud guru to keep your data safe and scale
              to infinity. Our S3 makes industrial-strength security and
              scalability as easy as microwaving popcorn.
            </p>
          </div>
          <div className="gap-4 flex items-center">
            <Button className="rounded-full">Get started</Button>
            <Button variant="secondary" className="rounded-full">Contact us <IoIosArrowRoundForward/></Button>
          </div>
        </div>
        <div className="w-full h-[50rem]"></div>
      </div>
    </div>
  );
}
