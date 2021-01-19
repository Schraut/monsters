import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD

import { CardList } from './components/card-list/card-list.component';
import { Loading } from './components/loading/loading.component';
=======
import { render } from '@testing-library/react';

import { CardList } from './components/card-list/card-list.component';
>>>>>>> 22c813d7930926309b1f2fab620527b5ce6bf773

import { SearchBox } from './components/search-box/search-box.component';

//Use a class because it has more functionality
//It also has access to state

class App extends Component {
  //constructor gets called first
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  //API to get some random users names to add to monsters array
  //Lifecycle method and also a promise.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {

    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

      if (this.state.monsters.length === 0) {
        return <Loading />
      } else {
        return (
          <div className="App">
            <h1>Monsters</h1>
            <SearchBox 
              placeholder='Search Monsters' 
              handleChange={this.handleChange}
            />
            <CardList monsters={ filteredMonsters } />
          </div>
        );
      }
    
  }
}

export default App;
