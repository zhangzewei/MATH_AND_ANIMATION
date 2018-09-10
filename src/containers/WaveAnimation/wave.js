import React, { Component } from 'react';
import './style.scss';

export default class Wave extends Component {
  constructor(props) {
    super(props);
    this.canvasNode = null;

    this.maxYoffset = this.checkOutYoffset(props.maxYoffset);
    this.fillStyle = props.fillStyle || 'rgba(120,10,100,.5)';
    this.waveWidth = props.waveWidth || 0.01;
    this.waveHeight = props.waveHeight || 10;
    this.xSpeed = props.xSpeed || 0.05;
    this.containerHeight = props.containerHeight || 500;
    this.containerWidth = props.containerWidth || 500;
    this.offsetBetweenLines = props.offsetBetweenLines || 2;
  }

  componentDidMount = () => {
    this.initSin();
  }

  checkOutYoffset(offset) {
    if (offset >= 1) {
      return 0.99;
    } else {
      return offset
    }
  }

  initSin() {
    const canvas = this.canvasNode;
    canvas.height = this.containerHeight;
    canvas.width = this.containerWidth;
    this.canvas = canvas;
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    const ctx = canvas.getContext('2d');
    // draw first
    this.drawSin(ctx);
    // set first x offset and y offset
    this.xOffset = 0;
    this.yOffset = 0;
    // draw loop 
    requestAnimationFrame(this.draw);
  }

  drawSin(ctx, xOffset = 0, yOffset = 0) {
    const points = [];
    const canvasWidth = this.canvasWidth;
    const canvasHeight = this.canvasHeight;
    const startX = 0;
    const waveWidth = this.waveWidth; // smaller and width become bigger
    const waveHeight = this.waveHeight;

    ctx.beginPath();

    for (let x = startX; x < startX + canvasWidth; x += 20 / canvasWidth) {
      // y = A sin(Bx + C) + D
      const y = waveHeight * Math.sin((startX + x) * waveWidth + xOffset) + (1 - yOffset) * canvasHeight;
      points.push([x, y]);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(canvasWidth, canvasHeight);
    ctx.lineTo(startX, canvasHeight);
    ctx.lineTo(points[0][0], points[0][1]);
    ctx.strokeStyle = 'transparent';
    ctx.stroke();
    ctx.fillStyle = this.fillStyle;
    ctx.fill();
  }

  draw = () => {
    const canvas = this.canvas;
    const ctx = canvas.getContext('2d');
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // re-drawSin
    if (!this.isDrawCircle) {
      this.drawCircle(ctx);
    }
    if (this.yOffset < this.maxYoffset) {
      this.yOffset += 0.01;
    }
    this.drawSin(ctx, this.xOffset, this.yOffset);
    if (this.props.offsetBetweenLines) {
      this.drawSin(ctx, this.xOffset + this.offsetBetweenLines, this.yOffset);
    }
    this.xOffset += this.xSpeed;
    requestAnimationFrame(this.draw);
  }

  drawCircle(ctx) {
    const r = this.canvasWidth / 2;
    const lineWidth = 3;
    const cR = r - (lineWidth);
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(r, r, cR, 0, 2 * Math.PI);
    ctx.strokeStyle = this.fillStyle;
    ctx.stroke();
    ctx.clip();
    this.isDrawCircle = true;
  }

  render() {
    return (
      <canvas ref={node => this.canvasNode = node}></canvas>
    )
  }
}
