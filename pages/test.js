import styles from '../styles/test.module.css'
import Link from 'next/link'
import Header from './components/header'
import Footer from './components/footer'
function About() {
    return (
      <>
       <Header/>
        <div className={styles.mega}>
            <Link href='/'>
              <a>
               <div className={styles.junior}>
                 
               </div>
              </a>
            </Link>
        </div>
        <Footer/>
        </>
    )
  }
  
  export default About