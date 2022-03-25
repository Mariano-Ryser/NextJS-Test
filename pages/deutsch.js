import React from 'react'
import styles from '../styles/text.module.css'

const Deutsch = () => {
  return (
    <div className={styles.container}>
    <main className={styles.main}>
     
      <h1 className={styles.title}>
        Ein Tag in Wien
      </h1>
      <p className={styles.parraf}> 
      Familie Huber wonht in der Nähe von Wien. Frank und Monika
      den Kindern einen Tag in Wien <abbr title="Prometido"><span className={styles.rot}>versprochen.</span></abbr> Am Samstag fahren sie
      gemeinsam nach Wien, in die Hauptstadt von Österreich. Das Auto
      stellen sie in einem parhaus ab und fahren mit der U.Bahn weiter in
      die Innenstadt. Als Erstes besichtigen sie den Stephandsom. Das 
      
      <span className={styles.verb}></span>
      <span className={styles.article}></span>
      

         
      </p>
    </main>
 
  </div>
  )
}

export default Deutsch