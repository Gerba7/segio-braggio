import styles from './contactRow.module.css';
import Form from './Form/Form';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailIcon from '@mui/icons-material/Email';





const ContactRow = () => {


  return (
      <div className={styles.container} > 
        <div className={styles.scrollOffset} id='contacto'></div>
        <div className={styles.back} />
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.texts}>
              <h3 className={styles.title}>Contactate</h3>
              <p className={styles.paragraph}>con nuestro equipo</p>
            </div>
            <div className={styles.data}>
              <div className={styles.icon}>
                <EmailIcon size={24} color='inherit' />
                <div className={styles.line}>
                  <h3 className={styles.subtitle}>EMAIL</h3>
                  <h4 className={styles.iconText}>operaciones@abyagroup.org</h4>
                </div>
              </div>
              <div className={styles.icon}>
                <LocalPhoneOutlinedIcon size={24} color='inherit' />
                <div className={styles.line}>
                  <h3 className={styles.subtitle}>TELÉFONO</h3>
                  <h4 className={styles.iconText}>+54 9 11 3597 9700</h4>
                </div>
              </div>
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
