import React from 'react';

class Put extends React.Component {
    constructor(props) {
        super(props);
        this.putSubmit = this.putSubmit.bind(this);
    }


    putSubmit(e) {
        e.preventDefault();
        let _id = document.getElementById('putId').value;
        let name = document.getElementById('putName').value;
        let species = document.getElementById('putSpecies').value;
        let forceSensitive = document.getElementById('putForceSensitive').value;
        let homePlanet = document.getElementById('putHomePlanet').value;
        let notableQuote = document.getElementById('putNotableQuote').value;
        
        let newCharacter = {
            name : name,
            species : species,
            forceSensitive: (forceSensitive === 'true'),
            homePlanet : homePlanet,
            notableQuote : notableQuote
        }

        fetch('/api/characters/' + _id, {
            method: "PUT",
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
            <form id="putForm" onSubmit={this.putSubmit}>
                <label>_id</label>
                <input type="text" id="putId" />
                <label>Name</label>
                <input type="text" id="putName" />
                <label>Species</label>
                <input type="text" id="putSpecies" />
                <label>Force Sensitive?</label>
                <select id="putForceSensitive" name="forceSensitive">
                    <option value='true'>True</option>
                    <option value='flase'>False</option>
                </select>
                <label>Home Planet</label>
                <input type="text" id="putHomePlanet" />
                <label>Notable Quote</label>
                <input type="text" id="putNotableQuote" />
                <input type="submit" id="putSubmit" value="Update character" />
            </form>            
        )
    }
}

export default Put;