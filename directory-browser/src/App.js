import React from 'react';
import Filters from './components/Filters/firters';
import People from './components/People/people';


import Data from './ch03-data.js';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      people: Data.people
    };

    console.log(Data);
  }

  render() {
    return (

      <div>
        <h2>Company Directory</h2>
        <p>Learn more about each person at Leaf & Mortar in this company directory.</p>

        <Filters />

        <People people={this.state.people} />
      </div>
    )
  }
}

export default App;
