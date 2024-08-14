import styles from './brochure.module.css';



const Brochure = () => {
  return (
    <div className={styles.container}>
        <h3 className={styles.title}>Descargar el brochure</h3>
        <p className={styles.paragraph}>
            No estás listo para inscribirte pero quieres obtener más información? <br/>
            Descargue el folleto del curso para revisar los detalles del programa.
        </p>
        <button className={styles.button}>Descargar Ahora</button>
    </div>
  )
}

export default Brochure
