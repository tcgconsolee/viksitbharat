$(document).mousemove(function (e) {
    $(".cursor").css("left", e.pageX);
    $(".cursor").css("top", e.pageY);
})
$("a").mouseenter(function () {
    $(".cursor").animate({ opacity: "1" }, 500)
})
$("a").mouseleave(function () {
    $(".cursor").animate({ opacity: "0.45" }, 500)
})
$(".click").click(function(e) {
    e.preventDefault()
    $(".loading").animate({opacity:1}, 500);
    setTimeout(() => {
        window.location.href = $(this).attr("href")
    }, 500);
})
$(document).ready(function() {
    $(".loading").animate({opacity:0}, 500);
})
class HoverButton {
    constructor(el) {
        this.el = el;
        this.hover = false;
        this.calculatePosition();
        this.attachEventsListener();
    }

    attachEventsListener() {
        window.addEventListener('mousemove', e => this.onMouseMove(e));
        window.addEventListener('resize', e => this.calculatePosition(e));
    }

    calculatePosition() {
        gsap.set(this.el, {
            x: 0,
            y: 0,
            scale: 1
        });
        const box = this.el.getBoundingClientRect();
        this.x = box.left + (box.width * 0.5);
        this.y = box.top + (box.height * 0.5);
        this.width = box.width;
        this.height = box.height;
    }

    onMouseMove(e) {
        let hover = false;
        let hoverArea = (this.hover ? 0.3 : 0.3);
        let x = e.pageX - this.x;
        let y = e.pageY - this.y;
        let distance = Math.sqrt(x * x + y * y);
        if (distance < (this.width * hoverArea)) {
            hover = true;
            if (!this.hover) {
                this.hover = true;
            }
            this.onHover(e.pageX, e.pageY);
        }

        if (!hover && this.hover) {
            this.onLeave();
            this.hover = false;
        }
    }

    onHover(x, y) {
        gsap.to(this.el, {
            x: (x - this.x) * 0.4,
            y: (y - this.y) * 0.4,
            scale: 1.1,
            ease: 'power2.out',
            duration: 0.4
        });
        this.el.style.zIndex = 10;
    }
    onLeave() {
        gsap.to(this.el, {
            x: 0,
            y: 0,
            scale: 1,
            ease: 'power2.out',
            duration: 0.7
        });
        this.el.style.zIndex = 1;
    }
}

const card1 = document.querySelector("#card1")
const card2 = document.querySelector("#card2")
const card3 = document.querySelector("#card3")
const card4 = document.querySelector("#card4")
if(card1) {
    new HoverButton(card1)
}
if(card2) {
    new HoverButton(card2)
}
if(card3) {
    new HoverButton(card3)
}
if(card4) {
    new HoverButton(card4)
}
function hide() {
    document.getElementById("u").style.display = "none";
    $(".urban").css("background", "#F8F8F8")
    document.getElementById("r").style.display = "none";
    $(".rural").css("background", "#F8F8F8")
    document.getElementById("t").style.display = "none";
    $(".tribal").css("background", "#F8F8F8")
}
document.getElementsByClassName("urban")[0].addEventListener("click", () => {
    hide()
    document.getElementById("u").style.display = "block"
    $(".urban").css("background", "#050505")
})
document.getElementsByClassName("rural")[0].addEventListener("click", () => {
    hide()
    document.getElementById("r").style.display = "block"
    $(".rural").css("background", "#050505")
})
document.getElementsByClassName("tribal")[0].addEventListener("click", () => {
    hide()
    document.getElementById("t").style.display = "block"
    $(".tribal").css("background", "#050505")
})