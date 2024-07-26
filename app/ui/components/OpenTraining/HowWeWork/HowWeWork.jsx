import styles from './howWeWork.module.css';





const HowWeWork = () => {


  return (
    <div className={styles.container}>
      <div className={styles.back} />
      <div className={styles.scrollOffset} id='main'></div>
      <div className={styles.wrapper}>
        <div className={styles.texts}>
          <p className={styles.paragraph}>Somos un equipo de</p>
          <h2 className={styles.titles}>PROFESIONALES</h2>
          <h2 className={styles.titles}>INTERDISCIPLINARIOS</h2>
          <p className={styles.paragraph}>comprometidos con la transformación de</p>
          <h2 className={styles.titles}>LÍDERES Y ORGANIZACIONES</h2>
        </div>
        <button className={styles.button}>Contactanos</button>
        <hr className={styles.hr} />
      </div>
    </div>
  )
}

export default HowWeWork
