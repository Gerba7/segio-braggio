import Link from 'next/link';
import styles from './howWeWork.module.css';




const HowWeWork = () => {


  return (
    <div className={styles.container}>
      <div className={styles.scrollOffset} id='quienes-somos'></div>
      <div className={styles.back}>
        <video preload="none" className={styles.video} autoPlay loop muted playsInline> 
          <source src={"/images/working.mp4"} type="video/mp4" />
        </video>
      </div>
      <div className={styles.scrollOffset} id='main'></div>
      <div className={styles.wrapper}>
        <div className={styles.texts}>
          <p className={styles.paragraph}>Bienvenidos a</p>
          <h2 className={styles.titles}>ABYA WELL BEING</h2>
          <p className={styles.paragraph}>Nuestra innovadora plataforma de</p>
          <h2 className={styles.titles}>PROGRAMAS Y TALLERES VIRTUALES</h2>
          <p className={styles.paragraph}>diseñados para transformar su aprendizaje y</p>
          <h2 className={styles.titles}>DESARROLLO PERSONAL Y PROFESIONAL.</h2>
        </div>
        <Link href='#contacto' className={styles.button}>Contactanos</Link>
        <hr className={styles.hr} />
      </div>
    </div>
  )
}

export default HowWeWork
