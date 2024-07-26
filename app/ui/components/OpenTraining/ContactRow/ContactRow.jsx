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
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';





const ContactRow = () => {


  return (
      <div className={styles.container} > 
        <div className={styles.back} />
        <div className={styles.top}>
          <h3 className={styles.title}>Contactate</h3>
          <p className={styles.paragraph}>con nuestro equipo</p>
        </div>
        <Form />
      </div>
  )
}

export default ContactRow
