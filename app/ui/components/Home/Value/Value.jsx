import styles from './value.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Decoration from '../../../../../public/images/decoration.png';
import Innovacion from '../../../../../public/images/innovacion.jpg';
import Customizacion from '../../../../../public/images/customizacion.jpg';
import Integracion from '../../../../../public/images/integracion.jpg';




const Value = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scrollOffset} id='valor'></div>
        <div className={styles.top}>
            <p className={styles.paragraph}>Nuestro</p>
            <h3 className={styles.title}>VALOR AGREGADO</h3>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.valueContainer}>
                <Image src={Decoration} className={styles.decoration} alt='decoration' />
                <div className={styles.circleContainer}>
                    <Image src={Innovacion} className={styles.image} height={165} width={220} alt='innovacion' />
                </div>
                <h5 className={styles.serviceTitle}>INNOVACIÓN</h5>
                <p className={styles.description}>
                    Innovamos en la formación de líderes dentro y fuera de las organizaciones, reinventando el concepto Líder.
                </p>
            </div>
            <div className={styles.valueContainer}>
                <Image src={Decoration} className={styles.decoration} alt='decoration' />
                <div className={styles.circleContainer}>
                    <Image src={Customizacion} className={styles.image} height={165} width={220} alt='customizacion' />
                </div>
                <h5 className={styles.serviceTitle}>CUSTOMIZACIÓN</h5>
                <p className={styles.description}>
                    Diseñamos los talleres y programas, de acuerdo a las necesidades reales de cada cliente.
                </p>
            </div>
            <div className={styles.valueContainer}>
                <Image src={Decoration} className={styles.decoration} alt='decoration' />    
                <div className={styles.circleContainer}>
                    <Image src={Integracion} className={styles.image} height={165} width={220} alt='integracion' />
                </div>
                <h5 className={styles.serviceTitle}>INTEGRACIÓN</h5>
                <p className={styles.description}>
                    En todas nuestras actividades integramos los nuevos descubrimientos de la Ciencia y el estudio del Ser Integral.
                </p>
            </div>
            <div className={styles.valueContainer}>
                <Image src={Decoration} className={styles.decoration} alt='decoration' />
                <div className={styles.circleContainer}>
                    <Image src={Innovacion} className={styles.image} height={165} width={220} alt='innovacion' />
                </div>
                <h5 className={styles.serviceTitle}>MULTISISTÉMICO</h5>
                <p className={styles.description}>
                    Desarrollamos competencias de liderazgo a través de la integración de diferentes sistemas y enfoques.
                </p>
            </div>
            <div className={styles.valueContainer}>
                <Image src={Decoration} className={styles.decoration} alt='decoration' />
                <div className={styles.circleContainer}>
                    <Image src={Customizacion} className={styles.image} height={165} width={220} alt='decoration' />
                </div>
                <h5 className={styles.serviceTitle}>APRENDIZAJE</h5>
                <p className={styles.description}>
                    Sabemos cómo aprende el cerebro. Promovemos la participación activa del participante para que se vea -haciendo- eso que está aprendiendo.
                </p>
            </div>
            <div className={styles.valueContainer}>
                <Image src={Decoration} className={styles.decoration} alt='decoration' />    
                <div className={styles.circleContainer}>
                    <Image src={Integracion} className={styles.image} height={165} width={220} alt='decoration' />
                </div>
                <h5 className={styles.serviceTitle}>IMPACTO CULTURAL</h5>
                <p className={styles.description}>
                    Identificamos los valores y comportamientos deseados y diseñamos los programas y talleres de manera estratégica y coherente con aquellos.
                </p>
            </div>
        </div>
        <Link href='#contacto' className={styles.button} >Contactanos</Link>
    </div>
  )
}

export default Value
