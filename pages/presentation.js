import React, {useState}from 'react'
import styles from '../styles/Presentation.module.css'
import Image from "next/image"
// import Link from 'next/link';

const Presentation = () => {
  const rot1 = 0;
  const rot2 = 45;

  const [show, setShow] = useState(false);
  const [deg, setDeg] = useState(rot1);
  function Showme(){
    setShow(!show);
    setDeg(deg ? rot1 : rot2)
  }

  return (
<div className={styles.presentation}>
    
    <h1 style={{transform:"rotateZ("+ deg + "deg)"}} className={styles.plus} onClick={Showme} ><Image
        src='/cruz.png'
        alt="bicho"
        width={50}
        height={50}
      /></h1>

   
  {/*CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, */}
    <div className={styles.contact}>

    {show &&(
        <div className={styles.mobil}
        //  style={{display:"none"}}
         >
            <a href="https://github.com/Mariano-Ryser"><div className={styles.github}></div></a>
            <a href="https://www.instagram.com/marianoryser/"><div className={styles.insta}></div></a>
            <a href="https://www.linkedin.com/in/mariano-ryser-073731221/"><div className={styles.linkedin}></div></a>
            <a href="https://twitter.com/RyserMariano"><div className={styles.twiter}></div></a>
        </div>
    )
   }

    </div>

    {/* FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, */}
    <div>
        {/* <div className="foto"> </div> */}
        <div className={styles.bgfoto}></div>
    </div>
    
</div>
  )
}

export default Presentation