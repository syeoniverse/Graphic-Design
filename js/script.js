const menu = ['About', 'Branding', 'Exhibition', 'Logo', 'Cardnews', 'Newsletter', 'PPT', 'leaflet']

var swiper = new Swiper("#wrap", {
    spaceBetween: 50,
    centeredSlides: true,
    slidesPerView: "auto",
    speed: 600,
    loop: true,
    mousewheel: true,
    touchRatio: 0, //드래그로 넘기지 못하게
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + menu[index] + "</span>";
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
////////////////////////////////////////////
//Dom Caching
const bgs = document.querySelectorAll(".bg li");
const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next");
const navi = document.querySelectorAll(".swiper-pagination span");

next.addEventListener("click", activation);
prev.addEventListener("click", activation);
window.addEventListener("mousewheel", activation);

swiper.on("slideChange transitionStart", activation);
for (let el of navi) {
    el.addEventListener("click", e => {
        const ison = e.currentTarget.classList.contains("swiper-pagination-bullet-active");
        if (ison) return;
        swiper.on("slideChange TransitionEnd", activation);
    })
}


function activation() {
    let item = document.querySelector(".swiper-slide-active");
    let i = item.getAttribute("data-swiper-slide-index");
    for (let el of bgs) {
        el.classList.remove("on");
    }
    bgs[i].classList.add("on");
}

window.addEventListener('resize', function () {
    location.reload();
});


// 활성화된 swiper 클릭했을 때 연결된 링크로 이동동
document.querySelector(".swiper-wrapper").addEventListener("click", (event) => {
    // Check if the clicked element is the active slide
    let activeSlide = document.querySelector(".swiper-slide-active");

    // Ensure the clicked element is the active slide
    if (activeSlide && activeSlide.contains(event.target)) {
        let link = activeSlide.getAttribute("data-url");

        // Navigate if data-url exists
        if (link) {
            window.location.href = link;
        }
    }
});