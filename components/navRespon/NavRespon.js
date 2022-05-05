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
          <Image
        src='/bichoWhite.png'
        alt="bicho"
        width={50}
        height={40}
        onClick={Mostrar}
      />
        </div> 
      {
        showNav &&
      <div className={styles.navToggle}
        onMouseLeave={Mostrar}>
          <ul className={styles.ulRes}>
            <Link href="/"><li className={styles.li}>Home</li></Link>
            
        </ul>
      </div>
      }

        
       
    </nav>
  )
}

export default NavRespon