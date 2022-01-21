import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../../styles/grid.module.css'
export default function link() {
    return (
<>
    
    
   < Header />
        <h1>GRID</h1>
     <div className={styles.grid}>
        <div className={styles.cardcol}>1</div>
        <div className={styles.card}>2</div>
        <div className={styles.cardrow}>3</div>
        <div className={styles.card}>4</div>
        <div className={styles.cardcol}>5</div>
        <div className={styles.card}>6</div>
        <div className={styles.cardrow}>7</div>
        <div className={styles.cardcol}>8</div>
        <div className={styles.card}>9</div>
        <div className={styles.card}>10</div>
        <div className={styles.cardrow}>11</div>
        <div className={styles.card}>12</div>
        <div className={styles.card}>13</div>
        <div className={styles.card}>14</div>
     </div>

   <Footer />

     </>
    )
}