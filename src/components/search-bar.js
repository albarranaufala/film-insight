class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set submitEvent(event) {
        this._submitEvent = event;
        this.render();
    }
   
    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
       this.innerHTML = `
       <div id="search">
            <h1>Cari film kesukaan kamu</h1>
            <form id="searchForm">
                <input id="searchElement" type="text" placeholder="Avengers"><button type="submit">Cari</button>
            </form>
        </div>
       `;

       this.querySelector("#searchForm").addEventListener("submit", (e) => {
           e.preventDefault();
           this._submitEvent();
       });
    }
}

customElements.define("search-bar", SearchBar);