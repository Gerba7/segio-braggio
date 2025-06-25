import styles from './agenda2.module.css';
import Link from 'next/link';


const items = [
    {
        id: 0,
        date: '23 JULIO',
        subtitle: 'FEEDBACKS DESAFIANTES',
        bottom: '3 CLASES - 2 HORAS CADA UNA',
        border: true,
        color: 1
    },
    {
        id: 1,
        date: '26 JULIO',
        subtitle: 'TO BE - NIVEL I',
        bottom: '8 CLASES - 2 HORAS CADA UNA',
        border: true,
        color: 2
    },
    {
        id: 2,
        date: '19 AGOSTO',
        subtitle: 'DESBLOQUEO EJECUTIVO (COACHING + PNL)',
        bottom: '45 HORAS FORMATIVAS',
        border: true,
        color: 1
    },
    {
        id: 3,
        date: '18 SEPTIEMBRE',
        subtitle: 'VÍNCULOS EN 3D',
        bottom: '4 CLASES - 2 HORAS CADA UNA',
        border: true,
        color: 2
    },
    {
        id: 4,
        date: '20 OCTUBRE',
        subtitle: 'PLAYLIST EMOCIONAL',
        bottom: '3 CLASES - 2 HORAS CADA UNA',
        border: true,
        color: 1
    },
    {
        id: 5,
        date: '15 NOVIEMBRE',
        subtitle: 'TO BE - NIVEL II',
        bottom: '6 CLASES - 2 HORAS CADA UNA',
        border: true,
        color: 2
    },
    {
        id: 6,
        date: '26 NOVIEMBRE',
        subtitle: 'MIND HACKING',
        bottom: '3 CLASES - 2 HORAS CADA UNA',
        border: true,
        color: 1
    },
]



const Agenda2 = () => {

  return (
    <div className={styles.container}>
      <div className={styles.scrollOffset} id='agenda'></div>
        <div className={styles.top}>
            <p className={styles.paragraph}>2do Semestre 2025</p>
            <h3 className={styles.title}>AGENDA</h3>
        </div>
        <div className={styles.content}>
            <div className={styles.year}>2025</div>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    {items.map((item) => {
                        return (
                            <div key={item.id} className={styles.item}>
                                <div className={styles.itemTop}>
                                    <div className={`${styles.flag} ${item.color === 2 && styles.flag2}`}>
                                        <div className={`${styles.triangle} ${item.color === 2 && styles.triangle2}`}></div>
                                        {item.date}
                                    </div>
                                    <div className={styles.subtitle}>{item.subtitle}</div>
                                </div>
                                <div className={styles.bottom} style={{borderBottom: !item.border && 'none'}}>
                                    {item.bottom}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.right}>

                </div>
            </div>
        </div>
        <Link href='#contacto' className={styles.button}>Más Información</Link>
    </div>
  )
}

export default Agenda2