import NavRespon from "../components/navRespon/NavRespon"
import Footer from "./footer/Footer";

const Layout = ({ children}) => {
    return (
        <div className="content">
            <NavRespon />
            
            
             { children }
            <Footer />
        </div>
    );
}
export default Layout;