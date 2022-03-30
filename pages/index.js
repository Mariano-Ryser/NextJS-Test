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
      </h1>
      
         <p className={styles.parraf}> 
         
    
    <hr></hr>
    <br></br>
    

      </p>
    

 
        
          
    
      </main>
    {/* <div>
        <Link href="/about" ><a>Go to about page</a></Link>
    </div> */}
    </div>
   
    
  )
}
