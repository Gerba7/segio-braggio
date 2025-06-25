'use client'

import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist/webpack";

const PDFViewer = ({ pdfPath }) => {

  const canvasRef = useRef(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 799); // Example threshold for mobile
        };

        checkMobile(); // Initial check
        window.addEventListener('resize', checkMobile); // Listen for resize events

        return () => {
            window.removeEventListener('resize', checkMobile); // Cleanup event listener
        };
    }, []);

  useEffect(() => {
    const loadPDF = async () => {
      const pdf = await pdfjsLib.getDocument(pdfPath).promise;
      setNumPages(pdf.numPages);
      renderPage(pdf, currentPage);
    };

    const renderPage = async (pdf, pageNum) => {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport,
      };
      await page.render(renderContext).promise;
    };

    loadPDF();
  }, [pdfPath, currentPage]);

  const goToNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
        {isMobile ?
        <div style={{ textAlign: "center" }}>
            <canvas ref={canvasRef} style={{ maxWidth: "150%" }} />
            <div style={{ marginTop: "10px", display: 'flex', gap: '5vw', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <button onClick={goToPreviousPage} disabled={currentPage <= 1} style={{ backgroundColor: "#DBBF84", fontSize: '14px', padding: '5px 10px', color: '#2a344c', borderRadius: '5px', outline: 'none', border: 'none', cursor: 'pointer' }}>
                Anterior
                </button>
                <span>
                Página {currentPage} de {numPages}
                </span>
                <button onClick={goToNextPage} disabled={currentPage >= numPages} style={{ backgroundColor: "#DBBF84", fontSize: '14px', padding: '5px 10px', color: '#2a344c', borderRadius: '5px', outline: 'none', border: 'none', cursor: 'pointer' }}>
                Siguiente
                </button>
            </div>
        </div>
        :
        <iframe
            src={pdfPath}
            width="100%"
            height="100%"
            style={{minHeight: '99.5vh', border: 'none'}}
        />
        }
    </>
  );
};

export default PDFViewer;