import styles from './workshops2.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Decoration from '../../../../../public/images/decoration.png';
import Innovacion from '../../../../../public/images/innovacion.jpg';
import Customizacion from '../../../../../public/images/customizacion.jpg';
import Desbloqueo from '../../../../../public/images/DesbloqueoEjecutivo2.jpg';
import ToBe from '../../../../../public/images/tobe.jpg';
import ToBe2 from '../../../../../public/images/tobe2.jpg';
import Feedbacks from '../../../../../public/images/FeedbacksDesafiantes.jpg';
import D from '../../../../../public/images/3d.jpg';
import Playlist from '../../../../../public/images/Playlist.jpg';
import MindHacking from '../../../../../public/images/MindHacking.jpg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';





const Workshops2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scrollOffset} id='servicios'></div>
        <div className={styles.top}>
            <p className={styles.paragraph}>Nuestros</p>
            <h3 className={styles.title}>SERVICIOS</h3>
        </div>
        <div className={styles.programs}>
            <p className={styles.subtitle}>PROGRAMAS</p>
            <div className={styles.wrapper}>
                <a href={"../Desbloqueo Ejecutivo.pdf"} target='_blank' aria-label="Brochure download" className={styles.valueContainer}>
                    <Image src={Decoration} className={styles.decoration} alt='decoration' />
                    <div className={styles.circleContainer}>
                        <Image src={Desbloqueo} className={styles.image} height={165} width={220} alt='Desbloqueo' />
                    </div>
                    <h5 className={styles.serviceTitle}>Desbloqueo Ejecutivo</h5>
                    <p className={styles.description}>
                        Este programa te permitirá adquirir herramientas para liderar en los contextos más complejos.
                    </p>
                    <div className={styles.button}>Más información</div>
                </a>
                <Link href={'/well-being/to-be'} className={styles.valueContainer}>
                    <Image src={Decoration} className={styles.decoration} alt='decoration' />
                    <div className={styles.circleContainer}>
                        <Image src={ToBe} className={styles.image} height={165} width={220} alt='ToBe' />
                    </div>
                    <h5 className={styles.serviceTitle}>To Be - Nivel I</h5>
                    <p className={styles.description}>
                        Comenzar un camino de conciencia diferente, que te permita comenzar un vínculo diferente con vos mismo/a y con otros.
                    </p>
                    <div className={styles.button}>Más información</div>
                </Link>
                <a href={"../To be. Nivel II - Brochure.pdf"} target='_blank' aria-label="Brochure download" className={styles.valueContainer}>
                    <Image src={Decoration} className={styles.decoration} alt='decoration' />
                    <div className={styles.circleContainer}>
                        <Image src={ToBe2} className={styles.image} height={165} width={320} alt='ToBe2' />
                    </div>
                    <h5 className={styles.serviceTitle}>To Be - Nivel II</h5>
                    <p className={styles.description}>
                        Alcanzar un nivel de conciencia mayor y más profundo. Desafiar paradigmas limitantes y afianzar el autodesarrollo y la autoobservación.
                    </p>
                    <div className={styles.button}>Más información</div>
                </a>
            </div>
        </div>
        <div className={styles.programs}>
            <p className={styles.subtitle}>TALLERES</p>
            <div className={styles.wrapper}>
                <a href={"../Feedbacks_desafiantes_ABYA.pdf"} target='_blank' aria-label="Brochure download" className={styles.valueContainer}>
                    <Image src={Decoration} className={styles.decoration} alt='decoration' />
                    <div className={styles.circleContainer}>
                        <Image src={Feedbacks} className={styles.image} height={165} width={220} alt='Feedbacks desafiantes' />
                    </div>
                    <h5 className={styles.serviceTitle}>Feedbacks desafiantes</h5>
                    <p className={styles.description}>
                        Te brindará herramientas concretas para comunicar eficazmente lo no dicho, ofreciendo feedback asertivo y construyendo conversaciones impactantes desde la empatía.
                    </p>
                    <div className={styles.button}>Más información</div>
                </a>
                <a href={"../Vínculos en 3D.pdf"} target='_blank' aria-label="Brochure download" className={styles.valueContainer}>
                    <Image src={Decoration} className={styles.decoration} alt='decoration' />
                    <div className={styles.circleContainer}>
                        <Image src={D} className={styles.image} height={165} width={220} alt='3D' />
                    </div>
                    <h5 className={styles.serviceTitle}>Vínculos en 3D</h5>
                    <p className={styles.description}>
                        Busca darte herramientas concretas para identificar patrones ocultos en tus interacciones, sentir profundamente sin desviar tus objetivos, y actuar con conexión para transformar conflictos en crecimiento.
                    </p>
                    <div className={styles.button}>Más información</div>
                </a>
                <a href={"../Playlist Emocional.pdf"} target='_blank' aria-label="Brochure download" className={styles.valueContainer}>
                    <Image src={Decoration} className={styles.decoration} alt='decoration' />
                    <div className={styles.circleContainer}>
                        <Image src={Playlist} className={styles.image} height={165} width={320} alt='Playlist Emocional' />
                    </div>
                    <h5 className={styles.serviceTitle}>Playlist Emocional</h5>
                    <p className={styles.description}>
                        Te proporcionará herramientas prácticas para identificar y transformar emociones tóxicas, eligiendo aquellas que impulsen tu bienestar y dirigiendo tu experiencia emocional con conciencia y creatividad.
                    </p>
                    <div className={styles.button}>Más información</div>
                </a>
                <a href={"../Mind Hacking.pdf"} target='_blank' aria-label="Brochure download" className={styles.valueContainer}>
                    <Image src={Decoration} className={styles.decoration} alt='decoration' />
                    <div className={styles.circleContainer}>
                        <Image src={MindHacking} className={styles.image} height={165} width={320} alt='Mind Hacking' />
                    </div>
                    <h5 className={styles.serviceTitle}>Mind Hacking</h5>
                    <p className={styles.description}>
                        Te ofrecerá herramientas prácticas para detectar y reemplazar pensamientos tóxicos por narrativas potenciadoras, reprogramando tu mente para responder a los desafíos con claridad y creatividad.
                    </p>
                    <div className={styles.button}>Más información</div>
                </a>
            </div>
        </div>
        <Link href='#contacto' className={styles.button2}>Contactanos</Link>
    </div>
  )
}

export default Workshops2