import React from 'react';
import './filters.scss';


const Filters = props => {

    return (
        <React.Fragment>
            <h1>Hello from filters</h1>

            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="input2" >Name</label>
                    <input type="text" className="form-control" id="input2" placeholder="Text"/>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Filters;
