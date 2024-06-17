"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Upload } from "hello-app-test";
import axios from "axios";
import { useRouter } from "next/navigation";

interface FileuploadProps {
  folderName: string;
  userId: string;
  id: string;
}

const Fileupload: React.FC<FileuploadProps> = ({ folderName, userId, id }) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const url = process.env.NEXT_PUBLIC_ALT_STORAGE_URL || "";
  const accesssUrl = process.env.NEXT_PUBLIC_ALT_ACCESS_URL || "";
  const uploader = new Upload();
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const selectedFile = event.target.files?.[0] || null;
      console.log(selectedFile);
      setFile(selectedFile);
      if (selectedFile) {
        uploadFile(selectedFile);
      }
    } catch (error) {
      alert("An error occurred while processing the file.");
      console.error("Error in handleFileChange:", error);
    }
  };

  const uploadFile = async (file: File) => {
    setLoading(true);
    const folderPath = `${userId}/${folderName}`;
    try {
      await uploader.singleFile(file, url, {
        folderPath: folderPath,
      });
      console.log("File uploaded successfully");

      try {
        const pdfUrl = `${accesssUrl}/${folderPath}/${file.name}`;
        const filedata = await axios.post("/api/filedata", {
          Filename: file.name,
          FileUrl: pdfUrl,
          id: id,
        });
        router.refresh();
      } catch (error) {
        alert("Error saving file data");
        console.error("Error in saving file data:", error);
      }
    } catch (uploadError) {
      alert("Error uploading file");
      console.error("Error in uploadFile:", uploadError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="application/pdf"
        style={{ display: "none" }}
        id="file-upload"
        onChange={handleFileChange}
        className="file-input"
      />
      <Button
        onClick={() =>
          document.querySelector<HTMLInputElement>("#file-upload")?.click()
        }
        className="bg-[#17A34A] hover:bg-[#17A34A] text-white hover:text-white"
      >
        <span>{loading ? "Uploading..." : "Upload file"}</span>
      </Button>
    </div>
  );
};

export default Fileupload;
