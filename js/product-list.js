//加入收藏 或 取消收藏
function switchFavorite() {
    let heart = document.getElementById("heart");
    if (heart.title === "加入收藏") {
        heart.src = "heart_red.png";
        heart.title = "取消收藏";
    } else {
        heart.src = "/img/22904494 3.svg";
        heart.title = "加入收藏";
    }
}

//設定[加入收藏 或 取消收藏]的點按事件
document.querySelectorAll('.heart-icon').forEach(function (icon) {
    icon.addEventListener('click', function () {
        this.classList.toggle('liked');
    });
});
