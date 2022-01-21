
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'


export default function link() {
    return (
        <>
        
        <Header />

          <Link href="/"><a> Go home </a></Link>

        <Footer />
    
    </>
     
    )
}