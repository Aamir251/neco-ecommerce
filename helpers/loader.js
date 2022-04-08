import gsap from "gsap"


export const resetLoader = (loader) => {
    gsap.set(loader, {
        top : "100%",
    })
    gsap.set(loader.children[0].children[1], {
        clipPath : "polygon(0 95%, 100% 74%, 100% 100%, 0 100%)",
    })
}


export const showLoader = (loader) => {
    const tl = gsap.timeline()

    return new Promise(resolve => {
        tl.to(loader, { top : 0, duration : 0.7});
        tl.from(loader.children[0].children[1], {
            clipPath : "polygon(0 100%, 100% 97%, 100% 100%, 0 100%)",
            duration : 0.5,
            onComplete : () => resolve()
        }, 0.5)
        
    })
}

export const hideLoader = (loader) => {
    const tl = gsap.timeline()

    return new Promise(resolve => {
        tl.to(loader.children[0].children[1], {
            clipPath : "polygon(0 100%, 100% 97%, 100% 100%, 0 100%)",
            duration : 0.7,
            onComplete : () => resolve()
        })
        tl.to(loader, { top : "-100%", duration : 1, onComplete : () =>{ 
            resetLoader(loader)
        }
    }, 0);
})
}


