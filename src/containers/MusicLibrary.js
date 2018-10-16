import React, { Component } from 'react';
import MusicList from '../components/MusicList.js';

class MusicLibrary extends Component {

  constructor(props){
    super(props)
    this.state = {
      songs: []
    }
  }

  render(){
    return (
      <div className="music-library">
        <h2>Top 20</h2>
        <MusicList />
      </div>
    )
  }

}

export default MusicLibrary;
