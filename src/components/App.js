import React, { Component } from 'react';
import NavBar from './NavBar'
import PlayListForm from './PlayListForm'
import PlayList from './PlayList'
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="Content_box">
          <PlayListForm />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
