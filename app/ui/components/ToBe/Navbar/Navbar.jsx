'use client'

import { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Link from "next/link";
import Image from 'next/image';
import Abya_Logo from '../../../../../public/images/abya_logo_dark.webp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from 'next/navigation';






const Navbar = () => {

    const [navHeight, setNavHeight] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(true);

    const pathname = usePathname();
    
    const handleScroll = () => {
        if (window.scrollY >= 80) {
            setNavHeight(true);
        } else {
            setNavHeight(false);
        }
    };

    useEffect(() => {

      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    useEffect(() => {
      setDisplayMenu(true);
    }, [pathname]);


    const toggleMenu = (e) => {
      e.preventDefault()
      setDisplayMenu(!displayMenu)
    }


    return (
      <div className={`${styles.container} ${navHeight ? styles.containerHeight : ''}`}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
              <div className={styles.burger} onClick={e => toggleMenu(e)}> 
                <div className={styles.menuItem}>
                  {displayMenu ?  <MenuIcon color="#fff" style={{fontSize: 'inherit'}} /> 
                              :  <CloseIcon color="#fff" style={{fontSize: 'inherit'}} /> }
                </div>
              </div>
              <Link href='/'>
                  <h1 className={styles.title}>Sergio Braggio Abya - To Be</h1>
                  <Image className={styles.logoNavbar} src={Abya_Logo} alt='logo Sergio Braggio Abya' width={displayMenu ? 50 : (navHeight ? 70 : 100)} height={displayMenu ? 50 : (navHeight ? 70 : 100)} priority />
              </Link>
          </div>
          <div className={`${styles.right} ${displayMenu ? styles.rightDisplay : ''}`}>
              <Link href='#programa' className={styles.link} style={{width: 'max-content', color: '#f5f5f5'}}>Programa</Link>
              <Link href='#modulos' className={styles.link}>Modulos</Link>
              <Link href='#estructura' className={styles.link}>Estructura</Link>
              <Link href='#inscripcion' className={styles.link}>Inscripción</Link>
          </div>
        </div>
      </div>
    )
}

export default Navbar
