"use client"
import { Button } from "@/components/ui/button";

const Fileupload = () => {
  return (
    <div>
      <input
        type="file"
        accept="application/pdf"
        style={{ display: "none" }}
        id="file-upload"
        // onChange={handleFileChange}
        className="file-input"
      />
      <Button
        onClick={() =>
          document.querySelector<HTMLInputElement>("#file-upload")?.click()
        }
       className="bg-[#17A34A] hover:bg-[#17A34A] text-white hover:text-white"
      >
        <span>Upload file</span>
      </Button>
    </div>
  );
};

export default Fileupload;
