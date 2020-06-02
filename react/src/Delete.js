import React from 'react';

class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.deleteSubmit = this.deleteSubmit.bind(this);
    }


    deleteSubmit(e) {
        e.preventDefault();
        let _id = document.getElementById('deleteId').value;    
    
        fetch('/api/characters/' + _id, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
      }
        })
            .then(data => data.json())            
            .then(json => {                           
                this.props.updateState([json]);
            })
            .catch(error => this.props.updateState([]));
      }
      

    render() {
        return (            
            <form id="delete" className='tabContent' onSubmit={this.deleteSubmit}>
                <label>Enter character ID to be deleted</label>
                <input type="text" id="deleteId" />
                <input type="submit" value="Delete character" />
            </form>            
        )
    }
}

export default Delete;