const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23511418-9a5fcf3a7b36a31c6f256788e';

export default class FetchPictures{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.perPage = 12;
    }
    async fetchQuary() {
        let response = await fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&key=${API_KEY}`);
        let data = await response.json();
        let hits = await data.hits
        this.incrementPage();
        return hits;
    }
    
    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }
    get query() {
        return this.searchQuery
    }

    set query(newQuery) {
        this.searchQuery = newQuery
    }
}
