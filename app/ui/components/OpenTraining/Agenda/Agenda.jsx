import styles from './agenda.module.css';
import Link from 'next/link';



const Agenda = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scrollOffset} id='agenda'></div>
        <div className={styles.top}>
            <p className={styles.paragraph}>1er Semestre</p>
            <h3 className={styles.title}>AGENDA 2025</h3>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.table}>
                <div className={styles.row}>
                    <div className={`${styles.col} ${styles.topColor}`}>NOMBRE</div>
                    <div className={`${styles.col} ${styles.topColor}`}>INICIO</div>
                    <div className={`${styles.col} ${styles.topColor}`}>HORAS TOTALES</div>
                    <div className={`${styles.col} ${styles.topColor}`}>CANTIDAD DE CLASES</div>
                    <div className={`${styles.col} ${styles.topColor}`}>FRECUENCIA</div>
                </div>
                <div className={styles.row}>
                    <div className={`${styles.col} ${styles.color1}`}>To Be - Nivel II</div>
                    <div className={`${styles.col} ${styles.color2}`}>18 FEB</div>
                    <div className={`${styles.col} ${styles.color3}`}>12</div>
                    <div className={`${styles.col} ${styles.color3}`}>6</div>
                    <div className={`${styles.col} ${styles.color4}`}>Semanal</div>
                </div>
                <div className={styles.row}>
                    <div className={`${styles.col} ${styles.color1}`}>Practitioner en <br/>PNL (Parte 1)</div>
                    <div className={`${styles.col} ${styles.color2}`}>4 MAR</div>
                    <div className={`${styles.col} ${styles.color3}`}>45</div>
                    <div className={`${styles.col} ${styles.color3}`}>15</div>
                    <div className={`${styles.col} ${styles.color4}`}>Semanal y quincenal (con<br/> refuerzos de días Sábado)</div>
                </div>
                <div className={styles.row}>
                    <div className={`${styles.col} ${styles.color1}`}>Eneagrama</div>
                    <div className={`${styles.col} ${styles.color2}`}>26 MAR</div>
                    <div className={`${styles.col} ${styles.color3}`}>28</div>
                    <div className={`${styles.col} ${styles.color3}`}>14</div>
                    <div className={`${styles.col} ${styles.color4}`}>Semanal</div>
                </div>
                <div className={styles.row}>
                    <div className={`${styles.col} ${styles.color1}`}>To Be - Nivel I</div>
                    <div className={`${styles.col} ${styles.color2}`}>10 ABR</div>
                    <div className={`${styles.col} ${styles.color3}`}>16</div>
                    <div className={`${styles.col} ${styles.color3}`}>8</div>
                    <div className={`${styles.col} ${styles.color4}`}>Semanal</div>
                </div>
                <div className={styles.row}>
                    <div className={`${styles.col} ${styles.color1}`}>Storytelling asertivo</div>
                    <div className={`${styles.col} ${styles.color2}`}>21 ABR</div>
                    <div className={`${styles.col} ${styles.color3}`}>8</div>
                    <div className={`${styles.col} ${styles.color3}`}>4</div>
                    <div className={`${styles.col} ${styles.color4}`}>Semanal</div>
                </div>
                <div className={styles.row}>
                    <div className={`${styles.col} ${styles.color1}`}>Coaching Onto- Corporativo</div>
                    <div className={`${styles.col} ${styles.color2}`}>5 MAY</div>
                    <div className={`${styles.col} ${styles.color3}`}>45</div>
                    <div className={`${styles.col} ${styles.color3}`}>15</div>
                    <div className={`${styles.col} ${styles.color4}`}>Semanal y quincenal (con<br/> refuerzos de días Sábado)</div>
                </div>
                <div className={styles.row}>
                    <div className={`${styles.col} ${styles.color1}`}>Feedbacks desafiantes</div>
                    <div className={`${styles.col} ${styles.color2}`}>15 MAY</div>
                    <div className={`${styles.col} ${styles.color3}`}>8</div>
                    <div className={`${styles.col} ${styles.color3}`}>4</div>
                    <div className={`${styles.col} ${styles.color4}`}>Semanal</div>
                </div>
                <div className={styles.row}>
                    <div className={`${styles.col} ${styles.color1}`}>IA en la Productividad</div>
                    <div className={`${styles.col} ${styles.color2}`}>29 MAY</div>
                    <div className={`${styles.col} ${styles.color3}`}>8</div>
                    <div className={`${styles.col} ${styles.color3}`}>4</div>
                    <div className={`${styles.col} ${styles.color4}`}>Semanal</div>
                </div>
                <div className={styles.row}>
                    <div className={`${styles.col} ${styles.color1}`}>Finanzas para No Finanzistas</div>
                    <div className={`${styles.col} ${styles.color2}`}>2 JUN</div>
                    <div className={`${styles.col} ${styles.color3}`}>8</div>
                    <div className={`${styles.col} ${styles.color3}`}>4</div>
                    <div className={`${styles.col} ${styles.color4}`}>Semanal</div>
                </div>
            </div>
        </div>
        <Link href='#contacto' className={styles.button}>Más Información</Link>
    </div>
  )
}

export default Agenda