import React, { Component } from "react";

import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/card/search/search.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter((mon) =>
      mon.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <Search
          placeholder="search monsters"
          handleChange={this.handleChange}
        />

        <CardList monster={filterMonster} />
      </div>
    );
  }
}

export default App;
