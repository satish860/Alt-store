import { HiOutlineDotsVertical } from "react-icons/hi";

const Filesview = () => {
  return (
    <div className="w-full grid grid-cols-4 ">
      <div className="w-[271px] h-[243px] border p-2 rounded-lg bg-gray-50 space-y-1 m-2">
        <div className="w-full h-[75%] bg-white rounded-lg"></div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[80%] space-y-1 p-1">
            <h1 className="truncate">Application filed by PSPCL_outp...</h1>
            <h1 className="truncate">24 kb · 21 April 2024</h1>
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
            <h1 className="truncate">IA for Condonation delay_outpu...</h1>
            <h1 className="truncate">1.1 mb · 17 April 2024</h1>
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
            <h1 className="truncate">Rejoinder to SOD_output_text p...</h1>
            <h1 className="truncate">561 kb · 17 April 2024</h1>
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
            <h1 className="truncate">Reply in Arbitration of Talwan...</h1>
            <h1 className="truncate">1021 kb · 15 April 2024</h1>
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
            <h1 className="truncate">SOC VOL. 1_output_text.pdf..</h1>
            <h1 className="truncate">891 kb · 12 April 2024</h1>
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
