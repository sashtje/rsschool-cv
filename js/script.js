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

  //=============================================================================================
  let btnScrollTop = document.getElementById("btn-scroll-top");

  document.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      btnScrollTop.style.display = "block";
    } else {
      btnScrollTop.style.display = "none";
    }
  }); //end addEventListener

  btnScrollTop.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }); //end addEventListener

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }

  //=============================================================================================
  function printSelfAssessmentToConsol() {
    console.log(
      "Добрый день! Буду рада Вашим комментариям и советам по улучшению моего портфолио :)"
    );
    console.log("****************");
    console.log(
      "Самооценка: (Ссылка на задание: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/cv/cv.md)"
    );
    console.log(
      "1. ☑ вёрстка валидная (https://validator.w3.org/) = 10 баллов из 10"
    );
    console.log(
      "2. ☑ вёрстка семантическая. Есть теги: header, nav, section, h1, aside, h2, main, footer, time, figure, figcaption, strong. = 20 баллов из 20"
    );
    console.log(
      "3. ☑ для оформления СV используются css-стили. Как минимум каждый из моих семантических тегов стилизован, так что = 10 баллов из 10"
    );
    console.log(
      "4. ☑ контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы = 10 баллов из 10"
    );
    console.log(
      "5. ☑ вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется = 10 баллов из 10"
    );
    console.log(
      "6. ☑ есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. = 10 баллов из 10"
    );
    console.log(
      "7. ☑ на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым). У меня присутствуют сразу и аватарка и моё фото с атрибутами alt. = 10 баллов из 10"
    );
    console.log(
      "8. ☑ контакты для связи и перечень навыков оформлены в виде списка ul > li = 10 баллов из 10"
    );
    console.log(
      "9. ☑ CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского = 10 баллов из 10"
    );
    console.log(
      "10. ☑ CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. = 10 баллов из 10"
    );
    console.log(
      "11. ☑ CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. = 10 баллов из 10"
    );
    console.log("12. ☑ CV выполнено на английском языке = 10 баллов из 10");
    console.log(
      "13. ☑ выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) = 10 баллов из 10. Мой pull request для проверки: https://github.com/sashtje/rsschool-cv/pull/4"
    );
    console.log(
      "14. ☑ есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке. = 10 баллов из 10"
    );
    console.log(
      "15. ☑ дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию = 10 баллов из 10"
    );
    console.log("Итого: 160 баллов из 150");
  }

  printSelfAssessmentToConsol();
  //===
})();
