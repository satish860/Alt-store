import { HiOutlineDotsVertical } from "react-icons/hi";

const Filesview = () => {
  return (
    <div className="w-full grid grid-cols-4 ">
      <div className="w-[271px] h-[243px] border p-2 rounded-lg bg-gray-50 space-y-1 m-2">
        <div className="w-full h-[75%] bg-white rounded-lg"></div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[80%] space-y-1 p-1">
            <h1 className="truncate font-500">Application filed by PSPCL_outp...</h1>
            <h1 className="truncate font-400 text-md">24 kb · 21 April 2024</h1>
          </div>
          <div className="w-[20%] h-full flex justify-center items-center ">
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
      <div className="w-[271px] h-[243px] border p-2 rounded-lg bg-gray-50 space-y-1 m-2">
        <div className="w-full h-[75%] bg-white rounded-lg"></div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[80%] space-y-1 p-1">
            <h1 className="truncate font-500">IA for Condonation delay_outpu...</h1>
            <h1 className="truncate font-400 text-md">1.1 mb · 17 April 2024</h1>
          </div>
          <div className="w-[20%] h-full flex justify-center items-center ">
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
      <div className="w-[271px] h-[243px] border p-2 rounded-lg bg-gray-50 space-y-1 m-2">
        <div className="w-full h-[75%] bg-white rounded-lg"></div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[80%] space-y-1 p-1">
            <h1 className="truncate font-500">Rejoinder to SOD_output_text p...</h1>
            <h1 className="truncate font-400 text-md">561 kb · 17 April 2024</h1>
          </div>
          <div className="w-[20%] h-full flex justify-center items-center ">
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
      <div className="w-[271px] h-[243px] border p-2 rounded-lg bg-gray-50 space-y-1 m-2">
        <div className="w-full h-[75%] bg-white rounded-lg"></div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[80%] space-y-1 p-1">
            <h1 className="truncate font-500">Reply in Arbitration of Talwan...</h1>
            <h1 className="truncate font-400 text-md">1021 kb · 15 April 2024</h1>
          </div>
          <div className="w-[20%] h-full flex justify-center items-center ">
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
      <div className="w-[271px] h-[243px] border p-2 rounded-lg bg-gray-50 space-y-1 m-2">
        <div className="w-full h-[75%] bg-white rounded-lg"></div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[80%] space-y-1 p-1">
            <h1 className="truncate font-500">SOC VOL. 1_output_text.pdf..</h1>
            <h1 className="truncate font-400 text-md">891 kb · 12 April 2024</h1>
          </div>
          <div className="w-[20%] h-full flex justify-center items-center ">
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filesview;
