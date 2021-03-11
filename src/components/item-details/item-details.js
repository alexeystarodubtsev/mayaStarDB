import React, {Component} from 'react';
import './item-details.css';
export default class ItemDetails extends Component {
    render() {
        return ( //list-group list-group-flush
            <ul className="item-list list-group-flush  ">
                <li className="list-group-item ">
                    Luke Skywallker
                </li>
                <li className="list-group-item">
                    Darth Vader
                </li>
                <li className="list-group-item">
                    R2-D2
                </li>
            </ul>
        );
    }
}