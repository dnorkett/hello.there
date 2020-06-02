import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.postSubmit = this.postSubmit.bind(this);
    }


    postSubmit(e) {
        e.preventDefault();
        let name = document.getElementById('postName').value;
        let species = document.getElementById('postSpecies').value;
        let forceSensitive = document.getElementById('postForceSensitive').value;
        let homePlanet = document.getElementById('postHomePlanet').value;
        let notableQuote = document.getElementById('postNotableQuote').value;
        
        let newCharacter = {
            name : name,
            species : species,
            forceSensitive: (forceSensitive === 'true'),
            homePlanet : homePlanet,
            notableQuote : notableQuote
        }

        fetch('/api/characters/', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newCharacter)
        })
            .then(data => data.json())
            .then(json => this.props.updateState([json]))
            .catch(error => console.log(error));
      }


    render() {
        return (            
            <form id="post" className='tabContent' onSubmit={this.postSubmit}>
                <label>Name</label>
                <input type="text" id="postName" />
                <label>Species</label>
                <input type="text" id="postSpecies" />
                <label>Force Sensitive?</label>
                <select id="postForceSensitive" name="forceSensitive">
                    <option value='true'>True</option>
                    <option value='flase'>False</option>
                </select>
                <label>Home Planet</label>
                <input type="text" id="postHomePlanet" />
                <label>Notable Quote</label>
                <input type="text" id="postNotableQuote" />
                <input type="submit" id="postSubmit" value="Submit new character" />
            </form>            
        )
    }
}

export default Post;