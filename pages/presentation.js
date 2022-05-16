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


  const [showAlien, setShowAlien] = useState(false);
  function ShowmeAlien(){
    setShowAlien(!showAlien);
  }

  return (
<div className={styles.presentation}>
    
    <div style={{transform:"rotatez("+ deg + "deg)"}}
     className={styles.plus} onClick={Showme} ><Image
        src='/cruz.png'
        alt="bicho"
        width={50}
        height={50}
      /></div>

{
        showAlien && (
          <div className={styles.textoBox}>
             <p className={styles.titulo}>Titulaso</p>
             <p className={styles.parrafo}>-Parrafaso lorem</p>
          </div>
        )
      }

   
  {/*CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, */}
    
    
    <div className={styles.contact}>

    {show &&(
        <div 
        //  style={{display:"none"}}
         >
            <a href="https://github.com/Mariano-Ryser"><div className={styles.github}></div></a>
            <a href="https://www.instagram.com/marianoryser/"><div className={styles.insta}></div></a>
            <a href="https://www.linkedin.com/in/mariano-ryser-073731221/"><div className={styles.linkedin}></div></a>
            <a href="https://twitter.com/RyserMariano"><div className={styles.twiter}></div></a>
            <div 
            onClick={ShowmeAlien}
             className={styles.alien}></div>
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