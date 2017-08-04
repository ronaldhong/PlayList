import React, { Component } from 'react';
import PlayListItem from "./PlayListItem"

class PlayList extends Component{
  constructor(prop){
    super(prop);
    this.state={
      songs: []
    }
  this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
          // console.log("state", this.state.songs);
        }).then(data =>{
          for (var i = 0; i < this.state.songs.length; i++) {
          // console.log("++++",this.state.songs[i]);
        }})
  }

  fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.fetchData}>
          <button type="submit" className="updatelist">Update List</button>
        </form>
        <div>
          <PlayListItem songs={this.state.songs}/>
        </div>
      </div>
    )
  }
}
export default PlayList;
