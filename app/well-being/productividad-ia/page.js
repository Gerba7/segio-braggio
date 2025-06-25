import PDFViewer from '@/app/lib/pdfViewer';
import WhatsappContact from '@/app/ui/components/Common/WhatsappContact/WhatsappContact';
import React from 'react'


export const metadata = {
    title: "Abya Group | Productividad con IA",
    description: "Productividad con IA",
};



const productividadIA = () => {
  return (
    <div style={{height: '100%', width: '100%'}}>
        <PDFViewer pdfPath="/Productividad con IA ABYA.pdf" />
        {/* <iframe
        src="/Productividad con IA ABYA.pdf"
        width="100%"
        height="100%"
        style={{ border: "none", minHeight: "99.5vh" }}
        /> */}
    </div>
  )
}

export default productividadIA
