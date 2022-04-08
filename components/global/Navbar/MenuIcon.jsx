const MenuIcon = ({setIsNavOpen, isNavOpen}) => {
    return <div  className={`nav_menu_icon ${isNavOpen && "active"}`} onClick={() => setIsNavOpen(!isNavOpen)}>
        <span></span>
    </div>
}

export default MenuIcon;