import React, { Component } from 'react';
import logo from "../logo.svg"
import '../styles/App.css';
  class NavBar extends Component  {
    render(){
      return(
      <div className="NavBar">
        <img src={logo} alt="React logo" />
        <h3>Play What?</h3>
      </div>
    )}
  }


export default NavBar;
