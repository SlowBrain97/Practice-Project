

export const slideDown = {
    hidden:{
        y:"-100%",
        opacity:0
    },
    show:{
        y:0,
        opacity:1,
        transition:{ 
        type: "spring", 
        stiffness: 120, 
        damping: 30 
    }
    },
    exit:{
        y:"-100%",
        opacity:0
    },
    
}
export const appearAnimation = {
    hidden:{
        opacity:0,
        scale:0.2
    },
    show:{
        opacity:1,
        scale:1,
        transition:{ 
            duration: 0.3, 
    }
    },
    exit:{
        opacity:0,
        scale:0
    },
    
}
export const slideRight = {
    hidden:{
        x:100,
        opacity:0
    },
    show:{
        y:0,
        opacity:1
    }
}
export const slideDownAnimation = {
    initial:{
        y: "-100%",
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition: {
            type:"tween",
            duration:0.5,
            ease:"linear"
        }
    }

}
export const slideRightAnimation = {
    initial:{
        x: "100%",
        opacity:0,

    },
    animate:{
        x:0,
        opacity:1,
        transition: {
            type:"tween",
            duration:0.5,
            ease:"linear"
        }
    },
}
