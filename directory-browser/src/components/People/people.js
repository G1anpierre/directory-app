import React from 'react';
import Person from '../Person/person'
import './people.scss';


const People = props => {

    return (
        <React.Fragment>
            <h1>Hello from People</h1>

            <div className="results">
                <ul>
                {props.people.map( person => {
                    console.log(person);
                    return <Person key={person.id} person={person}/>
                })
                }
                </ul>
            </div>
        </React.Fragment>
    )
}


export default People;
