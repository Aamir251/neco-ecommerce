import Navbar from "./Navbar";

const Layout = ({children, isNavOpen, setIsNavOpen }) => {
    const navProps = { isNavOpen, setIsNavOpen }
    return <div className="main_wrapper">
            <Navbar { ...navProps} />
            {children}
    </div>
}

export default Layout;