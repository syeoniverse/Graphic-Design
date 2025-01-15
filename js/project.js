// 가로 스크롤 섹션 배열
const horizontalSections = [
  { trigger: '#work1', items: gsap.utils.toArray('#work1 .work__item') },
  { trigger: '#work2', items: gsap.utils.toArray('#work2 .work__item') },
  { trigger: '#work3', items: gsap.utils.toArray('#work3 .work__item') },
  { trigger: '#work4', items: gsap.utils.toArray('#work4 .work__item') }
];

// 각 가로 스크롤 섹션 설정
horizontalSections.forEach(({ trigger, items }) => {
  if (items.length > 0) {
    gsap.to(items, {
      xPercent: -100 * (items.length - 1),
      ease: 'linear',
      scrollTrigger: {
        trigger: trigger,
        start: 'top top',
        end: () => `+=${items.length * items[0].offsetWidth}`,
        pin: true,
        scrub: 1,
        snap: 'none'
      }
    });
  }
});
