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
        <div className={styles.scrollOffset} id='contacto'></div>
        <div className={styles.back} />
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.texts}>
              <h3 className={styles.title}>Contactate</h3>
              <p className={styles.paragraph}>con nuestro equipo</p>
            </div>
            <div className={styles.data}>
              <div className={styles.icon}>
                <EmailIcon sizeize={24} color='inherit' />
                <div className={styles.line}>
                  <h3 className={styles.subtitle}>EMAIL</h3>
                  <h4 className={styles.iconText}>sbraggio@abyagroup.org</h4>
                </div>
              </div>
              <div className={styles.icon}>
                <LocalPhoneOutlinedIcon size={24} color='inherit' />
                <div className={styles.line}>
                  <h3 className={styles.subtitle}>TELEFONO</h3>
                  <h4 className={styles.iconText}>+54911 1234 5678</h4>
                </div>
              </div>
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
