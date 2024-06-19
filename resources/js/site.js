import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
import collapse from '@alpinejs/collapse'
import timeout from '@victoryoalli/alpinejs-timeout'
import moment from '@victoryoalli/alpinejs-moment'
import Swiper, { Navigation, Pagination, Scrollbar, Mousewheel, Autoplay, EffectFade, FreeMode } from 'swiper';
import 'swiper/css/bundle';
import Swup from 'swup';
import SwupPreloadPlugin from '@swup/preload-plugin';
import anime from 'animejs/lib/anime.es.js';
import axios from 'axios';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';




window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.init = false;




const body = document.body;
const select = e => document.querySelector(e);
const selectAll = e => document.querySelectorAll(e);

const swup = new Swup({
    animationSelector: '[class*="page-transition-"]',
    plugins: [new SwupPreloadPlugin()]
});

window.addEventListener('load', () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    if(window.innerWidth > 1023) {
        clearAllBodyScrollLocks();
    }
});

document.addEventListener('alpine:init', () => {
    window.disableBodyScroll = disableBodyScroll;
    window.enableBodyScroll = enableBodyScroll;
    window.clearAllBodyScrollLocks = clearAllBodyScrollLocks;

    Alpine.store('scrollDirection', 'up');

    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (st > lastScrollTop) {
            Alpine.store('scrollDirection', 'down');
        } else {
            Alpine.store('scrollDirection', 'up');
        }

        lastScrollTop = st <= 0 ? 0 : st;
    }, false);
})

// function headerScroll() {
//     var scrollPos = 0;
//     // adding scroll event
//     document.getElementById('').classList.remove('!-translate-y-full');

//     window.addEventListener('scroll', function(){
//     // detects new state and compares it with the new one
//     if ((document.body.getBoundingClientRect()).top > scrollPos) {
//             document.getElementById('').classList.remove('!-translate-y-full');
//     } else {
//         if( window.scrollY <= 0 ){
//             return;
//         } else {
//             document.getElementById('').classList.add('!-translate-y-full');
//         }
//     }
//         // saves the new position for iteration.
//         scrollPos = (document.body.getBoundingClientRect()).top;
//     });

// }
Alpine.data('getWeather', () => ({
    init(){
        axios.get('/getweather')
        .then(function (response) {
            const textDesc = response.data.weather[0].main;
            const degrees = Math.round(response.data.main.temp);

            const tempElements = document.querySelectorAll('.js-weather-temp');
            const descElements = document.querySelectorAll('.js-weather-desc');

            tempElements.forEach((element) => {
                element.innerHTML = degrees;
            });

            descElements.forEach((element) => {
                element.innerHTML = textDesc;
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}));


Alpine.data('imageSlider', () => ({
    initSlider(element) {
        const swiper = new Swiper(element, {
            modules: [EffectFade, Autoplay],
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 1000,
            },
        });
    }
}));


Alpine.data('horizontalScroller', (element) => ({
    init() {
        const swiper = new Swiper(element, {
            modules: [Mousewheel, Scrollbar, FreeMode],
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 18,
            loopAdditionalSlides: 5,
            forceToAxis: true,
            mousewheelControl: true,
            freeMode: {
                enabled: true,
                sticky: false,
                momentumBounce: false,
            },
            scrollbar: {
                enabled: true,
                el: '.swiper-scrollbar',
                draggable: true,
                dragSize: 100,
                snapOnRelease: true,
            },
            mousewheel: {
                enabled: true,
                sensitivity: 1,
            }
        });
    }
}));

Alpine.data('verticalScroller', (element) => ({
    init() {
        const loopableBlock = element.querySelector('.js-loop-block');
        const buffer = window.innerHeight / 3;

        let previousScrollPoint = 0;

        console.log((previousScrollPoint + loopableBlock.scrollHeight) - buffer - window.innerHeight)
        
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > (previousScrollPoint + loopableBlock.scrollHeight) - buffer - window.innerHeight) {
                console.log('adding new block');
                element.appendChild(loopableBlock.cloneNode(true));
                previousScrollPoint = window.scrollY;
            }
        });

    }
}));

// let pageChangingEvent = new Event("pageChanging");
// let pageChangedEvent = new Event("pageChanged");

swup.on('pageLoaded', function () {
  init();
  window.dispatchEvent(new Event('resize'));
    clearAllBodyScrollLocks();
});


swup.on('contentReplaced', function () {
    clearAllBodyScrollLocks();
    window.scrollTo(0, 0);
});


// window.headerScroll = headerScroll;

Alpine.plugin(intersect);
Alpine.plugin(collapse);
Alpine.plugin(moment);
Alpine.plugin(timeout);
window.Alpine = Alpine;
Alpine.start();
