const menuBtn = document.querySelector(".main__mobile-nav .menu-icon");
const itemsList = document.querySelector(".list-item");

let checkList = false;

menuBtn.addEventListener("click", function() {
    checkList = !checkList;

    if (checkList) {
        itemsList.style.display = "flex";
    } else {
        itemsList.style.display = "none";
    }
});