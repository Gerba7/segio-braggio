import styles from './value.module.css';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import GridViewIcon from '@mui/icons-material/GridView';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Counter from './Counter/Counter';
import Image from 'next/image';
import Leadership from '../../../../../public/images/leadership_icon.png';
import Presentation from '../../../../../public/images/presentation_icon.png';
import World from '../../../../../public/images/world_icon.png';
import Conference from '../../../../../public/images/conference_icon.png';




const Value = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scrollOffset} id='experiencia'></div>
        <div className={styles.background} />
        <div className={styles.top}>
            <p className={styles.paragraph}>Nuestra</p>
            <h3 className={styles.title}>EXPERIENCIA</h3>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                    <Image src={Presentation} width={48} height={48} />
                </div>  
                <h3 className={styles.number}>+<Counter target={3500} /></h3>
                <h5 className={styles.serviceTitle}>Horas de Life & Executive Mentoring Y Coaching</h5>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                    <Image src={World} width={48} height={48} />
                </div>
                <h3 className={styles.number}>+<Counter target={180} /></h3>
                <h5 className={styles.serviceTitle}>Equipos capacitados en empresas multinacionales</h5>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                    <Image src={Leadership} width={48} height={48} />
                </div>
                <h3 className={styles.number}>+<Counter target={3000} /></h3>
                <h5 className={styles.serviceTitle}>Lideres entrenados</h5>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.icon}>
                    <Image src={Conference} width={48} height={48} />
                </div>
                <h3 className={styles.number}>+<Counter target={250} /></h3>
                <h5 className={styles.serviceTitle}>Conferencias brindadas</h5>
            </div>
        </div>
        <div className={styles.top} style={{color: '#f5f5f5'}}>
            <p className={styles.paragraph}>Nuestro</p>
            <h3 className={styles.title}>EQUIPO</h3>
        </div>
    </div>
  )
}

export default Value
