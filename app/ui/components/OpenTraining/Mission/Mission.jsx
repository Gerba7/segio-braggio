import styles from './mission.module.css';



const Mission = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h3 className={styles.subtitle}>NUESTROS</h3>
            <h1 className={styles.title}>Objetivos</h1>
            <p className={styles.description}>
              ¡Bienvenido a ABYA Open Training! Nos complace presentarle nuestra 
              innovadora plataforma de programas y talleres virtuales diseñados 
              para transformar su aprendizaje desarrollo personal profesional. 
            </p>
            <hr className={styles.hr} />
        </div>
    </div>
  )
}

export default Mission
