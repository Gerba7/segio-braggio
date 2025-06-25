import PDFViewer from '@/app/lib/pdfViewer';
import WhatsappContact from '@/app/ui/components/Common/WhatsappContact/WhatsappContact';
import React from 'react'


export const metadata = {
    title: "Abya Group | Finanzas para No Financistas",
    description: "Finanzas para No Financistas",
};



const finanzasNoFinancistas = () => {
  return (
    <div style={{height: '100%', width: '100%'}}>
        <PDFViewer pdfPath="/Finanzas para No financistas ABYA.pdf" />
        {/* <iframe
        src="/Finanzas para No financistas ABYA.pdf"
        width="100%"
        height="100%"
        style={{ border: "none", minHeight: "99.5vh" }}
        /> */}
    </div>
  )
}

export default finanzasNoFinancistas
