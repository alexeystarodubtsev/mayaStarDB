import React, {Component} from 'react';
import './random-planet.css';
import SwapiService from "../../services/swapi-service";
import Spiner from "../spiner";

export default class RandomPlanet extends Component {

    swapiServes = new SwapiService();

    state = {
        planet: {},
        loading:true
    };

    constructor() {
        super();
        this.updatePlanet();
    };

    onPlanetLoaded = (planet) => {
        debugger;
        this.setState({
            planet,
            loading:false
        });
    };

    updatePlanet() {
        const id =Math.floor(Math.random()*25 + 2);
        //const id = 12;
        this.swapiServes
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    };

    render() {
        const { planet, loading} = this.state;
        const spiner = loading ? <Spiner/> : null;
        const content = !loading ? <PlanetView planet={planet} /> : null;
        return(
            <div className="random-planet jumbotron rounded">
                {spiner}
                {content}
            </div>
        )
    }
}

const PlanetView = ( {planet} ) => {
    const { id, name, population,
        rotationPeriod, diameter } = planet;
    return(
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term"> Population </span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term"> Rotation Period </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term"> Diameter </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}