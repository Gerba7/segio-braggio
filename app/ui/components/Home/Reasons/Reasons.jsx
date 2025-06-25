import Image from 'next/image';
import MiniSlider from './MiniSlider/MiniSlider';
import styles from './reasons.module.css';
import Reasons_Cover from '../../../../../public/images/braggio_cover_open.jpg'


const Reasons = () => {
  return (
    <div className={styles.container}>
        <div className={styles.slider}>
            <MiniSlider />
        </div>
    </div>
  )
}

export default Reasons
