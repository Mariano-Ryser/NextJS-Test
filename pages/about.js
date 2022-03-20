import React from 'react'
import styles from '../styles/Home.module.css'

const about = () => {
  return (
    <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
      About me?
      </h1>
      
         <p className={styles.parraf}> 
         
         This is just an informative blog, in which I can freely write my ideas and my notes. 
      Currently I am learning a bit of everything, but I need to focus on learning English, German, and as if that were not enough, programming.

</p>

    </main>
 
  </div>
  )
}

export default about