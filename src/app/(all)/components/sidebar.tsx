"use client";
import Image from "next/image";
import { ArrowLeftFromLine } from "lucide-react";
import { SearchX, Zap, ArrowRightToLine } from "lucide-react";
import { useState } from "react";
import { Homesvg, Settingsvg } from "../../../../public/icons/icons";
import { ImPower } from "react-icons/im";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hideText, setHideText] = useState(true);

  const toggleSidebarWidth = () => {
    setIsExpanded(!isExpanded);
    setHideText(!hideText);
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center transition-all duration-300 ${
        isExpanded
          ? "md:w-[15%] w-[30%] bg-white"
          : "w-[15%] md:w-[5%] bg-[#F6F8FA]"
      }`}
    >
      <div className=" flex flex-col space-y-4 h-full w-full border-r ">
        <div
          className={`w-full h-[10%] flex ${
            hideText ? "justify-center" : "justify-between"
          } items-center px-2 py-1 border-b border-gray-300`}
        >
          {!hideText && (
            <a
              href="https://www.askjunior.ai/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="w-22 h-12"
                src="/Frame 6 (1).svg"
                alt="heroimage"
                width={100}
                height={100}
              />
            </a>
          )}
          <button onClick={toggleSidebarWidth} className="p-2 ">
            {!hideText ? <ArrowLeftFromLine /> : <ArrowRightToLine />}
          </button>
        </div>
        <div className=" flex flex-col px-2 py-1 space-y-2">
          <a
            className={`w-full h-[36px] rounded-xl flex items-center gap-2 hover:bg-gray-300 px-2 ${
              hideText ? "justify-center" : "justify-start"
            }`}
            href="/folders"
          >
            <Homesvg />
            {!hideText && <span className="font-500">Home</span>}
          </a>
          <a
            className={`w-full h-[36px] rounded-xl flex items-center gap-2 hover:bg-gray-300 px-2 ${
              hideText ? "justify-center" : "justify-start"
            }`}
          >
            <Settingsvg />
            {!hideText && <span className="font-500">Settings</span>}
          </a>
          <a
            className={`w-full h-[36px] rounded-xl flex items-center gap-2 hover:bg-gray-300 px-2 ${
              hideText ? "justify-center" : "justify-start"
            }`}
          >
            <ImPower />
            {!hideText && <span className="font-500">Credits</span>}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
