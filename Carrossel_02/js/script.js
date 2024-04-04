var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
})

function slideNextWithTimer() {
    swiper.slideNext(); // Avança para o próximo slide
    setTimeout(slideNextWithTimer, 5000); // Chama novamente a função após 5 segundos
}

slideNextWithTimer();