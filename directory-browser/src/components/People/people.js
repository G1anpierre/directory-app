import React from 'react';
import Person from '../Person/person'
import './people.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const People = props => {

    return (
        <React.Fragment>
            <h1>Hello from People</h1>

            <div className="results">
                <ul>
                <TransitionGroup>
                {props.people.map( person => {
                        return (
                            <CSSTransition key={person.key} timeout={500} classNames="fade" >
                                <Person  id={person.key} person={person}/>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
                </ul>

            </div>
        </React.Fragment>
    )
}


export default People;
