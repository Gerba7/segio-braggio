import PDFViewer from '@/app/lib/pdfViewer';
import WhatsappContact from '@/app/ui/components/Common/WhatsappContact/WhatsappContact';
import React from 'react'


export const metadata = {
    title: "Abya Group | Feedbacks Desafiantes",
    description: "Feedbacks Desafiantes",
};



const feedbacksDesafiantes = () => {
  return (
    <div style={{height: '100%', width: '100%'}}>
        <PDFViewer pdfPath="/Feedbacks desafiantes ABYA.pdf" />
        {/* <iframe
        src="/Feedbacks desafiantes ABYA.pdf"
        width="100%"
        height="100%"
        style={{ border: "none", minHeight: "99.5vh" }}
        /> */}
    </div>
  )
}

export default feedbacksDesafiantes
