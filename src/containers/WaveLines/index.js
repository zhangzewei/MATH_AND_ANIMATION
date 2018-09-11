import React, { Component } from 'react';
import Line from './line';
import './style.scss';

export default class WaveLines extends Component {
  constructor() {
    super();
    this.canvas = null;
    this.canvasNode = null;
    this.canvasContainer = null;
  }

  componentDidMount() {
    this.init();
  }

  init = () => {
    const canvas = this.canvasNode;
    canvas.height = this.canvasContainer.offsetHeight || 500;
    canvas.width = this.canvasContainer.offsetWidth || 500;
    this.canvas = canvas;
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    const ctx = canvas.getContext('2d');
    const gradients = [
      ['#6e45e2', '#88d3ce'],
      ['#de6262', '#ffb88c'],
      ['#64b3f4', '#c2e59c'],
      ['#0fd850', '#f9f047'],
      ['#007adf', '#00ecbc'],
      ['#B6CEE8', '#F578DC'],
      ['#9be15d', '#00e3ae']
    ];
    const waves = [];
    for (let i = 0; i < 5; i++) {
      const [start, stop] = gradients[Math.floor(Math.random() * gradients.length)]
      waves.push(new Line(this.canvas, {
        start,
        stop,
        lineWidth: i,
        xSpeed: this.valueMapping(Math.random(), 0, 1, 0.05, 0.08),
        amplitude: this.valueMapping(Math.random(), 0, 1, 0.05, 0.08),
        offset: Math.random() * 100
      }))
    }
    this.run(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      waves.forEach(wave => {
        wave.draw(ctx)
      });
    });
  }

  valueMapping(x, inMin, inMax, outMin, outMax) {
    return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }

  run(callback) {
    requestAnimationFrame(() => {
      this.run(callback)
    });
    callback();
  }

  render() {
    return (
      <div ref={node => this.canvasContainer = node} className="wave-lines-container">
        <canvas ref={node => this.canvasNode = node}></canvas>
      </div>
    )
  }
}