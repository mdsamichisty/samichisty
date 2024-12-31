
gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero .text-slider p", {
    scrollTrigger: {
        trigger: ".hero .text-slider p",
        start: "top 30%",
        end: "top -100%",
        scrub: 1,
        pin: true,
    },
    transform: "translateX(-120%)",
})

gsap.from(".navbar .logo", {
    opacity: 0,
    stagger: 0.14
})

gsap.from(".navbar .nav-links li", {
    opacity: 0,
    stagger: 0.1
})

gsap.timeline({
    scrollTrigger: {
        trigger: ".works",
        start: "top 50%",
        end: "top 100%",
        scrub: 1,
        pin: true,
    },
}).to("body", { background: "black" }).to(".works", { color: "white" }, "<");

gsap.timeline({
    scrollTrigger: {
        trigger: ".services",
        start: "top 50%",
        end: "top 100%",
        scrub: 1,
        pin: true,
    },
}).to("body", { background: "#fff8e8" }).to(".services", { color: "black" }, "<");

[".board1", ".board2"].forEach((board) => {
    gsap.to(board, {
        opacity: 0,
        scale: 0.7,
        scrollTrigger: {
            trigger: board,
            start: "top 25%",
            end: "bottom 30%",
            scrub: 1,
            pin: true,
        },
    });
});

gsap.to(".services", {
    scrollTrigger: {
        trigger: ".services",
        start: "top 50%",
        end: "top 100%",
        scrub: 1,
        pin: true,
    },
    color: "black",
})

gsap.to(".info-board", {
    scrollTrigger: {
        trigger: ".services",
        start: "top 50%",
        end: "top 100%",
        scrub: 1,
        pin: true,
    },
    background: "#fff8e8",
    color: "black",
})

let servicesDropdowns = document.querySelectorAll(".services .dropdown");

servicesDropdowns.forEach(elem => {
    elem.addEventListener("click", (e) => {
        console.log(elem.classList.contains("active"))
        if (elem.classList.contains("active")) {
            elem.classList.remove("active");
        } else {
            servicesDropdowns.forEach(allElem => {
                allElem.classList.remove("active");
            })
            elem.classList.add("active");
        }
    })
})

// ? Preloader


window.addEventListener("load", () => {

    gsap.timeline()
        .to(".preloader-text", { y: -20, opacity: 0, duration: 0.5, delay: 1 })
        .to(".preloader", { height: 0, duration: 1.5, ease: "power2.out" })

    setTimeout(() => {
        let animatedText = new SplitType(".animate-text");
        let animatedWord = new SplitType(".animate-word");

        gsap.to(".char", {
            y: 0,
            delay: 0.2,
            duration: .5
        })

        gsap.to(".word", {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: .5
        })
    }, 1200)

});