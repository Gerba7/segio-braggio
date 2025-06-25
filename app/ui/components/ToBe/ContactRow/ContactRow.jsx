import styles from './contactRow.module.css';
import Form from './Form/Form';





const ContactRow = () => {


  return (
      <div className={styles.container} > 
        <div className={styles.scrollOffset} id='inscripcion'></div>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.texts}>
              <h1 className={styles.jumboTitle}>To Be<span className={styles.dot}>.</span></h1>
              <p className={styles.title}>Inscripciones</p>
            </div>
          </div>
          <div className={styles.right}>
            <Form />
          </div>
        </div>
      </div>
  )
}

export default ContactRow
