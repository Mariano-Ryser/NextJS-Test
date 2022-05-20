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
          <div className={styles.textoBox}>
             <p className={styles.titulo}>a..</p>
             <p className={styles.parrafo}>- puedo usar JS VANILLA en Next... estas cosas me hacen cuestionar todo.
             ptmqmp.. uno quiere codear en paz y pisa este lodo de lentitud q te raja la cabeza.
             <br></br>
             Porejemplo:
             <br></br>
             var boxIcons = document.getElementById(box);
                          
            <br></br> Ya eso me putea el next.
            <br></br>
              
            Si sabes como mierda puedo hacer, dejalo en tu comentario. o llamame por telefono.
            al +782 mandame un imail.

            Listo despues de probar y probar lo solicione!

            pongamos la prueba.

            <br></br>Porejemplo
            <br></br>
            <div 
            onClick={wantanamera}
             className={styles.bicho2}></div>
              El faltante era la ubicacion de la variable que llama al id del obejeto.
              que tiene que ir siempre adentro de la funcion especificada en la accion.
              <br></br>
              var boxIcons = document.getElementById(box)

             sin importar utilizar el mismo logo con su funcionalidad,
             manipulamos estados atravez de preguntas.
             <br></br>
             <p></p>
            

             <h3>Desestructurizar componentes de componentes
             de pequeña escala con gestion de tiempo</h3>
             
             <p></p>


             </p>
          </div>
        )
      }
    
    {/* CAJA DE PRUEBA JS VANILLA */}
    <div id='box'
    onClick={wantanamera}
    className={styles.box}>
          
          </div>
   
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
             <div 
            onClick={wantanamera}
             className={styles.bicho}></div>
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