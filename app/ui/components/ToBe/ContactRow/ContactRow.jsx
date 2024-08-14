import ContactButton from './ContactButton/ContactButton';
import styles from './contactRow.module.css';
import Parallax from '../../../../../public/images/formCover.jpg';
import Image from 'next/image';
import Form from './Form/Form';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Abya_Logo from '../../../../../public/images/abya_logo_dark.webp';
import EmailIcon from '@mui/icons-material/Email';





const ContactRow = () => {


  return (
      <div className={styles.container} > 
        <div className={styles.scrollOffset} id='inscripcion'></div>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.texts}>
              <h1 className={styles.jumboTitle}>To Be<span className={styles.dot}>.</span></h1>
              <p className={styles.title}>Inscripciones</p>
            </div>
          </div>
          <div className={styles.right}>
            <Form />
          </div>
        </div>
      </div>
  )
}

export default ContactRow
