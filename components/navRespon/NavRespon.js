import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../../styles/NavRespon.module.css"
import Image from "next/image"

const NavRespon = () => {

  const [showNav, setShowNav] = useState(false);

  const Mostrar = () => {
    setShowNav(showNav ? false : true)
    console.log(showNav)
  }
  return (
    <nav className={styles.nav}>
        
        <div className={styles.img}>
          {/* <Image
        src='/bichoWhite.png'
        alt="bicho"
        width={50}
        height={40}
        onClick={Mostrar}
      /> */}
      <h1 className={styles.logo}
      onClick={Mostrar}>EL SALO!</h1>
        </div> 
      {
        showNav &&
      <div className={styles.navToggle}
        // onMouseLeave={Mostrar}
        >
          
        <ul className={styles.ulRes}>
        <Link href="/"><a className={styles.li}>Home</a></Link>
        <Link href="/info"><a className={styles.li}>Info</a></Link>
        <Link href="/data"><a className={styles.li}>Data</a></Link>
        <Link href="/weg"><a className={styles.li}>Weg</a></Link>
        <Link href="/brain"><a className={styles.li}>Brain</a></Link>
          
        </ul>
      </div>
      }

        
       
    </nav>
  )
}

export default NavRespon