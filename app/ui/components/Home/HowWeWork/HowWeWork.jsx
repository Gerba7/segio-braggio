'use client'

import Link from 'next/link';
import styles from './howWeWork.module.css';
import { useEffect, useRef, useState } from 'react';





const HowWeWork = () => {


  const [animate, setAnimate] = useState(false);

  const animationRef = useRef();


  useEffect(() => {

    const animationObserver = new IntersectionObserver(
    (entries) => {
        if (entries[0].isIntersecting) {
        setAnimate(true);
        } else {
        setAnimate(false);
        }
    },
    { threshold: 0 }
    );

    if (animationRef.current) {
    animationObserver.observe(animationRef.current);
    }

    return () => {

    if (animationRef.current) {
        animationObserver.unobserve(animationRef.current);
    }

    };

  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.back} />
      <div className={styles.scrollOffset} id='quienes-somos'></div>
      <div className={styles.wrapper} ref={animationRef}>
        <div className={styles.texts}>
          <p className={`${styles.paragraph1} ${animate ? styles.slideIn : ''}`}>Somos un equipo de</p>
          <h2 className={`${styles.titles} ${animate ? styles.slideIn : ''}`}>PROFESIONALES</h2>
          <h2 className={`${styles.titles} ${animate ? styles.slideIn : ''}`}>INTERDISCIPLINARIOS</h2>
          <p className={`${styles.paragraph2} ${animate ? styles.slideIn : ''}`}>comprometidos con la transformación de</p>
          <h2 className={`${styles.titles2} ${animate ? styles.slideIn : ''}`}>LÍDERES Y ORGANIZACIONES</h2>
        </div>
        <Link href='#contact' className={styles.button}>Contactanos</Link>
        <hr className={styles.hr} />
      </div>
    </div>
  )
}

export default HowWeWork
