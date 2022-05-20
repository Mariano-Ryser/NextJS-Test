import React from 'react'
import styles from '../styles/Boxtext.module.css'
const Boxtext = () => {
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
    <div className={styles.textoBox}>
            
             <p className={styles.titulo}>a..</p>
             <p className={styles.parrafo}>- puedo usar JS VANILLA en Next... estas cosas me hacen cuestionar todo.
             ptmqmp.. uno quiere codear en paz y pisa este lodo de lentitud q te raja la cabeza.
             <br></br>
             Porejemplo:
             <br></br>
             var boxIcons = document.getElementById(box);
             <p>Sera contraproducente gitear y pushear todo el rato ??</p>
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
             de pequeña escala con gestion de tiempo.</h3>
             
             <p> hipervinculos. </p>

            <h4>En 5 años aproximadamente estaremos haciendo paginas
              manipulables directamente desde el frontend
            </h4>
            que mierda de pagina esta. dios mio
             </p>

             

             
          </div>
  )
}

export default Boxtext