import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import Header from './components/header';
import ItemDetails from './components/item-details';
import PersonDetails from './components/person-details';
import PlanetDetails from './components/planet-details';
import RandomPlanet from './components/random-planet';
import StarshipDetails from './components/starship-details';

export  default class Star extends React.Component {
    render() {
        return (
            <div>
                <App />
                <PlanetDetails />
            </div>
        );
    }
}

ReactDOM.render( <App />,
    document.getElementById('root'));

