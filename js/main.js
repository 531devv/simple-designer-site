(function(){
    const slide = document.querySelector(".hamburger");
    const closeSlide = document.querySelector('.close');
    const img = document.querySelector('.content img');
    const contentNav = document.querySelector('content-nav');
    const tl = new TimelineMax();
    tl.fromTo(img, 1, { height: "0%"}, {height: "80%", ease: Power2.ease });

    slide.addEventListener("click", () => {
        document.getElementById("menu").style.width = '250px';
        document.getElementById("mobile-nav").style.marginLeft = '250px';
        document.getElementsByClassName('slide')[0].style.opacity = '0';
    });
    closeSlide.addEventListener('click', () => {
        document.getElementsByClassName('slide')[0].style.opacity = '1';
        document.getElementById("menu").style.width = '0';
        document.getElementById("mobile-nav").style.marginLeft = '0';
    });
})();