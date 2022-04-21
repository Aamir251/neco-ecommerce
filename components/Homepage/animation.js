import GSAP from "gsap";

export const homepageAnimation = (page) => {
    console.log("PAGE",page)
    const tl = GSAP.timeline()
        tl.from(page?.querySelector(".home_figure_primary_image div"), {
            scale: 1.2,
            duration : 0.7
        })
        .from(page?.querySelector(".home_figure_secondary_image div"), {
            scale: 1.2,
            duration : 0.7
        },0.1)
        .from(page?.querySelector(".home_title"), { y : 30, opacity : 0, duration : 0.8 },"start")
        .from(page?.querySelector(".home_description"), { y : 20, opacity : 0, delay : 0.1 },"start")
        .from(page?.querySelector(".figure_collection"), { opacity : 0, delay : 0.6 }, "start")
        .from(page?.querySelector(".home_button_wrapper"), { opacity : 0, y: 30, delay : 0.3 }, "start")
    
}
 
