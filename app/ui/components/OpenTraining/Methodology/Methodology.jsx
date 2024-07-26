import Image from 'next/image';
import styles from './methodology.module.css';
import TypeCard from './TypeCard/TypeCard';
import Transformacion from '../../../../../public/images/transformacion.webp';




const Methodology = () => {


  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <p className={styles.paragraph}>Nuestra</p>
            <h3 className={styles.title}>METODOLOGÍA</h3>
        </div>
        <div className={styles.cards}>
            <div className={styles.typeCardContainer}>
                <TypeCard title={'MOMENTOS DE INTERVENCION'} description={'Construcción de estructuras residenciales de varios pisos destinadas a múltiples unidades de vivienda.'} />
            </div>
            <div className={styles.typeCardContainer}>
                <TypeCard title={'MENTORING ESTRATEGICO'} description={'Proyectos residenciales de vivienda múltiples, con un enfoque en la propiedad individual de cada unidad y áreas comunes compartidas.'} />
            </div>
            <div className={styles.typeCardContainer}>
                <TypeCard title={'WORKSHOPS VIVENCIALES'} description={'Viviendas unifamiliares o casas adosadas destinadas a particulares. Desde casas pequeñas hasta residencias de lujo.'} />
            </div>
            <div className={styles.typeCardContainer}>
                <TypeCard title={'VEHCULOS DE TRANSFORMACION'} description={'Viviendas unifamiliares o casas adosadas destinadas a particulares. Desde casas pequeñas hasta residencias de lujo.'} />
            </div>
        </div>
        <Image src={Transformacion} className={styles.image} alt='transformacion' width={510} height={300}/>
    </div>
  )
}

export default Methodology
