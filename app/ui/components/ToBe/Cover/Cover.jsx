import styles from './cover.module.css';
import Image from 'next/image';
import ToBe_Page_Cover from '../../../../../public/images/ToBe_page_cover.jpg'; 
import ToBe_Cover from '../../../../../public/images/tobe_portada.jpg'; 
import Link from 'next/link';



const Cover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.jumboTitle}>To Be<span className={styles.dot}>.</span></h1>
        <h3 className={styles.title}>PROGRAMA DE<br/>EVOLUCIÓN PERSONAL</h3>
        <h3 className={styles.subtitle}>NIVEL INICIAL</h3>
        <Link href='#inscripcion' className={styles.button}>INSCRIBIRME</Link>
      </div>
      <div className={styles.right}>
        <div className={styles.background}>
          <Image className={styles.backgroundImage} src={ToBe_Cover} alt='ToBe cover' priority />
        </div>
      </div>
      {/* <Link className={styles.link} href="#quienes-somos" aria-label='linkArrow'>
        <KeyboardArrowDownIcon color="#fff" style={{fontSize: 'inherit'}} sx={{boxShadow: 'theme.shadows[3]'}} />
      </Link> */}
    </div>
  )
}

export default Cover
