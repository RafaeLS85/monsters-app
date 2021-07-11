import React , {Component} from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor(){
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }

    //si la funcion handlechange no estaria definida comouna arrow function deberiamos hacer el bind:
    //this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json() )
      .then( users => this.setState({ monsters: users }) )
  }


  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render(){

    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(m => m.name.toLowerCase().includes(searchField.toLocaleLowerCase()))


    return(
      <div className="App">
        <h1>Monsters App</h1>
        <SearchBox 
          placeholder='Search Monsters'
          handleChange={ this.handleChange }
        />    
        <CardList monsters={filteredMonsters} />  
    </div>      
    )
  }
}

export default App;
