const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

let typed = new Typed("#auto-input", {
    strings: ["eating","Sleeping","Lifestyle"],
    typeSpeed: 300,
    backspeed:200,
    loop: true
})

let owl = $(".img-carousel");
        owl.owlCarousel({
            // margin: 15,
            // loop: false,
            stagePadding: 10,
            nav: true,
            navText: ["<b>‹</b>", "<b>›</b>"],
            merge: true,
            // left: true,
            dotsEach: true,
            // autoplayHoverPause: true,
            animateOut: 'flipInY',
            animateIn: 'flipInY',
            autoplay: false,
            rewind: true,
            autoplayTimeout: 10000,
            responsive: {
                0: {
                    items: 1
                },

                900: {
                    items: 3
                }
            }
        });
        owl.on('mousewheel', '.owl-stage', function(e) {
            if (e.deltaY > 0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });


        // ! later
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".cardwrapper").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper2 i");
const carouselChildrens = [...carousel.children];

// get the number of cards that can fit in the arousel at once
// let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// insert copies of the last few cards to beginning od carousel for infinite scrolling
// carouselChildrens.slice(-cardPerView).reverse().forEach(cardwrapper => {
//     carousel.insertAdjacentHTML("afterbegin", cardwrapper.outerHTML);
// });
// insert copies of the last few cards to beginning od carousel for infinite scrolling
// carouselChildrens.slice(0, cardPerView).forEach(cardwrapper => {
//     carousel.insertAdjacentHTML("beforeend", cardwrapper.outerHTML);
// });

// ? add eventlistener for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // console.log(btn.id);
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});
// const autoPlay = () => {
//     if(window.innerWidth < 992) return ; // return id window is smaller than 800
//     // autopaly the carousel is at the beginning, scroll to the end 
//     timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 500)
// }
// autoPlay();












// const infiniteScroll = () => {
//     // if the carousel is at the beginning, scroll to the end
//     if(carousel.scrollLeft === 0) {
//         // console.log("left end");
//         carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
//     }else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
//         // console.log("right end");
//         carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth;

//     } 
//    }
//     carousel.addEventListener("scroll", infiniteScroll)
        // let isDragging = false;
        
        // const dragStart = () => {
        //     isDragging = true;
        // }
        
        // const dragging = (e) => {
        //     if(!isDragging) return; // is isDraggung is false return from here
        //     carousl.scrollLeft = e.pageX;
        // }
        
        // carousl.addEventListener("mousemove", dragging);
        