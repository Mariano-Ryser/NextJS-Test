import React from 'react';
import Link from 'next/link';
import styles from "../../styles/Nav.module.css"
const Nav = () => {
  return (
    <nav className={styles.nav}>

        <Link href="/" ><div className={styles.logo}>Loop</div></Link>
        <ul className={styles.ul}>
        <Link href="/"><li className={styles.li}>Home</li></Link>
        <Link href="/about"><li className={styles.li}>About</li></Link>
            
        </ul>

    </nav>
  )
}

export default Nav