(function () {
  let burger = document.getElementById("burger");
  let menu = document.getElementById("main-menu");
  let menuLinks = document.getElementsByClassName("menu__link");
  let arrMenuLinks = [].slice.call(menuLinks);

  let btnSwitchTheme = document.getElementById("btn-switch-theme");
  let body = document.getElementsByTagName("body")[0];
  //=============================================================================================

  burger.addEventListener("click", function (event) {
    event.preventDefault();

    menu.classList.toggle("menu_is-open");

    arrMenuLinks.forEach((item) => {
      item.addEventListener("click", function (event) {
        if (menu.classList.contains("menu_is-open"))
          menu.classList.toggle("menu_is-open");
      });
    });
  }); //end addEventListener

  //=============================================================================================
  btnSwitchTheme.addEventListener("click", function () {
    body.classList.toggle("dark");
  }); //end addEventListener
  //===
})();
