import './film-item.js';

class FilmList extends HTMLElement {
    set films(films) {
        this._films = films;
        this.render();
    }

    renderLoading() {
        this.innerHTML = `
            <img id="loading" src="https://i.pinimg.com/originals/78/e8/26/78e826ca1b9351214dfdd5e47f7e2024.gif"></img>
        `
    }
  
    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `${message}`;
    }

    render() {
        this.innerHTML = "";
        this._films.forEach(film => {
            const filmItemElement = document.createElement("film-item");
            filmItemElement.film = film;
            this.appendChild(filmItemElement);
        });
    }

}

customElements.define("film-list", FilmList);