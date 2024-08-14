import styles from './isForYou.module.css';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';



const IsForYou = () => {

  


  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.top}>
              <h3 className={styles.title}>NO ES para ti si:</h3>
            </div>
              <div className={styles.content}>
                <div className={styles.itemContainer}>
                    <CloseIcon color='inherit' />
                    <p className={styles.description}>
                      Sólo quieres fundamentos científicos.
                    </p>
                </div>
                <div className={styles.itemContainer}>
                    <CloseIcon color='inherit' />
                    <p className={styles.description}>
                      Te interesa "un título más y si es internacional mejor".
                    </p>
                </div>
                <div className={styles.itemContainer}>
                    <CloseIcon color='inherit' />
                    <p className={styles.description}>
                      Estás esperando resultados "mágicos"
                    </p>
                </div>
                <div className={styles.itemContainer}>
                    <CloseIcon color='inherit' />
                    <p className={styles.description}>
                      No vas a poner en practica lo aprendido.
                    </p>
                </div>
              </div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <h3 className={styles.title}>ES para ti si:</h3>
          </div>
            <div className={styles.content}>
              <div className={styles.itemContainer}>
                  <DoneIcon color='inherit' />
                  <p className={styles.description}>
                    Quieres vivir mejor de lo que vives hoy.
                  </p>
              </div>
              <div className={styles.itemContainer}>
                  <DoneIcon color='inherit' />
                  <p className={styles.description}>
                    Sientes que parte de tu propósito es dejar un legado.
                  </p>
              </div>
              <div className={styles.itemContainer}>
                  <DoneIcon color='inherit' />
                  <p className={styles.description}>
                    Estas buscando el sabio equilibrio entre el dar y el recibir.
                  </p>
              </div>
              <div className={styles.itemContainer}>
                  <DoneIcon color='inherit' />
                  <p className={styles.description}>
                    Quieres desafiarte.
                  </p>
              </div>
              <div className={styles.itemContainer}>
                  <DoneIcon color='inherit' />
                  <p className={styles.description}>
                    Estas dispuesto/a a mejorar todo y en todo.
                  </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default IsForYou
