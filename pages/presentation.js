import React, {useState}from 'react'
import styles from '../styles/Presentation.module.css'
import Image from "next/image"
import Boxtext from '../components/Boxtext'
// import Link from 'next/link';

  const Presentation = () => {
    
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

  {/* Cruz Right */}

    <div style={{transform:"rotatez("+ deg + "deg)"}}
        className={styles.plus}
        onClick={Showme} ><Image
        src='/cruz.png'
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
    {/* <div className={styles.construccion}>
      <a  className={styles.a} href='https://www.madagascar-tribune.com/'>
      Nada o si! <br></br>
     ... Nada parA vEr!</a>
    </div>

    <div className={styles.construccion}>
      <a className={styles.a} href='https://es.wikipedia.org/wiki/Estado_cu%C3%A1ntico'>Interfaz Grafica - Datos <br></br>
     ... de procesamiento cuantico - Frecuencia - interaccion.</a>
     
    </div>
    <div className={styles.construccion}>
     --- <br></br>
     ... --- .
    </div> */}
   


    
   
  {/*CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, */}
    
    
    <div className={styles.contact}>

    {show &&(
        <div className={styles.glass}
        //  style={{display:"none"}}
         >
             <a href="https://github.com/Mariano-Ryser"><div className={styles.github}></div></a>
             <a href="https://www.instagram.com/marianoryser/"><div className={styles.insta}></div></a>
            <a href="https://www.linkedin.com/in/mariano-ryser-073731221/"><div className={styles.linkedin}></div></a>
            <a href="https://soundcloud.com/"><div className={styles.sound}></div></a> 
            <a href="https://nodejs.dev/learn"><div className={styles.node}></div></a> 
            <a href="https://www.microsoft.com/de-ch/"><div className={styles.microsoft}></div></a> 
            <div 
            onClick={ShowmeAlien}
             className={styles.alien}></div>
             <div 
            onClick={wantanamera}
             className={styles.bicho}></div>
            <a href='https://apps.microsoft.com/store/detail/paint-3d/9NBLGGH5FV99?hl=de-ch&gl=CH'> <div 
            // onClick={wantanamera}
             className={styles.paint}></div>
             </a>
        
             {/* <a href="/Virtualdj"><div className={styles.twiter}></div></a>  */}
            <a href="/soundclound"><div className={styles.twiter}></div></a>  
           
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