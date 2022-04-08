import Image from "next/image";
import gsap from "gsap";
import { useState, useRef } from "react";

const MenuItem = ({link}) => {
    const [ isHovered, setIsHovered ] = useState(false)
    const imgRef = useRef(null);

    const handlemove = (e) => {
        gsap.to(imgRef, {
            left : `${e.clientX -40}px`,
        })
    }

    return <li key={link.id} onMouseMove={handlemove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) } >
            <span>{link.name}</span>
            <figure ref={el => imgRef = el } className={`${isHovered && "active"} menu_item_img_wrapper`}>
                <Image src={link.img} alt={link.name} layout="fill" />

            </figure>
        </li>
}

export default MenuItem;