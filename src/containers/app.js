import React, { Component } from "react";
import CardList from "../components/cardlist";
import Searchbox from "../components/searchbox";
import Scroll from '../components/scroll'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      Searchfield: "",
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users=> this.setState({robots: users}))
  }

  onSearchChange = (event) => {
    this.setState({ Searchfield: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.Searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
