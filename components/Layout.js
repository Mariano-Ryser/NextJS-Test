import Nav from "../components/nav/Nav"
import Footer from "./footer/footer";

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