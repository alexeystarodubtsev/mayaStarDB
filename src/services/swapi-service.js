
export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        console.log(`${this._apiBase}${url}`);
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`no fetch ${url}` + `,recived ${res.status}`)
        }
        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`)
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`);
    }
    async getAllPlanets() {
        const res = await this.getResource(`/planets/`)
        return res.results;
    }

    getPlanet(id) {
        return this.getResource(`/planet/${id}/`);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`)
        return res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}/`);
    }
}
const swapi = new SwapiService();

swapi.getPerson(3).then((p) => {
    console.log(p.name);
});
