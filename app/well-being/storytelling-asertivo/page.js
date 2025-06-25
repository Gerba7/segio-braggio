import PDFViewer from '@/app/lib/pdfViewer';
import WhatsappContact from '@/app/ui/components/Common/WhatsappContact/WhatsappContact';
import React from 'react'


export const metadata = {
    title: "Abya Group | Storytelling Asertivo",
    description: "Storytelling Asertivo",
};



const storytellingAsertivo = () => {
  return (
    <div style={{height: '100%', width: '100%'}}>
        <PDFViewer pdfPath="/Storytelling asertivo ABYA.pdf" />
        {/* <iframe
        src="/Storytelling asertivo ABYA.pdf"
        width="100%"
        height="100%"
        style={{ border: "none", minHeight: "99.5vh" }}
        /> */}
    </div>
  )
}

export default storytellingAsertivo
