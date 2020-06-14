const section1 = document.querySelector('.introduction');
const section2 = document.querySelector('.projects');
const section3 = document.querySelector('.section3');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.icon');
const heading = document.querySelector('.heading');

const tl = new TimelineMax();

//item,time,object

tl.fromTo(section1, 1 , {height:'0%'} , {height:'80%', ease: Power2.easeInOut})
.fromTo(section1, 1.2, {width:'100%'} , {width:'80%', ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x:'-100%'}, {x: '0%'},"-=1.3")
.fromTo(hamburger, 0.5, {opacity: 0, x:30}, {opacity:1, x:0}, "-=0.2")
.fromTo(heading, 1, {opacity: 0, x:-120}, {opacity:1, x: 0});

tl.fromTo(section2, 1.5, {x:'-120%'}, {x: '0%'}, "-=1.2")
fromTo(section3, 1.5, {x:'-120%'}, {x: '0%'}, "-=2");




