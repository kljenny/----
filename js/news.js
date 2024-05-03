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






(function ($) {
    $.fn.timeline = function () {
        var selectors = {
            id: $(this),
            item: $(this).find(".news-item"),
            activeClass: "news-item--active",
            img: "img"
        };
        //將第一個時間軸項目開啟，並設置時間軸圖片為第一個項目的圖片
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
            "background-image",
            "url(" +
            selectors.item.first()
                .find(selectors.img)
                .attr("src") +
            ")"
        );
        //獲取時間軸項目的總數
        var itemLength = selectors.item.length;
        //當頁面滾動時觸發滾動事件
        $(window).scroll(function () {
            var max, min;
            //獲取頁面滾動的距離
            var pos = $(this).scrollTop();
            selectors.item.each(function (i) {
                //獲取時間軸項目的最大和最小長度
                min = $(this).offset().top;
                max = $(this).height() + $(this).offset().top;
                var that = $(this);
                //滾動到最後一個項目，並超過當前項目的一半高度，則將最後一個項目設置為激發狀態，並設背景圖是最後一個項目
                if (i == itemLength - 2 && pos >= min + $(this).height() / 2) {
                    selectors.item.removeClass(selectors.activeClass);
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        selectors.item.last()
                            .find(selectors.img)
                            .attr("src") +
                        ")"
                    );
                    selectors.item.last().addClass(selectors.activeClass);
                }
                //如果目前滾動到當前項目的最大和最小高度之間，則該項目設置為激發狀態，並設背景圖是該項目
                else if (pos <= max - 10 && pos >= min) {
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        $(this)
                            .find(selectors.img)
                            .attr("src") +
                        ")");
                    selectors.item.removeClass(selectors.activeClass);
                    $(this).addClass(selectors.activeClass);
                }
            });
        });
    };
})(jQuery)
// 最後調用timeline並傳入時間軸的id作為參數，這裡啟用時間軸並為該時間軸綁定滾動事件
$(".news-wrap").timeline();