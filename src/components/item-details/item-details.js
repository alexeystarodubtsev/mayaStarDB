import React, {Component} from 'react';
import './item-details.css';
export default class ItemDetails extends Component {
    render() {
        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
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