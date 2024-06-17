"use client"
import React, { useEffect, useRef } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";

// Set the workerSrc globally
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface PdfThumbnailProps {
  fileUrl: string;
}

const PdfThumbnail: React.FC<PdfThumbnailProps> = ({ fileUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const renderPage = async () => {
      const pdf = await getDocument(fileUrl).promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1 });
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (canvas && context) {
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
          canvasContext: context,
          viewport,
        };
        page.render(renderContext);
      }
    };

    renderPage();
  }, [fileUrl]);

  return <canvas ref={canvasRef} />;
};

export default PdfThumbnail;
