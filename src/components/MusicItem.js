import React, { Component } from 'react';

const MusicItem = (props) => {
  return (
    <div className="song">
      <h2>{props.chartPosition} {props.artist} {props.song}</h2>
    </div>
  )
}

export default MusicItem;
