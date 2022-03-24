import Nav from "../components/nav/Nav"
import Footer from "./footer/Footer";

const Layout = ({ children}) => {
    return (
        <div className="content">
            <Nav />
             { children }
            <Footer />
        </div>
    );
}
export default Layout;