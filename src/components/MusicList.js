import React from 'react';
import MusicItem from './MusicItem.js';

const MusicList = (props) => {
  if (!props.songs){
    return <p>Loading...</p>
  }

  const songs = props.songs.map((song, index) => {
    return (
      <MusicItem
        key={index}
        artist={song["im:artist"].label} song={song["im:name"].label}
        chartPosition={index + 1} >
      </MusicItem>
    )
  })


  return (
  <div className ="chart-list">
    {songs}
  </div>
)
}
export default MusicList;
