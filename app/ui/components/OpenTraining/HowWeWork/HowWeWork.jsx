import styles from './howWeWork.module.css';




const HowWeWork = () => {


  return (
    <div className={styles.container}>
      <div className={styles.back}>
      <div className={styles.scrollOffset} id='quienes-somos'></div>
        <video preload="none" width="100%" height="auto" autoPlay loop muted playsInline> 
          <source src={"/images/working.mp4"} type="video/mp4" />
        </video>
      </div>
      <div className={styles.scrollOffset} id='main'></div>
      <div className={styles.wrapper}>
        <div className={styles.texts}>
          <p className={styles.paragraph}>Bienvenidos a</p>
          <h2 className={styles.titles}>ABYA OPEN TRAINING</h2>
          <p className={styles.paragraph}>Nuestra innovadora plataforma de</p>
          <h2 className={styles.titles}>PROGRAMAS Y TALLERES VIRTUALES</h2>
          <p className={styles.paragraph}>disenados para transformar su aprendizaje y</p>
          <h2 className={styles.titles}>DESARROLLO PERSONAL Y PROFESIONAL.</h2>
        </div>
        <button className={styles.button}>Contactanos</button>
        <hr className={styles.hr} />
      </div>
    </div>
  )
}

export default HowWeWork
