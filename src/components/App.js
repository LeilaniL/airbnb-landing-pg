import React, { Component } from 'react';
import logo from '../../src/logo.svg';
import './App.css';
import SearchBox from '../components/SearchBox';
import DisplaySearch from '../components/DisplaySearch';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchList: []
    };
    this.handleAddingNewSearchToList = this.handleAddingNewSearchToList.bind(this);
  }
  handleAddingNewSearchToList(newSearch) {
    let newSearchList = this.state.searchList.slice();
    newSearchList.push(newSearch);
    this.setState({searchList: newSearchList});
    console.log(newSearchList);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchBox onSubmission={this.handleAddingNewSearchToList}/>
        <DisplaySearch searchQueries={this.state.searchList} />
      </div>
    );
  }
}

export default App;
