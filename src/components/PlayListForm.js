import React, { Component } from 'react';
import '../styles/App.css';

class PlayListForm extends Component {
  constructor(props){
      super(props);
      this.state={
        userName: "",
        songArtist: "",
        songTitle: "",
        songNotes: ""
      }
      this.handleNameChange=this.handleNameChange.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)
      // this.handleArtistChange=this.handleArtistChange.bind(this)
      // this.handleTitleChange=this.handleTitleChange.bind(this)
      // this.handleSongChange=this.handleSongChange.bind(this)

    }
  handleNameChange(event){
    let name= event.target.name
    this.setState({[name]: event.target.value})

  }
  handleSubmit(event){
    event .preventDefault();
    console.log(this.state);
  }

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.addToList}>
          <div className="form">
            <div className="form_label">
              <label>User Name:</label>
              <label>Artist/Band:</label>
              <label>Song Title</label>
              <label>Notes about Song:</label>
            </div>
            <div className="form_input">
              <input name="userName" type="text" placeholder="User" onChange={this.handleNameChange} />
              <input name="songArtist" type="text" placeholder="Artist/Band" onChange={this.handleNameChange} />
              <input name="songTitle" type="text" placeholder="Song" onChange={this.handleNameChange} />
              <textarea name="songNotes" rows="4" cols="50" placeholder="Note" onChange={this.handleNameChange} />
            </div>
          </div>
          <div className="form_submit">
            <input name="submit" type="submit" />
          </div>
        </form>
      </div>
  )}
}





export default PlayListForm;
