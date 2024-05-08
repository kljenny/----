//收件者同購買者
function setAsBuyer() {
    document.getElementById("rperson").value = document.getElementById("person").value;
    document.getElementById("rphone").value = document.getElementById("phone").value;
    document.getElementById("raddress").value = document.getElementById("address").value;
}
//設定點按事件發生在sameAs時要執行 setAsBuyer()
document.getElementById("sameAs").addEventListener('click', setAsBuyer);


//全選
let selectAllCheckbox = document.getElementById('checkall');
let checkboxes = document.querySelectorAll('input[name="item"]');
// 網頁加載時全選
window.addEventListener('load', function () {
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
    selectAllCheckbox.checked = true;
});
selectAllCheckbox.addEventListener('change', function () {
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
});

//數量加減
window.addEventListener("load", function () {
    //-------------------
    let btnMinus = document.getElementsByClassName("btnMinus");
    let qty = document.getElementsByClassName("qty");
    let btnPlus = document.getElementsByClassName("btnPlus");

    for (let i = 0; i < btnMinus.length; i++) {
        btnMinus[i].onclick = function () {
            if (parseInt(qty[i].value) >= 1) {
                qty[i].value = parseInt(qty[i].value) - 1;
            }
        }
    }
    for (let i = 0; i < btnPlus.length; i++) {
        btnPlus[i].onclick = function () {
            qty[i].value = parseInt(qty[i].value) + 1;
        }
    }
})