import React, { Component } from 'react';



class PlayListItem extends Component{
  render(){
    return(
      <div>
         {this.props.songs.map((e) => {
          return(
            <div className="card" >
              <p className="card-text"><strong>User:{e.userName}</strong></p>
              <p className="card-text"><strong>Artist/Band:{e.songArtist}</strong></p>
              <p className="card-text"><strong>Title:{e.songTitle}</strong></p>
              <p className="card-text"><strong>Notes:{e.songNotes}</strong></p>
            </div>
          )
        })}

    </div>
    )
  }
}

export default PlayListItem;
