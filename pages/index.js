import Head from 'next/head'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

import styles from '../styles/Home.module.css'
import About from './about'



export default function Home({joke}) {
  
  
  return (
    
    <div className={styles.container}>
      
      
      <main className={styles.main}>
        <h1 className={styles.title}>
        Hello! With us you can learn something New!.
        </h1>
           <p className={styles.parraf}> Aqui no existe el lorem </p>
    
      </main>
    <div>
        <Link href="/about" ><a>Go to about page</a></Link>
    </div>
    </div>
    
  )
}
