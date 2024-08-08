import Image from 'next/image';
import styles from './team.module.css';
import Sergio_Braggio from '../../../../../public/images/Sergio-Braggio.png';
import FERNANDA_LJUBA from '../../../../../public/images/FERNANDA_LJUBA.jpg';
import LAURA_CHORIEGO from '../../../../../public/images/LAURA_CHORIEGO.jpg';
import CECILIA_ZANONI from '../../../../../public/images/CECILIA_ZANONI.jpg';
import SERGIO_LOMBARDO from '../../../../../public/images/SERGIO_LOMBARDO.png';
import ANDREA_CHAVES from '../../../../../public/images/ANDREA_CHAVES.jpg';
import ROSINA_VAN_HEERDEN from '../../../../../public/images/ROSINA_VAN_HEERDEN.png';


const team = [
    {
        id: 1,
        name: 'FERNANDA LJUBA',
        img: FERNANDA_LJUBA
    },
    {
        id: 2,
        name: 'LAURA CHORIEGO',
        img: LAURA_CHORIEGO
    },
    {
        id: 3,
        name: 'CECILIA ZANONI',
        img: CECILIA_ZANONI
    },
    {
        id: 4,
        name: 'SERGIO LOMBARDO',
        img: SERGIO_LOMBARDO
    },
    {
        id: 5,
        name: 'ANDREA CHAVES',
        img: ANDREA_CHAVES
    },
    {
        id: 6,
        name: 'ROSINA VAN HEERDEN',
        img: ROSINA_VAN_HEERDEN
    },
]


const Team = () => {


  return (
    <div className={styles.container}>
      <div className={styles.scrollOffset} id='equipo'></div>
        <div className={styles.wrapper}>
            <div className={styles.teamItem}>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src={Sergio_Braggio} width={250} height={250} />
                </div>
                <h2 className={styles.name}>SERGIO BRAGGIO</h2>
                <h3 style={{fontSize: '14px'}}>DIRECTOR GENERAL</h3>
            </div>
            <div className={styles.team}>
                {team.map((t) => (
                    <div className={styles.teamItem} key={t.id}>
                        <div className={styles.imgContainer}>
                            <Image className={styles.img} src={t.img} width={250} height={250} />
                        </div>
                        <h2 className={styles.name}>{t.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Team
