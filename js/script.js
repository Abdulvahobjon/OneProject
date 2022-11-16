window.addEventListener("DOMContentLoaded", function () {
  const tabheaderItem = document.querySelectorAll(".tabheader__item"),
    tabheaderItems = document.querySelector(".tabheader__items"),
    tabcontent = document.querySelectorAll(".tabcontent");

  function removeClass() {
    tabheaderItem.forEach((item, index) => {
      item.classList.remove("tabheader__item_active");
      tabcontent[index].classList.add("hide");
    });
  }

  function addClass(index) {
    tabcontent[index].classList.remove("hide");
    tabheaderItem[index].classList.add("tabheader__item_active");
  }

  removeClass();
  addClass(0);

  tabheaderItem.forEach((item, index) => {
    item.addEventListener("click", function () {
      removeClass();
      addClass(index);
    });
  });
});
