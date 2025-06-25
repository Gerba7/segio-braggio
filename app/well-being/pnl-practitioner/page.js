import PDFViewer from '@/app/lib/pdfViewer';
import WhatsappContact from '@/app/ui/components/Common/WhatsappContact/WhatsappContact';
import React from 'react'


export const metadata = {
    title: "Abya Group | Practitioner en PNL",
    description: "Practitioner en PNL",
};



const pnlPractitioner = () => {
  return (
    <div style={{height: '100%', width: '100%'}}>
        <PDFViewer pdfPath="/Practitioner en PNL.pdf" />
        {/* <iframe
        src="/Practitioner en PNL.pdf"
        width="100%"
        height="100%"
        style={{ border: "none", minHeight: "99.5vh" }}
        /> */}
    </div>
  )
}

export default pnlPractitioner
