import React, {Component} from "react";
// import PersonList from "./PersonList";
import PersonDetails from "./PersonDetails";
import people from "../data"; //../ is required because it's stored one file up

export default class PersonContainer extends Component {
    constructor() {
        super();

        this.state = {
            currentIndex: 0,
        }
    }

    previousPerson() {
        let index = this.state.currentIndex;
        if(index > 0) {
            this.setState ({currentIndex: index - 1})
        }
    }

    nextPerson() {
        let index = this.state.currentIndex;
        if(index < people.length - 1) {
            this.setState({currentIndex: index + 1})
        }
    }

    render() {
        return (
            <div className="person-container">
                <PersonDetails currentPerson={people[this.state.currentIndex]}/>
                <h3 onClick={() => this.previousPerson()} id="previous-person">{"<"} Previous</h3>
                <h3 onClick={() => this.nextPerson()} id="next-person">Next {">"}</h3>
            </div>
        )
    }
}