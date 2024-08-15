import Image from 'next/image';
import styles from './datesPayment.module.css';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ZLogo from '../../../../../public/images/zLogo.png';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import SyncIcon from '@mui/icons-material/Sync';
import bbLogo from '../../../../../public/images/bbLogo.png';
import Banistmo from '../../../../../public/images/banistmo.png';
import Visa from '../../../../../public/images/Visa_Logo.png';
import Master from '../../../../../public/images/Mastercard-logo.png';


const DatesPayment = () => {
  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id='estructura'></div>
        <div className={styles.left}>
          <h3 className={styles.title}>Estructura y Modalidad</h3>
          <div className={styles.item}>
            <div className={styles.iconContainer}>
              <EventAvailableIcon fontSize='inherit' color='inherit' />
            </div>
            <div className={styles.titles}>
              <span className={styles.bold}>INICIO:</span>
              <span className={styles.bold}>FIN:</span>
            </div>
            <div className={styles.texts}>
              <p className={styles.text}> Sábado, 5 de Octubre 2024</p>
              <p className={styles.text}> Sábado, 23 de Noviembre 2024</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.iconContainer}>
              <VideoCameraFrontIcon fontSize='inherit' color='inherit' />
            </div>
            <div className={styles.texts}>
              <span className={styles.bold}>FORMATO VIRTUAL</span>
              <p className={styles.text}>
                <Image src={ZLogo} width={60} height={25} alt='zooom' />
                Clases en vivo
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.iconContainer}>
              <ConnectWithoutContactIcon fontSize='inherit' color='inherit' />
            </div>
            <div className={styles.texts}>
              <span className={styles.bold}>METODOLOGÍA</span>
              <p className={styles.text}>
                100% práctica con medición de avances
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.iconContainer}>
              <ConnectWithoutContactIcon fontSize='inherit' color='inherit' />
            </div>
            <div className={styles.texts}>
              <span className={styles.bold}>DURACIÓN</span>
              <p className={styles.text}>
                8 clases
                16 horas
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.iconContainer}>
              <ConnectWithoutContactIcon fontSize='inherit' color='inherit' />
            </div>
            <div className={styles.texts}>
              <span className={styles.bold}>HORARIOS:</span>
              <p className={styles.bold}>
                SÁBADO
              </p>
              <p className={styles.text}>
                10:00 AM - ARG | URU |
              </p>
              <p className={styles.text}>
                09:00 AM - REP. DOM | BOL | VEN | PAR | MIA | CHI
              </p>
              <p className={styles.text}>
                08:00 AM - COL | PERÚ | ECU | PAN
              </p>
              <p className={styles.text}>
                07:00 AM - C.RICA | NIC | SALV | HON | GUA | MEX
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.content}>
            <h3 className={styles.title}>Inversión</h3>
            <h4 className={styles.subtitle}>PAGO EN DÓLARES (USD)</h4>
            <h4 className={styles.subSubtitle}>
              AL CONTADO: USD 180<br/>
              2 CUOTAS MENSUALES: USD 95
            </h4>
            <h4 className={styles.subtitle}>PAGO EN PESOS (ARS)</h4>
            <h4 className={styles.subSubtitle}>
              AL CONTADO: $ 144.000<br/>
              2 CUOTAS MENSUALES: $ 78.000
            </h4>
            <div className={styles.payments}>
              <div className={styles.payment}>
                <h4 className={styles.bold}>ARGENTINA</h4>
                <div className={styles.info}>
                  <Image src={bbLogo} alt='bbva' height={20} />
                  <div className={styles.text}>
                    Depósito o Transferencia Bancaria<br/>
                    *Consultar datos bancarios
                  </div>
                </div>
                <hr className={styles.hr} />
              </div>
              <div className={styles.payment}>
                <h4 className={styles.bold}>PANAMÁ</h4>
                <div className={styles.info}>
                  <Image src={Banistmo} alt='Banistmo' height={50} />
                  <div className={styles.text}>
                    Depósito o Transferencia Bancaria<br/>
                    *Consultar datos bancarios
                  </div>
                </div>
                <hr className={styles.hr} />
              </div>
              <div className={styles.payment}>
                <h4 className={styles.bold}>RESTO DE AMÉRICA Y EUROPA</h4>
                <div className={styles.info}>
                  <Image src={Visa} alt='Visa' height={20} />
                  <Image src={Master} alt='Master' height={30} />
                  <div className={styles.text}>
                    Depósito o Transferencia Bancaria<br/>
                    *Consultar datos bancarios
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DatesPayment
