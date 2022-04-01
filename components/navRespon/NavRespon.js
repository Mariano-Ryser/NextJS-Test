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
        
        
        <div>
          <img className={styles.img} src='/burger.png'
           onClick={Mostrar}
           ></img>
        </div> 
      {
        showNav &&
      <div className={styles.navToggle}
        onMouseLeave={Mostrar}>
          <ul className={styles.ulRes}>
            <Link href="/"><li className={styles.li}>Home</li></Link>
            <Link href="/about"><li className={styles.li}>About</li></Link>
            <Link href="/deutsch"><li className={styles.li}>Deutsch</li></Link>
            <Link href="/wortschatz"><li className={styles.li}>Wortschatz</li></Link>
        </ul>
      </div>
      }

        

      



        {/* <ul className={styles.ul}>
            <Link href="/"><li className={styles.li}>Home</li></Link>
            <Link href="/about"><li className={styles.li}>About</li></Link>
        </ul> */}
    </nav>
  )
}

export default NavRespon