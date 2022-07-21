import React from 'react'
import './App.css';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  async componentDidMount() {

    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await resp.json();

    this.setState({ monsters: users })
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters....'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>

        </CardList>
      </div>
    );
  }
}

export default App;
