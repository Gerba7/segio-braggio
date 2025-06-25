import PDFViewer from '@/app/lib/pdfViewer';
import WhatsappContact from '@/app/ui/components/Common/WhatsappContact/WhatsappContact';
import React from 'react'


export const metadata = {
    title: "Abya Group | Eneagrama Corporativo",
    description: "Eneagrama Corporativo",
};



const eneagramaCorporativo = () => {
  return (
    <div style={{height: '100%', width: '100%'}}>
        <PDFViewer pdfPath="/Eneagrama. Brochure.pdf" />
        {/* <iframe
        src="/Eneagrama. Brochure.pdf"
        width="100%"
        height="100%"
        style={{ border: "none", minHeight: "99.5vh" }}
        /> */}
    </div>
  )
}

export default eneagramaCorporativo
