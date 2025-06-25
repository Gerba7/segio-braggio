import styles from './brochure.module.css';



const Brochure = () => {
  return (
    <div className={styles.container}>
        <h3 className={styles.title}>Descargar el brochure</h3>
        <p className={styles.paragraph}>
            Quisieras mas informacion antes de inscribirte? <br/>
            Descargue el folleto del curso para revisar los detalles del programa.
        </p>
        <a href={"../To Be. Evolución Personal. Brochure.pdf"} download="To Be. Evolución Personal. Brochure.pdf" className={styles.button}  target='_blank'  aria-label="Brochure download">DESCARGAR AHORA</a>
    </div>
  )
}

export default Brochure
