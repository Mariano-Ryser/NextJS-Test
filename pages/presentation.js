import React, {useState}from 'react'
import styles from '../styles/Presentation.module.css'
import Image from "next/image"
import Boxtext from '../components/Boxtext'
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

  // ABRE EL MENU DE PROYECTOS
function wantanamera(){
  var boxIcons = document.getElementById("box")

  if(boxIcons.style.transform === "translateX(0%)"){
    
    boxIcons.style.transform = "translateX(-100%)";
    setTimeout(() => {
      boxIcons.style.display = "none"
  }, 300);
 
  }else {
    boxIcons.style.display = "block"
    setTimeout(() => {
      boxIcons.style.transform = "translateX(0%)";
  }, 150);
    
    }
}

  return (
<div className={styles.presentation}>
    
    <div style={{transform:"rotatez("+ deg + "deg)"}}
     className={styles.plus} onClick={Showme} ><Image
        src='/cruz.png'
        alt="bicho"
        width={50}
        height={50}
      />
    </div>

        {/* CAJA DE TEXTO NEGRA */}
      {
        showAlien && (
          <Boxtext />
        )
      }
    
    {/* CAJA DE PRUEBA JS VANILLA */}
    <div id='box'
    onClick={wantanamera}
    className={styles.box}>
          </div>
    <div className={styles.construccion}>
      Nada intereSantE! <br></br>
     ... Nada parA vEr!
    </div>
    <div className={styles.construccion}>
     Interfaz Grafica - Datos <br></br>
     ... de procesamiento cuantico - Frecuencia - interaccion.
    </div>
    <div className={styles.construccion}>
     --- <br></br>
     ... --- .
    </div>
   


    
   
  {/*CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, */}
    
    
    <div className={styles.contact}>

    {show &&(
        <div 
        //  style={{display:"none"}}
         >
            <div 
            onClick={ShowmeAlien}
             className={styles.alien}></div>
             <div 
            onClick={wantanamera}
             className={styles.bicho}></div>
            <a href='https://de.wikipedia.org/wiki/Microsoft_Paint'> <div 
            // onClick={wantanamera}
             className={styles.paint}></div>
             </a>
             {/* <a href="https://github.com/Mariano-Ryser"><div className={styles.github}></div></a>
             <a href="https://www.instagram.com/marianoryser/"><div className={styles.insta}></div></a>
            <a href="https://www.linkedin.com/in/mariano-ryser-073731221/"><div className={styles.linkedin}></div></a>
            <a href="https://soundcloud.com/"><div className={styles.sound}></div></a> */}
        
            {/* <a href="/Virtualdj"><div className={styles.twiter}></div></a> 
            <a href="/soundclound"><div className={styles.twiter}></div></a>  */}
           
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