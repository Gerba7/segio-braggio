import PDFViewer from '@/app/lib/pdfViewer';
import styles from '../../ui/components/ToBe2/toBe2.module.css'


export const metadata = {
    title: "Abya Group | To Be II",
    description: "To Be II",
};



const toBe2 = () => {


  return (
    <div className={styles.container}>
        <PDFViewer pdfPath="/To be. Nivel II - Brochure.pdf" />
        {/* <iframe
          src="/To be. Nivel II - Brochure.pdf"
          width="100%"
          height="100%"
          className={styles.iframe}
        /> */}
    </div>
  )
}

export default toBe2
