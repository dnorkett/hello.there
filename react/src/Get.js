import React from 'react';

class Get extends React.Component {
    constructor(props) {
        super(props);
        this.searchSubmit = this.searchSubmit.bind(this);
    }


    searchSubmit(e) {
        e.preventDefault();
        let _id = document.getElementById('searchbar').value;    
            
        fetch('/api/characters/' + _id)
            .then(data => data.json())            
            .then(json => {                           
                this.props.updateState(json);
            });
      }


    render() {
        return (            
            <form id="get" className='tabContent' onSubmit={this.searchSubmit}>
                <label>Enter character ID, or leave blank for a full list</label>
                <input type="text" id="searchbar" />
                <input type="submit" value="Find character" />
            </form>            
        )
    }
}

export default Get;