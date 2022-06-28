import React, {useState}from 'react'
import styles from '../styles/Info.module.css'
import Image from "next/image"
// import Link from 'next/link';

const Info = () => {
  return (
<div className={styles.info}>
  <div>
 <h2 className={styles.tiTra}>MOSCOW MULE</h2>
 <li className={styles.li}>vodka</li>
 <li className={styles.li}>15 ml de zumo de una lima</li>
 <li className={styles.li}>1 ginger beer</li>
 <li className={styles.li}>Rodaja de lima</li>
 <li className={styles.li}>Hielo picado</li>
 <li className={styles.li}>Hierbabuena (opcional)</li>
 <br></br>
 <hr></hr>
 <br></br>
 <h2 className={styles.tiTra}>AMERICANO</h2>
 <li className={styles.li}>Hielo</li>
 <li className={styles.li}>50 ml de Campari</li>
 <li className={styles.li}>50 ml de vermouth dulce</li>
 <li className={styles.li}>1 golpe de soda</li>
 <li className={styles.li}>1 rodaja de naranja</li>
 <br></br>
 <hr></hr>
 <br></br>
 <h2 className={styles.tiTra}>NEGRONI</h2>
 <li className={styles.li}>Hielo</li>
 <li className={styles.li}>30 ml de Campari</li>
 <li className={styles.li}>30 ml de ginebra</li>
 <li className={styles.li}>30 ml de vermut rojo</li>
 <li className={styles.li}> Piel de naranja</li>
 <br></br>
 <hr></hr>
 <br></br>
 <h2 className={styles.tiTra}>GIN TONIC</h2>
 <li className={styles.li}>Hielo</li>
 <li className={styles.li}>50 ml de ginebra</li>
 <li className={styles.li}>200 ml de tónica</li>
 <li className={styles.li}>1 rodaja de lima o limón</li>
 <li className={styles.li}> Hielo</li>
 <li className={styles.li}> en Copa de balón</li>
 <br></br>
 <hr></hr>
 <br></br>
 <h2 className={styles.tiTra}>MOJITO</h2>
 <li className={styles.li}>2 chucharitas de azúcar blanco</li>
 <li className={styles.li}>hierbabuena</li>
 <li className={styles.li}>30 ml de zumo de lima</li>
 <li className={styles.li}>60 ml. de ron cubano</li>
 <li className={styles.li}>1/2 lima en rodajas o cuartos</li>
 <li className={styles.li}>120 ml. de Soda</li>
 <li className={styles.li}>Hielo picado o pilé</li>
 </div>

</div>
  )
}

export default Info