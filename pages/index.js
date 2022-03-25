import Head from 'next/head'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import About from './about'
import Image from "next/image"



export default function Home({showNav}) {
  
  
  return (
   
    <div className={styles.container}>
        <main className={styles.main}>
        <h1 className={styles.title}>
      Texte auf Deutsch
      </h1>
      
         <p className={styles.parraf}> 
         
         Ich bin sehr froh, dass ich eine Website für mein eigenes Studio erstellen kann.
         Hier werde ich auf Deutsch geschriebene Texte hinzufügen, die man während einer Reise,
         vielleicht im Zug oder vor dem Einschlafen lesen kann.
      </p>
      <br></br>
        
          
    
      </main>
    {/* <div>
        <Link href="/about" ><a>Go to about page</a></Link>
    </div> */}
    </div>
   
    
  )
}
