import React from 'react';
import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {characters: [], characterDispaly: []};
  }


  updateState = (childData) => {
    let characterDispaly = childData.map((character, index) => 
      <li key={index}>
        <span> {character.name} </span>
        <span> {character.species} </span>
        <span> {character.homePlanet} </span>
        <span> {character.forceSensitive.toString()} </span>
        <span> {character.notableQuote} </span>
        <span> {character._id} </span>        
      </li> );    

    this.setState({characters: childData, characterDispaly: characterDispaly});    
  }


  render() {    
    return (
        <div id="char-container">
          <Get updateState={this.updateState}/>
          <Post updateState={this.updateState}/>
          <Put updateState={this.updateState}/>
          <Delete updateState={this.updateState}/>

          <ul>
            <li key="0123" id="titlebar">
              <span> name </span>
              <span> species </span>
              <span> homePlanet </span>
              <span> forceSensitive </span>
              <span> notableQuote </span>
              <span> _id </span>        
            </li>
            {this.state.characterDispaly}
          </ul>
        </div>
    );
  }
}


export default App;