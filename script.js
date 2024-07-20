function locomotiveAnimation(){

    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

locomotiveAnimation()

function loadingAnimation(){

    var tl = gsap.timeline()
    tl.from("#page1",{
    opacity:0,
    duration:0.2,
    delay:0.2
    })

    tl.from("#page1",{
        transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius:"150px",
        duration:2,
        ease:"expo.out"
        })

    tl.from("nav",{
        opacity:0,
        delay:-0.2
    })    

    tl.from("#page1 h1, #page1 p, #page1 div",{
        opacity:0,
        duration:0.5,
        stagger:0.2
    })    
}

// loadingAnimation()

function navAnimation(){
    const nav = document.querySelector("nav")

nav.addEventListener("mouseenter", function(){
    let tl = gsap.timeline()

    tl.to("#nav-bottom", {
        height:"21vh"
    })
    tl.to(".nav-part2 h5",{
        display:"block"
    })
    tl.to(".nav-part2 h5 span",{
        y:0,
        stagger:{
            amount:0.6
        }
    })

})

nav.addEventListener("mouseleave", function(){
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span",{
        transform: `translateY(25px)`,
        y:25,
        stagger:{
            amount:0.2
        }
    })
    tl.to(".nav-part2 h5",{
        display:"none",
        duration:0.1
    })
    tl.to("#nav-bottom",{
        height:0,
        duration:0.2
    })
})
}

// navAnimation()


function page2Animation(){
    var rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1

            })
        })
        elem.addEventListener("mouseleave", function(){
            gsap.to(elem.childNodes[3],{
                opacity:0,
                scale:0
            })

        })

        elem.addEventListener("mousemove", function(dets){
            gsap.to(elem.childNodes[3],{
                x:dets.x - elem.getBoundingClientRect().x-90,  //dets are used for mouse events
                y:dets.y - elem.getBoundingClientRect().y-200  //getBoundingClientRect is used to find the dimensions of a div
            })
        })    
})
}
// page2Animation()


function page3VideoAnimation(){
    var page3Center = document.querySelector(".page3-center")
var video = document.querySelector("#page3 video")

page3Center.addEventListener("click", function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})
video.addEventListener("click", function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
})
})
}
// page3VideoAnimation()


function page6VideoAnimation(){
   document.querySelectorAll(".sec-right").forEach(function(elem) {
    var video = elem.querySelector("video");
    var img1 = elem.querySelector(".img1 img"); // Select the image inside img1
    var areas = elem.querySelectorAll(".play"); // Select h2 and p elements

    elem.addEventListener("mouseenter", function(e) {
        // Check if the mouse is not over h2 or p
        if (![...areas].includes(e.target)) {
            video.style.opacity = 1;
            video.play();
        }
    });

    elem.addEventListener("mouseleave", function() {
        video.style.opacity = 0;
        video.pause();
        video.currentTime = 0; // Reset the video to the beginning

        gsap.to(img1, {
            opacity: 0,
            scale: 0
        });
    });

    elem.addEventListener("mouseenter", function() {
        gsap.to(img1, {
            opacity: 1,
            scale: 1
        });
    });

    elem.addEventListener("mousemove", function(dets) {
        gsap.to(img1, {
            x: dets.x - elem.getBoundingClientRect().x - 90,  // Adjust to move image within img1
            y: dets.y - elem.getBoundingClientRect().y - 100
        });
    });
});

}
// page6VideoAnimation()


function page10Animation(){

    gsap.from("#btm10-part2 h4", {
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm10-part2",
            scroller:"#main",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:true
    
        }
    })

    gsap.from("#btm10-part3 h4", {
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm10-part2",
            scroller:"#main",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:true
    
        }
    })

    gsap.from("#btm10-part4 h4", {
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm10-part2",
            scroller:"#main",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:true
    
        }
    })

}
// page10Animation()

 function page12Animation(){

    const img2 = document.querySelector('#page12 img:nth-of-type(2)');
    const page12 = document.querySelector('#page12');

    console.log('img2:', img2);
        console.log('page12:', page12);

    document.addEventListener('mousemove', (e) => {
        
       const rect = page12.getBoundingClientRect();
       const offsetX = e.clientX - rect.left;
       const offsetY = e.clientY - rect.top;

            gsap.to(img2, {
                x: offsetX - img2.offsetWidth / 2,
                y: offsetY - img2.offsetHeight / 2,
                duration: 0.1,
                ease: 'power1.out'
            });
        });

     document.addEventListener('mouseleave', () => {
        gsap.to(img2, {
            x: 0,
            y: 0,
            duration: 0.1,
            ease: 'power1.out'
        });
    });

 }

// page12Animation()

function page15Animation(){

    const img2 = document.querySelector('#page15 img:nth-of-type(2)');
    const page15 = document.querySelector('#page15');

    console.log('img2:', img2);
        console.log('page15:', page15);

    document.addEventListener('mousemove', (e) => {
        
       const rect = page15.getBoundingClientRect();
       const offsetX = e.clientX - rect.left;
       const offsetY = e.clientY - rect.top;

            gsap.to(img2, {
                x: offsetX - img2.offsetWidth / 2,
                y: offsetY - img2.offsetHeight / 2,
                duration: 0.1,
                ease: 'power1.out'
            });
        });

     document.addEventListener('mouseleave', () => {
        gsap.to(img2, {
            x: 0,
            y: 0,
            duration: 0.1,
            ease: 'power1.out'
        });
    });

 }

//  page15Animation()
