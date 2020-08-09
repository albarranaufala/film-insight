class FilmItem extends HTMLElement {
    set film(film) {
        this._film = film;
        this.render();
    }
  
    render() {
       this.innerHTML = `
       <div class="film-item">
            <img src="${this._film.poster_path ? `http://image.tmdb.org/t/p/w500/${this._film.poster_path}` : "https://secureservercdn.net/50.62.198.70/157.58a.myftpupload.com/wp-content/uploads/2017/01/empty-featured2-1.png"}" alt="${this._film.title}">
            <div class="film-info">
                <h4>${this._film.title}</h4>
            </div>
        </div>
       `;
    }
}

customElements.define("film-item", FilmItem);