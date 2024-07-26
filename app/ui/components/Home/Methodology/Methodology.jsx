import styles from './methodology.module.css';
import Icon1 from '../../../../../public/images/icon1.png';
import MetCard from './MetCard/MetCard';



const Methodology = () => {




  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id='metodologia'></div>
        {/* <div className={styles.background}>
            <Image className={styles.backgroundImage} src={MethodologyCover} alt='Sabbia cover' priority />
        </div> */}
        <div className={styles.top}>
            <p className={styles.paragraph}>Nuestra</p>
            <h3 className={styles.title}>METODOLOGÍA</h3>
        </div>
        <div className={styles.cards}>
            <MetCard 
                style={{opacity: 0}}
                number={1}
                title={'DIAGNOSTICO CULTURAL'}
                img={Icon1}
                subtitle={''}
                paragraph={
                    'En alineacion a los objetivos estrategicos de la empresa, medimos las tendencias culturales, las brechas y el plan para abordarlas.'
                }
            />
            <MetCard 
                number={2}
                title={'DIAGNOSTICO INDIVIDUAL'}
                img={Icon1}
                subtitle={''}
                paragraph={
                    'Diagnostico de los perfiles individuales y grupales de los equipos y sis lideres.'
                }
                color={'#3D85C6'}
            />
            <MetCard 
                number={3}
                title={'CAPACITACION'}
                img={Icon1}
                subtitle={''}
                paragraph={
                    'Desarrollo de planes de desarrollo individual y de capacitacion grupal.'
                }
                color={'#43B4BE'}
            />
            <MetCard 
                number={4}
                title={'MEDICION'}
                img={Icon1}
                subtitle={''}
                paragraph={
                    'Implementacion del programa, monitoreo y reporteria.'
                }
                color={'#8DCBDA'}
            />
        </div>
        {/* <Image src={Transformacion} className={styles.image} alt='transformacion' width={510} height={300}/> */}
    </div>
  )
}

export default Methodology
