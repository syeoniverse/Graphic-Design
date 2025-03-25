
// 소개 intro
const intro = gsap.timeline()
// intro.to('.t0', { opacity: 1, y: -100 })
intro.to('.t1', { opacity: 1, y: -100 })
intro.to('.t2', { opacity: 1, y: -100 })

ScrollTrigger.create({
  animation: intro,
  trigger: '#intro',
  start: "top top", // #intro top과 scroll top이 같을 때 시작
  end: "+=4000", //2000만큼 내리는 동안 애니메이션 진행
  pin: true, //대상이 스크롤 따라 올라가지 않게 fixed
  anticipatePin: 1, //스크롤 속도 제어 (너무 빠르게 스크롤할 경우)
  scrub: true, //스크롤 이벤트 부드럽게 처리하기 위해 미리 준비
})

// 흘러가는 배너
const splide = new Splide('.splide', {
  type: 'loop',
  drag: false,
  focus: 'center',
  gap: 0,
  autoWidth: true,
  arrows: false,
  pagination: false,
  autoScroll: {
    speed: 1.3,
    pauseOnHover: true,
    rewind: false, //setinterval에서 속도 빨라지는거 같은거 제어
  },


  breakPoints: {
    1200: { perPage: 6 },
    600: { perPage: 3 },

  }

})


splide.mount(window.splide.Extensions)


// 호버했을 때 text 등장
const items = document.querySelectorAll('.item');
const hoverText = document.querySelector('.hover-text');
const historySection = document.querySelector('.history-section'); // history-section 선택

items.forEach(item => {
  // Show multi-line text on hover
  item.addEventListener('mouseenter', (e) => {
    const htmlContent = e.target.getAttribute('data-html'); // Get multi-line HTML content
    hoverText.innerHTML = htmlContent; // Insert HTML into hover-text
    hoverText.style.opacity = '1'; // Show hover-text
  });

  // Hide hover-text when mouse leaves
  item.addEventListener('mouseleave', () => {
    hoverText.style.opacity = '0';
  });

  // Move hover-text with the mouse (relative to history-section)
  item.addEventListener('mousemove', (e) => {
    const sectionRect = historySection.getBoundingClientRect(); // Get history-section bounds
    const offsetX =-300; // Offset for text position
    const offsetY = -400;

    // Calculate mouse position relative to history-section
    const mouseX = e.clientX - sectionRect.left; // X relative to history-section
    const mouseY = e.clientY - sectionRect.top; // Y relative to history-section

    // Adjust hover-text position
    hoverText.style.left = `${mouseX + offsetX}px`;
    hoverText.style.top = `${mouseY + offsetY}px`;
  });
});
