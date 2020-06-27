'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        bg = document.querySelector('.promo__bg'),
        genre = bg.querySelector('.promo__genre'),
        promoList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[data-checkbox]');


    addForm.addEventListener('submit', e => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 22)}...`;
            }
            
            movieDB.movies.push(newFilm.toLowerCase());

            createMovieList(movieDB.movies, promoList);

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

        }

        e.target.reset();
    });

    const changeCase = (arr) => {
        arr.forEach((item, i) => {
            arr[i] = item.toLocaleLowerCase();
        });
    };

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChangesPage = () => {
        genre.textContent = 'ДРАМА';

        bg.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = arr => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">
                    ${i + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {

            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);
    
                createMovieList(films, parent);
            });
        });
    }

    changeCase(movieDB.movies);
    deleteAdv(adv);
    makeChangesPage();
    createMovieList(movieDB.movies, promoList);
});