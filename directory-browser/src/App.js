import React from 'react';
import Filters from './components/Filters/firters';
import People from './components/People/people';


import Data from './ch03-data.js';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      people: Data.people,
      titles: Data.titles,
      currentName: "",
      currentTitle: "",
      isIntern: false
    };

    console.log(Data);

    // IN case ES5 functions this.updateNameChange = this.updateFormState.bind(this);....
  }

  updateNameChange = (actualName) => {
    console.log(actualName.target.name)
    this.setState({
      [actualName.target.name]: actualName.target.value
    }, this.updatePeopleList )
  }
  

  updateTitleChange = (actualTitle) => {
    this.setState({
      [actualTitle.target.name]: actualTitle.target.value
    }, this.updatePeopleList)
  }

  updateInternChange = (actualIntern) => {
    this.setState({
      [actualIntern.target.name]: actualIntern.target.checked  
    }, this.updatePeopleList)
  }

  // Search employee list function

  updatePeopleList() {
    const filteredPeople = Data.people.filter( person => {
      return (
          person.intern === this.state.isIntern &&
          (this.state.currentName === ""  || 
            person.name.toLowerCase().indexOf(this.state.currentName.toLowerCase()) !== -1) && 
  
            (this.state.currentTitle === "" || person.title_cat === this.state.currentTitle)
          );
      }
    );
  
    this.setState({
    people: filteredPeople
    });
  }


  
  render() {
    return (

      <div>
        <h2>Company Directory</h2>
        <p>Learn more about each person at Leaf & Mortar in this company directory.</p>

        <Filters 
          titles={this.state.titles} 
          currentName={this.state.currentName} 
          currentTitle={this.state.currentTitle}
          intern={this.state.isIntern}

          handleNameChange={this.updateNameChange}
          handleTitleChange={this.updateTitleChange}
          handleInternChange={this.updateInternChange}
        />

        <People people={this.state.people} />
      </div>
    )
  }
}

export default App;
