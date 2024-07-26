import styles from './value.module.css';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import GridViewIcon from '@mui/icons-material/GridView';
import PsychologyIcon from '@mui/icons-material/Psychology';




const Value = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <p className={styles.paragraph}>Nuestro</p>
            <h3 className={styles.title}>VALOR AGREGADO</h3>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.serviceContainer}>
            <div className={styles.icon}>
                <TipsAndUpdatesIcon fontSize='inherit' />
            </div>  
            <h5 className={styles.serviceTitle}>INNOVACIÓN</h5>
            <p className={styles.description}>
                Innovamos en la formación de líderes dentro y fuera de las organizaciones, reinventando el concepto Líder.
            </p>
            </div>
            <div className={styles.serviceContainer}>
            <div className={styles.icon}>
                <PsychologyIcon fontSize='inherit' />
            </div>
            <h5 className={styles.serviceTitle}>CUSTOMIZACIÓN</h5>
            <p className={styles.description}>
                Diseñamos los talleres y programas, de acuerdo a las necesidades reales de cada cliente.
            </p>
            </div>
            <div className={styles.serviceContainer}>
            <div className={styles.icon}>
                <GridViewIcon fontSize='inherit' />
            </div>
            <h5 className={styles.serviceTitle}>INTEGRACIÓN</h5>
            <p className={styles.description}>
                En todas nuestras actividades integramos los nuevos descubrimientos de la Ciencia y el estudio del Ser Integral.
            </p>
            </div>
        </div>
        <button className={styles.button}>Contactanos</button>
    </div>
  )
}

export default Value
