import '../components/film-list.js';
import '../components/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const filmListElement = document.querySelector("film-list");

    const onSearchSubmit = () => {
        renderLoading();
        DataSource.searchFilm(searchElement.value)
            .then(result => {
                renderResult(result);
            })
            .catch(message => {
                fallbackResult(message);
            })
    };

    const renderResult =  results => {
        filmListElement.films = results;
    };

    const renderLoading = () => {
        filmListElement.renderLoading();
    }

    const fallbackResult = message => {
        filmListElement.renderError(message);
    };

    searchElement.submitEvent = onSearchSubmit;
};

export default main;