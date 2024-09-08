let crsr = document.querySelector("#cursor")
let crsrBlur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets) {
    crsr.style.left = dets.x +"px"
    crsr.style.top = dets.y +"px"
    crsrBlur.style.left = dets.x -250 +"px"
    crsrBlur.style.top = dets.y -250 +"px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // marker:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
    
})
gsap.from("#aboutus img,#aboutus-in",{
    y:90,
    scale:0.25,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger:"#aboutus",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    },
});
gsap.from(".cards",{
    scale:0.5,
    // duration:1,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    },
});
gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    },
});
gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    },
});

// let h4all = document.querySelectorAll("#nav h4")
// h4all.forEach(function (elem) {
//     elem.addEventListener("mouseenter",function(){
//         crsr.style.scale=3;
//         crsr.style.border = "1px solid #fff"
//         crsr.style.backgroundColor = "transparent"
//     })
// })
// h4all.forEach(function (elem) {
//     elem.addEventListener("mouseleave",function(){
//         crsr.style.scale=1;
//         crsr.style.border = "0px solid #95c11e"
//         crsr.style.backgroundColor = "#95c11e"
//     })
// })

gsap.from("#page4 h1",{
    y:100,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3,
    },
})