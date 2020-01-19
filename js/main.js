(function(){
    const slide = document.querySelector(".hamburger");
    const closeSlide = document.querySelector('.close');
    const img = document.querySelector('.content-img');
    const imgContent = document.querySelectorAll('.content');
    const contentNav = document.querySelector('.content-nav');
    const socialIcons = document.querySelector('.social-icons');
    const background = document.querySelector('.slider');

    const contentChanger = (color, image) => {
        TweenLite.set(imgContent, {clearProps:"all"});
        TweenLite.set(background, {clearProps:"all"});
        TweenLite.set(img, {clearProps:"all"});
        TweenLite.set(contentNav, {clearProps:"all"});

        TweenMax.from(imgContent, 5, { y: 1000 });
        TweenMax.from(background, 5, { width: 0 })
        TweenMax.to(background, 1, { backgroundColor: color,  ease:Power4.easeInOut });
        TweenMax.to(img, 0.1, {attr:{src: image}});
        TweenMax.from(contentNav, 5, { opacity: 0, x: 500 })
    }

    TweenMax.from(document.body, 5, {opacity: 0 })
    TweenMax.from(contentNav, 5, { opacity: 0, x: 300});
    TweenMax.from(img, 5, { y: 500 })
    TweenMax.from(socialIcons, 5, { y: 300, opacity: 0 });
    TweenMax.from(background, 5, { width: 0 });

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

    document.body.addEventListener('click', (e) => {
                if(e.target.matches('.content-nav-link')) {
                switch(e.target.id){
                    case '1':
                        contentChanger('#FE997C', 'images/one.png');
                        break;
                    case '2':
                        contentChanger('#352818', 'images/smoking-women.jpg');
                        break;
                    case '3':
                        contentChanger('#12a49d', 'images/door.jpg');
                        break;
                    case '4':
                        contentChanger('#9b32c9', 'images/male.jpg');
                        break;
                }
        }
    });
})();