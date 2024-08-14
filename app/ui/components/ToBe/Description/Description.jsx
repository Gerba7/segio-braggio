import Image from 'next/image';
import styles from './description.module.css';
import Mind from '../../../../../public/images/mind.png';




const Description = () => {
  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id='programa'></div>
        <div className={styles.top}>
            <h2 className={styles.title}>SOBRE EL PROGRAMA</h2>
            <hr className={styles.hr} />
            <p className={styles.paragraph}>
                <b>To Be es el programa de evolución personal más
                completo de Latinoamérica.</b><br/>
                ¿Lo mejor? <b>Es 100% práctico y en vivo.</b> En
                cada encuentro tendrás la posibilidad de
                llevarte herramientas concretas para poner
                en práctica de manera inmediata.
            </p>
        </div>
        <div className={styles.bottom}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h2 className={styles.title}>
                        El propósito de este nivel
                        inicial del programa es
                        comenzar un camino de
                        conciencia diferente que te
                        permita comenzar un
                        vínculo con vos mismo/a
                        diferente.
                    </h2>
                </div>
                <div className={styles.right}>
                    <Image src={Mind} width={250} height={250} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description
