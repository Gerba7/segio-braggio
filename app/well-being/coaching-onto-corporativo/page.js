import PDFViewer from '@/app/lib/pdfViewer';
import WhatsappContact from '@/app/ui/components/Common/WhatsappContact/WhatsappContact';
import React from 'react'


export const metadata = {
    title: "Abya Group | Coaching Onto-Corporativo",
    description: "Coaching Onto-Corporativo",
};



const coachingOntoCorporativo = () => {
  return (
    <div style={{height: '100%', width: '100%'}}>
        <PDFViewer pdfPath="/C&M OntoCorp.pdf" />
        {/* <iframe
        src="/C&M OntoCorp.pdf"
        width="100%"
        height="100%"
        style={{ border: "none", minHeight: "99.5vh" }}
        /> */}
    </div>
  )
}

export default coachingOntoCorporativo
