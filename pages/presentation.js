import React from 'react'
import styles from '../styles/Presentation.module.css'
const presentation = () => {
  return (
<div className={styles.presentation}>
    {/* <div className="p-name"><h1>Mariano Ryser</h1></div> */}

       {/* <a href="https://lecturaas.netlify.app/"><div className="next"></div></a> */}


  {/*CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, */}
    <div className={styles.contact}>

        <div className={styles.mobil}>
            <a href="https://github.com/Mariano-Ryser"><div className={styles.github}></div></a>
            <a href="https://www.instagram.com/marianoryser/"><div className={styles.insta}></div></a>
            <a href="https://www.linkedin.com/in/mariano-ryser-073731221/"><div className={styles.linkedin}></div></a>
            <a href="https://twitter.com/RyserMariano"><div className={styles.twiter}></div></a>
        </div>
    </div>

    {/* FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, */}
    <div>
        {/* <div className="foto"> </div> */}
        <div className={styles.bgfoto}></div>
    </div>
    
</div>
  )
}

export default presentation