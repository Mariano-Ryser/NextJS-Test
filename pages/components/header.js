import styles from '../../styles/header.module.css'
import Link from 'next/link'

function Header() {
    return <header className={styles.header}>
           <h1 className='m-4'><Link href="/" ><a>Home</a></Link></h1>
        </header>
}
export default Header