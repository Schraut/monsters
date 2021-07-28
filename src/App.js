import React, { useState, useEffect } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { Loading } from './components/loading/loading.component';
import { SearchBox } from './components/search-box/search-box.component';

function App() {
  const [monsters, setMonsters] = useState([]); // state for storing the images
  const [searchField, setSearchField] = useState(''); // state to save input from search field

  //API to get some random users names to add to monsters array
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredMonsters = monsters.filter((monster) => {
    console.log('filtered monsters');
    return monster.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (monsters.length === 0) {
    return <Loading />;
  } else {
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox
          placeholder="Search Monsters"
          searchChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
