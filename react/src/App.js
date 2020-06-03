import React from 'react';
import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';


class App extends React.Component {
  constructor(props) {
    super(props);     
    this.state = {
      characters: [], 
      characterDispaly: [],
      showHideGet: true,
      showHidePost: false,
      showHidePut: false,
      showHideDelete: false
    };
    this.updateState = this.updateState.bind(this);   
    this.hideComponent = this.hideComponent.bind(this);
  }


  updateState = (childData) => {
    let characterDispaly = childData.map((character, index) => 
      <li className='liGrid' key={index}>
        <span> {character.name} </span>
        <span> {character.species} </span>
        <span> {character.homePlanet} </span>
        <span> {character.forceSensitive.toString()} </span>
        <span> {character.notableQuote} </span>
        <span> {character._id} </span>        
      </li> );    

    this.setState({characters: childData, characterDispaly: characterDispaly});    
  }


  hideComponent(name) {    
    switch (name) {
      case "showHideGet" :
        this.setState({ 
          showHideGet: true,
          showHidePost: false,
          showHidePut: false,
          showHideDelete: false
        });
        break;
      case "showHidePost" :
        this.setState({ 
          showHideGet: false,
          showHidePost: true,
          showHidePut: false,
          showHideDelete: false
        });
        break;
      case "showHidePut" :
        this.setState({ 
          showHideGet: false,
          showHidePost: false,
          showHidePut: true,
          showHideDelete: false
        });
        break;
      case "showHideDelete" :
        this.setState({ 
          showHideGet: false,
          showHidePost: false,
          showHidePut: false,
          showHideDelete: true
        });
        break; 
      default:
        break;
    }
  }


  render() {     
    const { showHideGet, showHidePost, showHidePut, showHideDelete }   = this.state;

    return (
        <div id="char-container">
          <nav>
            <ul>
              <li className="liMenu" onClick={() => this.hideComponent("showHideGet")}>Get</li>
              <li className="liMenu" onClick={() => this.hideComponent("showHidePost")}>Post</li>
              <li className="liMenu" onClick={() => this.hideComponent("showHidePut")}>Put</li>
              <li className="liMenu" onClick={() => this.hideComponent("showHideDelete")}>Delete</li>
            </ul>
          </nav>

          {showHideGet && <Get updateState={this.updateState}/>}
          {showHidePost && <Post updateState={this.updateState}/>}
          {showHidePut && <Put updateState={this.updateState}/>}
          {showHideDelete && <Delete updateState={this.updateState}/>}

          <ul>
            <li className='liGrid' key="0123" id="titlebar">
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