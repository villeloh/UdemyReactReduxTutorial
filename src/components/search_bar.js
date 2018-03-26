import React, { Component } from 'react';

/*
Functional version:
const SearchBar = () => {

    return <input />;
  }
*/


class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' }
    }

    render() {
  
        return (
            <div>
                <input 
                  value = { this.state.term }
                  onChange = {event => this.setState( { term: event.target.value } )} 
                />
            </div>
        );
    }

    onInputChange(event) {

        this.setState( { term: event.target.value } );
        console.log(this.state.term);
    }
  
  } // end class

export default SearchBar;
