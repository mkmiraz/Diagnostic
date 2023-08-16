gsap.registerPlugin(ScrollTrigger);
gsap.from('.banner-img', {opacity: 0, x: 60, duration: 1});
gsap.from('.banner-text', {opacity: 0, y: 60, duration: 1});
gsap.to('.trusted', { scrollTrigger: {trigger: '.trusted',}, y: -60, duration: 1});
gsap.to('.feature-img', { scrollTrigger: {trigger: '.feature-img',}, x: 60, duration: 1});
gsap.to('.feature-text', { scrollTrigger: '.feature-img', x: -30, duration: 2});
gsap.to('.awards-head-para', { scrollTrigger: 'awards-head-para', x: 180, duration: 3});
