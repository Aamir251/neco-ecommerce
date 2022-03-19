const Navbar = () => {
    return <nav>
     <div className="nav_wrapper">
        <div className="nav_logo_wrapper">
            <img className="logo" alt="neca fashion" src="/logo.png" />
        </div>
        <div className="nav_menu_icon_wrapper">
            <MenuIcon />
        </div>
     </div>
    </nav>
}

export default Navbar;


const MenuIcon = () => {
    return <div className="nav_menu_icon">
        <span></span>
    </div>
}