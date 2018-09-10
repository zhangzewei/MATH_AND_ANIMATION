import React, { Component } from 'react';
import Wave from './wave';
import './style.scss';

export default class WaveAnimation extends Component {

  render() {
    return (
      <div className="wave-container">
        <Wave containerHeight={250} containerWidth={250} maxYoffset={0.3} />
        <Wave containerHeight={250} containerWidth={250} waveWidth={0.05} maxYoffset={0.5} offsetBetweenLines={1} />
        <Wave containerHeight={250} containerWidth={250} waveWidth={0.05} offsetBetweenLines={4} xSpeed={0.2} maxYoffset={0.7} />
        <Wave containerHeight={250} containerWidth={250} maxYoffset={1.2} />
      </div >
    )
  }
}
