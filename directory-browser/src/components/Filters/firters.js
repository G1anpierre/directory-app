import React from 'react';
import './filters.scss';



const Filters = props => {

    

    function OptionTitles(){

        const titles = props.titles;
        
        return titles.map(title => {
            return (
                <option key={title.key} value={title.key}> {title.display} </option>
            )
        })
    }

    function onUpdateName(event){
        props.handleNameChange(event);
    }

    function onUpdateTitle(event){
        props.handleTitleChange(event);
    }

    function onUpdateInter(event){
        props.handleInternChange(event);
    }

    function onClickReset(event){
        props.handleReset(event);
    }

    return (
        <React.Fragment>
            <h1>Hello from filters</h1>

            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="input2" >Name:</label>
                    <input 
                        type="text" 
                        name="currentName"
                        className="form-control" 
                        id="input2" 
                        placeholder="Name"
                        value={props.currentName}
                        onChange={onUpdateName}
                    />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Job Title</label>
                    </div>
                    <select 
                    className="custom-select" 
                    name="currentTitle"
                    id="inputGroupSelect01" 
                    value={props.currentValue} 
                    onChange={onUpdateTitle}>
                        {OptionTitles()}
                    </select>
                </div>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        name="isIntern"
                        type="checkbox" 
                        value="1" 
                        id="defaultCheck1" 
                        checked={props.intern}
                        onChange={onUpdateInter}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                        Intern
                    </label>
                </div>
                <div className="button-reset">
                    <button className="btn btn-primary" type="button" onClick={onClickReset}>Reset Button</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Filters;
