document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        autoplay: {
            delay: 5000,
        },
    });

    imgFunction();
});

const imgFunction = () => {
    let divs = document.querySelectorAll('.swipe');
    divs.forEach((div, index) => {
        if (index === 0) {
            div.innerHTML = '<img class="rounded-2xl" src="./assets/img/texnomart1.webp" alt="Image 1">';
        }
         else if (index === 1) {
            div.innerHTML = '<img class="rounded-2xl" src="./assets/img/texnomart2.webp" alt="Image 2">';
        }
         else if (index === 2) {
            div.innerHTML = '<img class="rounded-2xl" src="./assets/img/texnomart3.webp" alt="Image 3">';
        }
        else if (index === 3) {
            div.innerHTML = '<img class="rounded-2xl" src="./assets/img/texnomart4.webp" alt="Image 4">';
        }
        else if (index === 4) {
            div.innerHTML = '<img class="rounded-2xl" src="./assets/img/texnomart5.webp" alt="Image 5">';
        }
        else if (index === 5) {
            div.innerHTML = '<img class="rounded-2xl" src="./assets/img/texnomart6.webp" alt="Image 6">';
        }
        else if (index === 6) {
            div.innerHTML = '<img class="rounded-2xl" src="./assets/img/texnomart7.webp" alt="Image 7">';
        }
    });
};
