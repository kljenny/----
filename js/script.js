// <!-- 登入 -->
document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.wrapper');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');

    // 切換登入彈窗的顯示
    btnPopup.addEventListener('click', function () {
        wrapper.classList.toggle('active-popup');  // 切換彈窗的顯示和隱藏
    });

    // 關閉彈窗
    iconClose.addEventListener('click', function () {
        wrapper.classList.remove('active-popup');  // 隱藏彈窗
    });

    // 切換到註冊表單
    registerLink.addEventListener('click', function (e) {
        e.preventDefault();
        wrapper.classList.add('active');  // 添加 active 類來顯示註冊表單
    });

    // 切換到登入表單
    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        wrapper.classList.remove('active');  // 移除 active 類來顯示登入表單
    });
});



// < !--Initialize Swiper-- >
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});
