import styles from './workshops.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Decoration from '../../../../../public/images/decoration.png';
import Innovacion from '../../../../../public/images/innovacion.jpg';
import Customizacion from '../../../../../public/images/customizacion.jpg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';





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
                <Image src={Decoration} className={styles.decoration} alt='decoration' />
                <div className={styles.circleContainer}>
                    <Image src={Innovacion} className={styles.image} height={165} width={220} alt='Innovacion' />
                </div>
                <h5 className={styles.serviceTitle}>PROGRAMAS</h5>
                <a href={"../Practitioner en PNL.pdf"} target='_blank' aria-label="Brochure download" className={styles.itemContainer}>
                    <p className={styles.description}>
                        PNL Practitioner
                    </p>
                    <ChevronRightIcon color='inherit' />
                </a>
                {/* <div className={styles.itemContainer}>
                    <ChevronRightIcon color='inherit' />
                    <p className={styles.description}>
                        PNL Master
                    </p>
                </div> */}
                <a href={"../C&M OntoCorp.pdf"} download="C&M OntoCorp.pdf" target='_blank' aria-label="Brochure download" className={styles.itemContainer}>
                    <p className={styles.description}>
                        Coaching Onto-Corporativo
                    </p>
                    <ChevronRightIcon color='inherit' />
                </a>
                {/* <div className={styles.itemContainer}>
                    <p className={styles.description}>
                        Coaching organizacional
                    </p>
                    <ChevronRightIcon color='inherit' />
                </div> */}
                <Link href={'/well-being/to-be'} className={styles.itemContainer}>
                    <p className={styles.description}>
                        To Be
                    </p>
                    <ChevronRightIcon color='inherit' />
                </Link>
                <a href={"../To be. Nivel II - Brochure.pdf"} download="To be. Nivel II - Brochure.pdf" target='_blank' aria-label="Brochure download" className={styles.itemContainer}>
                    <p className={styles.description}>
                        To Be II
                    </p>
                    <ChevronRightIcon color='inherit' />
                </a>
                {/* <div className={styles.itemContainer}>
                    <p className={styles.description}>
                        Eneagrama
                    </p>
                    <ChevronRightIcon color='inherit' />
                </div>
                <div className={styles.itemContainer}>
                    <ChevronRightIcon color='inherit' />
                    <p className={styles.description}>
                        Astrología Humanista
                    </p>
                </div>
                <div className={styles.itemContainer}>
                    <ChevronRightIcon color='inherit' />
                    <p className={styles.description}>
                        El poder de los Números
                    </p>
                </div>
                <div className={styles.itemContainer}>
                    <ChevronRightIcon color='inherit' />
                    <p className={styles.description}>
                        Mente holográfica
                    </p>
                </div> */}
            </div>
            <div className={`${styles.valueContainer} ${styles.valueContainer2}`}>
                <Image src={Decoration} className={styles.decoration} alt='decoration' />
                <div className={styles.circleContainer}>
                    <Image src={Customizacion} className={styles.image} height={165} width={220} alt='Customizacion'/>
                </div>
                <h5 className={styles.serviceTitle}>TALLERES</h5>
                <a href={"../Eneagrama. Brochure.pdf"} download="Eneagrama. Brochure.pdf" target='_blank' aria-label="Brochure download" className={styles.itemContainer}>
                    <p className={styles.description}>
                        Eneagrama corporativo
                    </p>
                    <ChevronRightIcon color='inherit' />
                </a>
                <a href={"../Finanzas para No financistas ABYA.pdf"} download="Finanzas para No financistas ABYA.pdf" target='_blank' aria-label="Brochure download" className={styles.itemContainer}>
                    <p className={styles.description}>
                        Finanzas para no financistas
                    </p>
                    <ChevronRightIcon color='inherit' />
                </a>
                {/* <div className={styles.itemContainer}>
                    <ChevronRightIcon color='inherit' />
                    <p className={styles.description}>
                        12 energías básicas
                    </p>
                </div>
                <div className={styles.itemContainer}>
                    <ChevronRightIcon color='inherit' />
                    <p className={styles.description}>
                        Design Thinking
                    </p>
                </div>
                <div className={styles.itemContainer}>
                    <ChevronRightIcon color='inherit' />
                    <p className={styles.description}>
                        Nuevos negocios
                    </p>
                </div>
                <div className={styles.itemContainer}>
                    <ChevronRightIcon color='inherit' />
                    <p className={styles.description}>
                        Winner call
                    </p>
                </div>
                <div className={styles.itemContainer}>
                    <ChevronRightIcon color='inherit' />
                    <p className={styles.description}>
                        Experiencia Disney
                    </p>
                </div>
                <div className={styles.itemContainer}>
                    <ChevronRightIcon color='inherit' />
                    <p className={styles.description}>
                        Conversatoria
                    </p>
                </div>
                <div className={styles.itemContainer}>
                    <ChevronRightIcon color='inherit' />
                    <p className={styles.description}>
                        Body Language
                    </p>
                </div> */}
                <a href={"../Storytelling asertivo ABYA.pdf"} download="Storytelling asertivo ABYA.pdf" target='_blank' aria-label="Brochure download" className={styles.itemContainer}>
                    <p className={styles.description}>
                        Storytelling asertivo
                    </p>
                    <ChevronRightIcon color='inherit' />
                </a>
                <a href={"../Productividad con IA ABYA.pdf"} download="Productividad con IA ABYA.pdf" target='_blank' aria-label="Brochure download" className={styles.itemContainer}>
                    <p className={styles.description}>
                        Productividad con IA
                    </p>
                    <ChevronRightIcon color='inherit' />
                </a>
                <a href={"../Feedbacks desafiantes ABYA.pdf"} download="Feedbacks desafiantes ABYA.pdf" target='_blank' aria-label="Brochure download" className={styles.itemContainer}>
                    <p className={styles.description}>
                        Feedbacks Desafiantes
                    </p>
                    <ChevronRightIcon color='inherit' />
                </a>
                {/* <div className={styles.itemContainer}>
                    <ChevronRightIcon color='inherit' />
                    <p className={styles.description}>
                        Técnicas teatrales para Líderes
                    </p>
                </div> */}
            </div>
        </div>
        <Link href='#contacto' className={styles.button}>Contactanos</Link>
    </div>
  )
}

export default Workshops
