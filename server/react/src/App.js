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
    console.log(char);
    console.log(e)
    
    

/*     fetch('/api/characters/' + char)
        .then(data => data.json())
        .then(json => {
            this.setState({
                characters: json
            });                        
        }); */
  }

  render() {
    let characters = this.state.characters;
    
     characters = characters.map((character, index) => {
      
        return (
            <li key={index}>
                <span className="name">{character.obj.name}</span>
                <span className="species">{character.obj.species}</span>
                <span className="home">{character.obj.homePlanet}</span>
                <span className="force">{character.obj.forceSensitive}</span>
                <span className="quote">{character.obj.notableQuote}</span>
            </li>            
        );
    }); 

    return (
        <div id="char-container">
            <form id="search" onSubmit={this.handleChange}>
                <label>Enter character name:</label>
                <input type="text" placeholder="character" id="searchbar" required />
                <input type="submit" value="Find character" />
            </form>
            <ul>{characters}</ul>
        </div>
    );
  }
}


export default App;