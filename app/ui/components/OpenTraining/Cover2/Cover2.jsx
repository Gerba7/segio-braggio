import styles from './cover2.module.css';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import Abya_Logo_Grande from '../../../../../public/images/abya_logo_grande.webp';
import Abya_Cover from '../../../../../public/images/open_training_cover.jpg'; 



const Cover2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.background}>
          <Image className={styles.backgroundImage} src={Abya_Cover} alt='Abya cover' priority />
        </div>
        <div className={styles.coverLogo}>
          <Image className={styles.logoImg} src={Abya_Logo_Grande} alt='Abya logo' priority />
        </div>
      </div>
      <Link className={styles.link} href="#main" aria-label='linkArrow'>
        <KeyboardArrowDownIcon color="#fff" style={{fontSize: 'inherit'}} sx={{boxShadow: 'theme.shadows[3]'}} />
      </Link>
    </div>
  )
}

export default Cover2
