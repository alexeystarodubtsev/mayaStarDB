import React from 'react';


import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemDetails from '../item-details';
import PersonDetails from '../person-details';

import './app.css';


const App = () => {
    return (
    <div>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
            <div className="col-mb-6">
                <ItemDetails />
            </div>
            <div className="col-md-6" >
                <PersonDetails />
            </div>
        </div>
    </div>
    );
};

export default App;