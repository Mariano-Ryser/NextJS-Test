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
        Warum ist Lesen überhaupt so hilfreich?
      </h1>
      
         <p className={styles.parraf}> 
         Ich denke, dass regelmässiges Lesen ganz wichtig ist, wenn man eine Fremdsprache lernt. Das ist auch nicht nur meine 
    persönlich Meinung. Es gibt wissenschaftliche Studien, die zeigen dass Menschen, die viel lesen, einen grösseren Wortschatz haben,
    dass sie besser schreiben können und auch die Grammatik besser beherrschen.
    Studien auf diesem Gebiet untersuchen ja meistens die englische Sprache. Und schätzen Wissenschaftler, dass man,
    wenn man drei Jahre lang eine Stunde am Tag liest, von einem mittleren Niveau auf ein sehr fortgeschrittenes Niveau aufsteigen kann.
    Und das ohne weiteren direkten Unterricht. Nur durch Lesen. Das Tolle ist, dass das Lernen beim Lesen eigentlich automatisch passiert.
    Wenn ihr viel lest, wiederholt ihr die unbekannten Wörter und die Grammatik automatisch kommen ja immer wieder in Texten vor -
    Und jedes Mal, wenn ihr das Wort seht, versteht es ein bisschen besser. Ihr lernt aus dem Zusammenhang, was es bedeutet bis es dann irgendwann 
    fest in eurem Wortschatz ist. 
    
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
