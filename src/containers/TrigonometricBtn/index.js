import React, { Component } from 'react';
import './style.scss';

export default class TrigonometricBtn extends Component {
  render() {
    return (
      <div className="demo-container">
        <div className="popping-menu">
          <input className="checkbox" id="checkbox" type="checkbox" />
          <button>hello1</button>
          <button>hello2</button>
          <button>hello3</button>
          <button>hello4</button>
          <button>hello5</button>
          <button>hello6</button>
          <label className="label" htmlFor="checkbox">Click Me</label>
        </div >
      </div >
    )
  }
}
