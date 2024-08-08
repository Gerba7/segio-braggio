import styles from './workshops.module.css';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import GridViewIcon from '@mui/icons-material/GridView';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Link from 'next/link';
import Image from 'next/image';
import Decoration from '../../../../../public/images/decoration.png';
import Innovacion from '../../../../../public/images/innovacion.jpg';
import Customizacion from '../../../../../public/images/customizacion.jpg';
import Integracion from '../../../../../public/images/integracion.jpg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const programas = [
    {
        id: 0,
        description: 'PNL Practitioner'
    },
    {
        id: 1,
        description: 'PNL Master'
    },
    {
        id: 2,
        description: 'Coaching Ontológico'
    },
    {
        id: 3,
        description: 'Coaching organizacional'
    },
    {
        id: 0,
        description: 'To Be'
    },
    {
        id: 4,
        description: 'Eneagrama'
    },
    {
        id: 5,
        description: 'Astrología Humanista'
    },
    {
        id: 6,
        description: 'El poder de los Números'
    },
    {
        id: 7,
        description: 'Mente holográfica'
    },
]


const talleres = [
    {
        id: 0,
        description: 'Eneagrama corporativo'
    },
    {
        id: 1,
        description: '12 energías básicas'
    },
    {
        id: 2,
        description: 'Gestión del Tiempo'
    },
    {
        id: 3,
        description: 'Design Thinking'
    },
    {
        id: 0,
        description: 'Nuevos negocios'
    },
    {
        id: 4,
        description: 'Winner call'
    },
    {
        id: 5,
        description: 'Experiencia Disney'
    },
    {
        id: 6,
        description: 'Conversatoria'
    },
    {
        id: 7,
        description: 'Body Language'
    },
    {
        id: 8,
        description: 'Storytelling asertivo'
    },
    {
        id: 9,
        description: 'Técnicas teatrales para Líderes'
    },
]



const Workshops = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scrollOffset} id='servicios'></div>
        <div className={styles.top}>
            <p className={styles.paragraph}>Nuestros</p>
            <h3 className={styles.title}>SERVICIOS</h3>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.valueContainer}>
                <Image src={Decoration} className={styles.decoration} />
                <div className={styles.circleContainer}>
                    <Image src={Innovacion} className={styles.image} height={165} width={220} />
                </div>
                <h5 className={styles.serviceTitle}>PROGRAMAS</h5>
                {programas.map((program) => (
                    <div className={styles.itemContainer} key={program.id}>
                        <ChevronRightIcon color='inherit' />
                        <p className={styles.description}>
                            {program.description}
                        </p>
                    </div>
                ))
                }
            </div>
            <div className={styles.valueContainer}>
                <Image src={Decoration} className={styles.decoration} />
                <div className={styles.circleContainer}>
                    <Image src={Customizacion} className={styles.image} height={165} width={220} />
                </div>
                <h5 className={styles.serviceTitle}>TALLERES</h5>
                {talleres.map((program) => (
                    <div className={styles.itemContainer} key={program.id}>
                        <ChevronRightIcon color='inherit' />
                        <p className={styles.description}>
                            {program.description}
                        </p>
                    </div>
                ))
                }
            </div>
        </div>
        <Link href='#contact' className={styles.button} >Contactanos</Link>
    </div>
  )
}

export default Workshops
