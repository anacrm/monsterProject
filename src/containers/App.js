import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',
      loaded: false,
      originalRobots:[]
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => { return response.json() })
      .then(users => { this.setState({ robots: users, loaded:true, originalRobots:users }) })
  }

  textoMudou = (texto) => {
    this.setState({ searchField: texto })

    const filterRobots = this.state.originalRobots.filter((robot) => {
      const robotName = robot.name.toLowerCase()
      const searchValue = texto.toLowerCase()
      return robotName.includes(searchValue)
    }
    )
    this.setState({ robots: filterRobots })
  }

  render() {
console.log(this.state.robots)
    if (!this.state.loaded) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1>HoboFriends</h1>
          <SearchBox textoMudou={this.textoMudou} ></SearchBox>
          <Scroll>
            <CardList robots={this.state.robots}></CardList>
          </Scroll>
        </div>
      )
    }
  }
}

export default App
