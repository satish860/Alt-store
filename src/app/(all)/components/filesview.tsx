import { HiOutlineDotsVertical } from "react-icons/hi";
import { FilesviewProps } from "../../../lib/types";
import Link from "next/link";

const Filesview: React.FC<FilesviewProps> = ({ files }) => {
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {files.map((file) => (
        <div
          key={file.id}
          className="w-[271px] h-[243px] border p-2 rounded-lg bg-gray-50 space-y-1 m-2"
        >
          <div className="w-full h-[75%] bg-white rounded-lg"></div>
          <div className="w-full flex justify-center items-center">
            <div className="w-[80%] space-y-1 p-1">
              <Link
                href={file.File_url}
                target="_blank"
                rel="noopener noreferrer"
                className="truncate font-500"
              >
                {file.Filename}
              </Link>
              <h1 className="truncate font-400 text-md">
                24 kb · 21 April 2024
              </h1>
            </div>
            <div className="w-[20%] h-full flex justify-center items-center">
              <HiOutlineDotsVertical />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filesview;
