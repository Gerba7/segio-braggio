import styles from './footer2.module.css';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Abya_Logo from '../../../../../public/images/abya_logo_dark.webp';




const Footer2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
            <Image src={Abya_Logo} alt='abya logo' width={100} height={100} />
            <div className={styles.socialContainer}>
                <div className={`${styles.socialIcon} ${styles.whatsapp}`}>
                    <WhatsAppIcon />
                </div>
                <div className={`${styles.socialIcon} ${styles.facebook}`}>
                    <FacebookIcon />
                </div>
                <div className={`${styles.socialIcon} ${styles.instagram}`}>
                    <InstagramIcon />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer2
