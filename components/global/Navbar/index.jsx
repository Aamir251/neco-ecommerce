import { useEffect, useState } from "react";
import MenuIcon from "./MenuIcon";
import MenuItem from "./MenuItem";
import {navLinks} from "./navlinks"
import { useRouter } from "next/router";

const Navbar = ({isNavOpen, setIsNavOpen }) => {
    const router = useRouter()
    const [ navBgColor, setNavBgColor ] = useState()
    useEffect(() => {
        const backgroundColor = router.pathname === "/collections/[singleProduct]" ? "#ffffff" : "rgba(255, 245, 237, 0.54)";
        setNavBgColor(backgroundColor)
    },[router])

    return <nav style={{backgroundColor : `${navBgColor}`}}>
     <div className="nav_wrapper">
        <div className="nav_logo_wrapper">
            <img  className="logo" alt="neca fashion" src="/logo.png" />
        </div>
        <div className="nav_menu_icon_wrapper ">
            <MenuIcon setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
        </div>

        <section className={`nav_menu ${isNavOpen && "active"}`}>
            <div className="nav_menu_logo_wrapper">
                <img src="/logo.png" alt="neco fashion" className="nav_menu_logo"/>
            </div>

            <div className="nav_menu_links_wrapper">
                <ul>
                    {
                        navLinks.map((link) => {
                            return <MenuItem key={link.id} link={link} />
                        })
                    }
                </ul>
            </div>
        </section>
     </div>
    </nav>
}

export default Navbar;
