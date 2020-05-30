import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    let char = document.getElementById('searchbar').value;    

    fetch('/api/characters/' + char)
        .then(data => data.json())
        .then(json => {            
            this.setState({
                characters: json
            });                        
        });
  }

  render() {
    let characters = this.state.characters;
    let characterDispaly = characters.map((character, index) => 
      <li key={index}>
        <span> {character.name} </span>
        <span> {character.species} </span>
        <span> {character.homePlanet} </span>
        <span> {character.forceSensitive.toString()} </span>
        <span> {character.notableQuote} </span>
        <span> {character._id} </span>        
      </li>
      
      );
    
    console.log(characters);    

    return (
        <div id="char-container">
            <form id="search" onSubmit={this.handleChange}>
                <label>Enter character ID, or leave blank for a full list</label>
                <input type="text" id="searchbar" />
                <input type="submit" value="Find character" />
            </form>
          <ul>
          <li key="0123" id="titlebar">
            <span> name </span>
            <span> species </span>
            <span> homePlanet </span>
            <span> forceSensitive </span>
            <span> notableQuote </span>
            <span> _id </span>        
          </li>
            {characterDispaly}
          </ul>
        </div>
    );
  }
}


export default App;