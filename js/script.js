'use strict';

const ad = document.querySelectorAll('.promo__adv img'),
      bg = document.querySelector('.promo__bg'),
      genre = bg.querySelector('.promo__genre'),
      promoList = document.querySelector('.promo__interactive-list'),
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

bg.style.backgroundImage = 'url("img/bg.jpg")';

promoList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    promoList.innerHTML += `
        <li class="promo__interactive-item">
            ${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});

// Second option fourth task!
// promoList.innerHTML = '';
// movieDB.movies.sort();
// movieDB.movies.forEach((item, i)=> {
//     promoList.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${i + 1}. ${movieDB.movies[i]}</li>`);
// });

// First option fourth task! Error
// promo.forEach((item, i)=> {
//     item.textContent = `${i + 1}. ${movieDB.movies[i]}`;
// });