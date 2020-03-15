import React from 'react';
import './person.scss'

const Person = props => {

    const { key, person } = props;

    return (
        <React.Fragment>
            <li id={ key }>
                <h1>{ person.name }</h1>
                <span> { person.title_cat }</span>
                <p> { person.bio }</p>
            </li>
        </React.Fragment>
    )
}

export default Person;