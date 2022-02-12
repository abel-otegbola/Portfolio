import Footer from "./Global_components/Footer";
import Navbar from "./Global_components/Navbar";

const Layout = ({ children }) => {
    return (
        <div className="contents"> 
            <Navbar current={children}/>
                {children}
            <Footer />
        </div>
    )
}

export default Layout;