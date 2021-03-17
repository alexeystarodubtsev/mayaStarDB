import React, {Component} from 'react';
import './person-details.css';
import SwapiService from "../../services/swapi-service";

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: {}
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.personId !== this.props.personId){
            this.updatePerson();
        }
    }

    onPersonLoading = (person) => {
        this.setState({
            person
        });
    };

    updatePerson() {
        const {personId} = this.props;
        if (!personId) {
            return;
        }
        console.log(`personID ${personId}`)
        const id = personId
        this.swapiService
            .getPerson(id)
             // this.setState({personId})
            .then((person) => {
                this.onPersonLoading({...person, id});
            });
    }

    render() {

        if(!this.state.person) {
            return <span> Select a person from a list</span>
        }

        const {id, name, gender, birthYear, eyeColor } = this.state.person;

        return (
            <div className="person-details card">
                <img className="person-image"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                     alt="character"/>

                    <div className="card-body">
                        <h4>{ name } {this.props.personId}</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Gender</span>
                                <span>{ gender }</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Birth Year</span>
                                <span>{ birthYear }</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Eye Color</span>
                                <span>{ eyeColor }</span>
                            </li>
                        </ul>
                    </div>
            </div>
        )
    }
}