import React from 'react'
import styles from "../styles/Wortschatz.module.css"

const Wortschatz = () => {
  return (
    <div className={styles.Wortschatz}>
        <div>
          <div>
              <h1 className={styles.titlee}>Wortschatz</h1>
              <h3>Besichtigen = visita</h3>
              <h3>Wahrzeichen = Punto de referencia - Hito - Lugar de interes</h3>
              <h3>Gesicht = Rostro</h3>
              <h3>Geschichte = Historia</h3>
              <h3>Gericht = El tribunal</h3>
              <h3>Beeindruckt = Impresionado</h3>
              <h3>Zünden = Encender</h3>
              <h3>Kerze = Vela</h3>
              <h3>Es schmeckt ihnen = lo difrutan</h3>
              <h3>Vorbeifahren = Conducir por</h3>
              <h3>Bewundern = Admirar</h3>
              <h3>Vergnügungspark = Parque de Atracciones</h3>
              <h3>reicht = es suficiente</h3>
          </div>

          <div>
            <h1 className={styles.titlee}>Sätze</h1>
          <h2>Können beim Vorbeifahren die prächtigen Bauten bewundern.</h2>
          <h3>Puede admirar los magníficos edificios a su paso.</h3>
          </div>

        </div>
    </div>
  )
}

export default Wortschatz