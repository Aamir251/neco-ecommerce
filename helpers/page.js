import gsap  from "gsap"

export const revealPage = (page) => {
    gsap.to(page, {
        duration: 1,
        opacity: 1,
        delay : 1,
        ease: "power2.inOut"
    })
}