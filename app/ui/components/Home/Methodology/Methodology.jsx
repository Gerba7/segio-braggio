import styles from './methodology.module.css';
import Icon1 from '../../../../../public/images/icon1.png';
import Analytics from '../../../../../public/images/analytics.png';
import Individual from '../../../../../public/images/individual.png';
import Capacitation from '../../../../../public/images/capacitation.png';
import MetCard from './MetCard/MetCard';
import S from '../../../../../public/images/S.jpg';
import E from '../../../../../public/images/E.jpg';
import R from '../../../../../public/images/R.jpg';




const Methodology = () => {




  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id='metodologia'></div>
        <div className={styles.top}>
            <p className={styles.paragraph}>Nuestra</p>
            <h3 className={styles.title}>METODOLOGÍA S.E.R.</h3>
        </div>
        <div className={styles.top}>
            <p className={styles.paragraph2}>
                La metodología S.E.R. está diseñada con base en principios científicos del
                neuroaprendizaje y la psicología cognitiva, asegurando que cada herramienta se
                entienda, integre y aplique de inmediato.
            </p>
        </div>
        <div className={styles.cards}>
            <MetCard 
                style={{opacity: 0}}
                number={'S'}
                title={'SIMPLICIDAD CONCEPTUAL'}
                img={Icon1}
                subtitle={''}
                paragraph={
                    'Transformamos ideas complejas en conceptos claros y aplicables.'
                }
            />
            <MetCard 
                number={'E'}
                title={'EXPERIENCIA PRÁCTICA'}
                img={Capacitation}
                subtitle={''}
                paragraph={
                    'El cerebro aprende haciendo, con ejercicios y dinámicas que aseguran la aplicación inmediata'
                }
                color={'#3D85C6'}
            />
            <MetCard 
                number={'R'}
                title={'RESONANCIA LÍMBICA'}
                img={Individual}
                subtitle={''}
                paragraph={
                    'Conexión emocional - Generamos conciencia del impacto emocional al aplicar las herramientas de manera efectiva.'
                }
                color={'#43B4BE'}
            />
            {/* <MetCard 
                style={{opacity: 0}}
                number={1}
                title={'DIAGNÓSTICO CULTURAL'}
                img={Icon1}
                subtitle={''}
                paragraph={
                    'En alineación a los objetivos estratégicos de la empresa, medimos las tendencias culturales, las brechas y el plan para abordarlas.'
                }
            />
            <MetCard 
                number={2}
                title={'DIAGNÓSTICO INDIVIDUAL'}
                img={Capacitation}
                subtitle={''}
                paragraph={
                    'Diagnóstico de los perfiles individuales y grupales de los equipos y sus líderes.'
                }
                color={'#3D85C6'}
            />
            <MetCard 
                number={3}
                title={'CAPACITACIÓN'}
                img={Individual}
                subtitle={''}
                paragraph={
                    'Desarrollo de planes de desarrollo individual y de capacitación grupal.'
                }
                color={'#43B4BE'}
            />
            <MetCard 
                number={4}
                title={'MEDICIÓN'}
                img={Analytics}
                subtitle={''}
                paragraph={
                    'Implementación del programa, monitoreo y reportería.'
                }
                color={'#8DCBDA'}
            /> */}
        </div>
    </div>
  )
}

export default Methodology
