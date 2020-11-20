import React, {Component} from "react"

export default class PersonDetails extends Component {
    constructor () {
        super ();

        this.state = {

        }
    }

    render () {
        return <div className="person-detail">
            <h1 id="id">{this.props.currentPerson.id}/25</h1>
            <h1 id="name">
                {this.props.currentPerson.name.first} 
                {this.props.currentPerson.name.last}
            </h1>
            <br></br>
            <h2 id="from">From: {this.props.currentPerson.city}, {this.props.currentPerson.country}</h2>
            <h2 id="job-title">Title: {this.props.currentPerson.title}</h2>
            <h2 id="employer">Employer: {this.props.currentPerson.employer}</h2>
            
        </div>
    }
}