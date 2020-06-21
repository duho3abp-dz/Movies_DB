'use strict';

const ad = document.querySelectorAll('.advertising'),
      bg = document.querySelector('.promo__bg'),
      genre = bg.querySelector('.promo__genre'),
      promo = document.querySelectorAll('.promo__interactive-item'),
      movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
      };

ad.forEach(item => {
    item.remove();
});

genre.textContent = 'ДРАМА';

bg.style.background = 'url(img/bg.jpg) center center/cover no-repeat';

movieDB.movies.sort();
promo.forEach((item, i)=> {
    item.textContent = `${i + 1}. ${movieDB.movies[i]}`;
});
