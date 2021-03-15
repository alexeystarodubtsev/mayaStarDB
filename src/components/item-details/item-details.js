import React, {Component} from 'react';
import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Spiner from "../spiner";

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: null
      }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then ((peopleList) => {
                this.setState({peopleList});
            });
    }

    renderItem(arr) {
        return arr.map (({id, name}) => {
            return (
                <li className="list-group-item "
                    key = {id}
                    onClick = {() => this.props.onItemSelected(id)} >
                    {name}
                </li>
            );
        });
    }

    render() {
        const {peopleList} = this.state;
        if (!peopleList) {
            return <Spiner />
        }

        const items = this.renderItem(peopleList);

        return (
            <ul className="item-list list-group-flush  ">
                {items}
            </ul>
        );
    }
}