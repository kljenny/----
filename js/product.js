
//數量加減
function $id(id) {
    return document.getElementById(id);
}
function init() {
    $id("btnPlus0").onclick = function (e) {
        let qty = e.target.previousElementSibling;
        qty.value = parseInt(qty.value) + 1;
    }
    $id("btnMinus0").onclick = function (e) {
        let qty = e.target.nextElementSibling;
        if (parseInt(qty.value) >= 1) {
            qty.value = parseInt(qty.value) - 1;
        }
    }
}
window.addEventListener("load", init, false);


// 大小圖片切換
function showLarge(e) {
    let small = e.target;
    document.getElementById("large").src = small.src
}

function init() {
    let smalls = document.querySelectorAll('#smallPanel img');
    for (let i = 0; i < smalls.length; i++) {
        smalls[i].onclick = showLarge;
    }
}
window.addEventListener("load", init, false);

// 輪播圖
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});




// 頁籤切換
$(function () {
    var $li = $('ul.tab-title li');
    // 初始化，隱藏所有標籤內容，只顯示第一個標籤的內容
    $('.tab-inner').hide();
    $($li.eq(0).addClass('active').find('a').attr('href')).show();

    $li.click(function () {
        // 隱藏所有標籤的內容
        $('.tab-inner').hide();
        // 顯示點擊的標籤內容
        $($(this).find('a').attr('href')).show();
        // 更新活動標籤的樣式
        $(this).addClass('active').siblings().removeClass('active');

        // 檢測屏幕寬度是否小於或等於 768px
        if ($(window).width() <= 768) {
            if ($(this).find('a').attr('href') === '#tab01') {
                // 如果點擊的是"商品描述"，顯示描述說明部分
                $('.desciption-note').slideDown(); // 使用slideDown()為顯示添加動畫效果
            } else {
                // 否則，隱藏描述說明部分
                $('.desciption-note').slideUp(); // 使用slideUp()為隱藏添加動畫效果
            }
        }
    });

    //窗口尺寸改變時重新判斷是否需要顯示或隱藏.desciption - note
    $(window).resize(function () {
        if ($(window).width() > 768) {
            $('.desciption-note').show(); // 確保在更大屏幕上.desciption-note總是可見的
        } else {
            // 根據當前活動的標籤決定是否顯示.desciption-note
            if ($('ul.tab-title li.active a').attr('href') === '#tab01') {
                $('.desciption-note').slideDown();
            } else {
                $('.desciption-note').slideUp();
            }
        }
    });
});