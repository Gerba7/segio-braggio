import styles from './modules.module.css';




const Modules = () => {
  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id='modulos'></div>
        <div className={styles.left}>
            <h2 className={styles.title}>Módulos<br/>To Be.</h2>
            <ul className={styles.ul}>
                <li className={styles.li}>Crecimiento personal</li>
                <li className={styles.li}>Gestión emocional para el Bienestar</li>
                <li className={styles.li}>Herramientas de Autoconocimiento</li>
                <li className={styles.li}>Desarrollo de Habilidades de Liderazgo</li>
                <li className={styles.li}>Equilibrio entre Vida personal y Vida profesional</li>
                <li className={styles.li}>Transformación de creencias limitantes</li>
                <li className={styles.li}>Estrategias para alcanzar metassignificativas (C.B.F.)</li>
                <li className={styles.li}>Cultivando conexiones y Relaciones exitosas</li>
            </ul>
        </div>
        <div className={styles.right}>
            <div className={styles.content}>
                <h2 className={styles.title2}>Las siguientes disciplinas estánincluidas en el programa:</h2>
                <ul className={styles.ul}>
                    <li className={styles.li2}>LIFE COACHING</li>
                    <li className={styles.li2}>NEUROCIENCIAS APLICADAS</li>
                    <li className={styles.li2}>INTELIGENCIA EMOCIONAL</li>
                    <li className={styles.li2}>METAFISICA APLICADA</li>
                    <li className={styles.li2}>AUTOLIDERAZGO</li>
                    <li className={styles.li2}>P.N.L.</li>
                </ul>
                <p className={styles.subtitle}>* Todas aplicadas a la vida cotidiana</p>
            </div>
        </div>
    </div>
  )
}

export default Modules
