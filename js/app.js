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
            autoplayHoverPause: true,
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
