import styles from './data.module.css';
import ToBePage from '../../../../../public/images/ToBePage.jpg';
import Image from 'next/image';
import Certified from '../../../../../public/images/certified.png';
import Classes from '../../../../../public/images/classes.png';
import Online2 from '../../../../../public/images/online2.png';



const Data = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperLeft}>
        <Image src={ToBePage} className={styles.img} width={500} height={300} />
      </div>
      <div className={styles.left}>

      </div>
      <div className={styles.right}>
        <div className={styles.cont}>
          {/* <span className={styles.quotes}>
            <Image src={Quotes} width={60} height={60} />
          </span> */}
          <h3 className={styles.title}>
              Serán 16 horas reveladoras,<br/>
              invertidas en tu autoconocimiento<br/>
              y altamente rentables.<br/>
          </h3>
        </div>
        <div className={styles.badges}>
          <div className={styles.badge}>
            <div className={styles.iconContainer}>
              <Image src={Online2} width={60} height={60} />
            </div>
            <h5 className={styles.badgeTitle}>100% ONLINE</h5>
          </div>
          <div className={styles.badge}>
            <div className={styles.iconContainer}>
              <Image src={Certified} width={60} height={60} />
            </div>
            <h5 className={styles.badgeTitle}>EQUIPO ALTAMENTE<br/>CAPACITADO</h5>
          </div>
          <div className={styles.badge}>
            <div className={styles.iconContainer}>
              <Image src={Classes} width={60} height={60} />
            </div>
            <h5 className={styles.badgeTitle}>8 CLASES</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Data
