(function () {
  let burger = document.getElementById("burger");
  let menu = document.getElementById("main-menu");
  let menuLinks = document.getElementsByClassName("menu__link");
  let arrMenuLinks = [].slice.call(menuLinks);

  let btnSwitchTheme = document.getElementById("btn-switch-theme");
  let body = document.getElementsByTagName("body")[0];

  let personalPhoto = document.getElementById("personal-photo");
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

  //=============================================================================================

  let animationIsPlaying = false;

  personalPhoto.addEventListener("click", function () {
    if (this.classList.contains("photo__photo-wrapper_is-rotated")) {
      return;
    }
    this.classList.add("photo__photo-wrapper_is-rotated");
  }); //end addEventListener

  personalPhoto.addEventListener("animationstart", function () {
    animationIsPlaying = true;
  });

  personalPhoto.addEventListener("animationend", function () {
    animationIsPlaying = false;
    personalPhoto.classList.remove("photo__photo-wrapper_is-rotated");
  });
  //===
})();
