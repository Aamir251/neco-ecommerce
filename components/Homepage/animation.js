import GSAP from "gsap";

export const homepageAnimation = (page) => {
    console.log("PAGE",page)
    const tl = GSAP.timeline()
        tl.from(page?.querySelector(".home_figure_primary_image div"), {
            scale: 1.2,
        })
        .from(page?.querySelector(".home_figure_secondary_image div"), {
            scale: 1.2,
            
        },0.1)
    
}
 
