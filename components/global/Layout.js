import Navbar from "./Navbar";

const Layout = ({children, isNavOpen, setIsNavOpen }) => {
    const navProps = { isNavOpen, setIsNavOpen }
    return <>
            <Navbar { ...navProps} />
            {children}
    </>
}

export default Layout;