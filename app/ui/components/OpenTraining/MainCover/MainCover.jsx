'use client'

import styles from './mainCover.module.css';
import Image from 'next/image';
import Abya_Cover_2 from '../../../../../public/images/braggio_cover.jpg'; 
import Abya_Cover from '../../../../../public/images/braggio_cover_open.jpg'; 
import Abya_Logo_Grande from '../../../../../public/images/abya_logo_grande.webp';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';



const MainCover = () => {

  const [inCompany, setInCompany] = useState(false);
  const [openTraining, setOpenTraining] = useState(false);

  const router = useRouter();



  const handleRoute = (route) => {
    if(route === 'in-company') {
      setOpenTraining(false)
      setInCompany(true)
      setTimeout(() => {
        router.push(route)
      }, 500)
    } else {
      setInCompany(false)
      setOpenTraining(true)
      setTimeout(() => {
        router.push(route)
      }, 500)
    }
  }
  


  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.background}>
          <Image className={`${styles.backgroundImage} ${styles.left} ${inCompany ? styles.selected : ''} ${openTraining ?  styles.notSelected : ''}`} src={Abya_Cover_2} alt='Sabbia cover' priority />
          <Image className={`${styles.backgroundImage} ${styles.right} ${openTraining ? styles.selected : ''}`} src={Abya_Cover} alt='Sabbia cover' priority />
        </div>
        <div className={styles.coverLogo}>
          <Image className={styles.logoImg} src={Abya_Logo_Grande} alt='Sabbia logo' priority />
        </div>
        <div className={styles.containerLeft}>
          <div className={styles.octagonWrap} onClick={() => handleRoute('in-company')} >
            <div className={styles.link}>
              <div className={styles.text}>In-Company</div>
            </div>
            <div className={styles.octagon} />
          </div>
        </div>
        <div className={styles.containerRight}>
          <div className={styles.octagonWrap} onClick={() => handleRoute('open-training')} >
            <Link className={styles.link} href='/' >
              <div className={styles.text}>Open training</div>
              </Link>
            <div className={styles.octagon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCover
