import MiniSlider from './MiniSlider/MiniSlider';
import styles from './reasons.module.css';



const Reasons = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <p className={styles.paragraph}>Las razones por las que</p>
            <h3 className={styles.title}>somos tu mejor aliado</h3>
        </div>
        <div className={styles.slider}>
            <MiniSlider />
        </div>
    </div>
  )
}

export default Reasons
