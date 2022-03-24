import React from 'react';
import Link from 'next/link';
import styles from "../../styles/Nav.module.css"
import Image from "next/image"
const Nav = () => {
  return (
    <nav className={styles.nav}>
        
        <Link href="/" ><div className={styles.logo}><Image src="/logo.png" height={50} width={100}></Image></div></Link>
            <ul className={styles.ul}>
            <Link href="/"><li className={styles.li}>Home</li></Link>
            <Link href="/about"><li className={styles.li}>About</li></Link>
        </ul>

    </nav>
  )
}

export default Nav