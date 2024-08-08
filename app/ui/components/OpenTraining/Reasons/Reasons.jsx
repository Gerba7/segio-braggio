'use client'

import Image from 'next/image';
import styles from './reasons.module.css';
import Idea from '../../../../../public/images/idea_icon.png';
import Mic from '../../../../../public/images/megaphone_icon.png';
import Growth from '../../../../../public/images/growth_icon.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useRef, useState } from 'react';



const Reasons = () => {

  const [animate, setAnimate] = useState(null); 
  const [active2, setActive2] = useState(null); 
  const [active3, setActive3] = useState(null); 


  const handleShow = (index) => {
    if(index === 0) {
      setAnimate(true)
      setActive2(false)
      setActive3(false)
    } else if(index === 1) {
      setAnimate(false)
      setActive2(true)
      setActive3(false)
    } else if(index === 2) {
      setAnimate(false)
      setActive2(false)
      setActive3(true)
    } else {
      setAnimate(true)
      setActive2(false)
      setActive3(false)
    }
  }


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
        { threshold: 0.5 }
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
      <div className={styles.scrollOffset} id='nosotros'></div>
      <div className={styles.top}>
          <p className={styles.paragraph}>Por que</p>
          <h3 className={styles.title}>NOSOTROS</h3>
      </div>
      <div className={styles.wrapper} ref={animationRef}>
        <div className={styles.left}>
          <div className={`${styles.itemContainer} ${animate ? styles.activeBg: ''}`} style={{borderTop: '1px solid #000'}}>
            <div className={styles.visible}>
              <div className={styles.icon}>
                <Image src={Mic} width={42} height={42} />
              </div>
              <h3 className={styles.title2}>Instructores de alto nivel</h3>
            </div>
            <div className={`${styles.expandIcon} ${animate ? styles.activeIcon: ''}`} onClick={() => handleShow(0)}>
              <ExpandMoreIcon color='inherit' fontSize='inherit' />
            </div>
          </div>
          <div className={`${styles.itemContainer} ${active2 ? styles.activeBg: ''}`}>
            <div className={styles.visible}>
              <div className={styles.icon}>
                <Image src={Growth} width={48} height={48} />
              </div>
              <h3 className={styles.title2}>Enfoque personalizado</h3>
            </div>
            <div className={`${styles.expandIcon} ${active2 ? styles.activeIcon: ''}`} onClick={() => handleShow(1)}>
              <ExpandMoreIcon color='inherit' fontSize='inherit' />
            </div>
          </div>
          <div className={`${styles.itemContainer} ${active3 ? styles.activeBg: ''}`}>
            <div className={styles.visible}>
              <div className={styles.icon}>
                <Image src={Idea} width={48} height={48} />
              </div>
              <h3 className={styles.title2}>Networking estratégico</h3>
            </div>
            <div className={`${styles.expandIcon} ${active3 ? styles.activeIcon: ''}`} onClick={() => handleShow(2)}>
              <ExpandMoreIcon color='inherit' fontSize='inherit' />
            </div>
          </div>
        </div>
        <div className={`${styles.right} ${animate || active2 || active3 ? styles.showRight : ''}`}>
          <div className={styles.rombo} style={{top: 20, right: 25}}/>
          <div className={styles.rombo} style={{top: 40, right: 50}}/>
          <div className={styles.rombo} style={{top: 60, right: 25}}/>
          <div className={styles.rombo} style={{top: 80, right: 50}}/>
          {animate ? 
            <p className={`${styles.text} ${animate ? styles.showText : ''}`}>
              Contamos con un equipo de instructores altamente calificados que
              no solo son expertos en su área, sino que también tienen una amplia
              experiencia práctica. Aprenderás de profesionales reconocidos que
              aportan conocimientos actualizados y relevantes.
            </p>
          : active2 ? 
            <p className={`${styles.text} ${active2 ? styles.showText : ''}`}>
              Nos adaptamos a tus necesidades ofreciendo programas y talleres
              personalizados que se alinean con tus metas y ritmos de
              aprendizaje. Nuestra atención personalizada asegura que recibas el
              apoyo necesario en todo momento.
            </p>
          : active3 ? 
            <p className={`${styles.text} ${active3 ? styles.showText : ''}`}>
              Al unirte a ABYA Open Training, también te integras a una red
              de contactos y alianzas estratégicas que te abrirán puertas
              en el mundo profesional. Conectando con oportunidades
              reales de crecimiento y desarrollo.
            </p>
          :
          <p className={styles.text}>
            Contamos con un equipo de instructores altamente calificados que
            no solo son expertos en su área, sino que también tienen una amplia
            experiencia práctica. Aprenderás de profesionales reconocidos que
            aportan conocimientos actualizados y relevantes.
          </p>
        }
        </div>
      </div>
    </div>
  )
}

export default Reasons
