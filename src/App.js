import React from 'react';
import $ from 'jquery';
import Board from './Board';
import Store from './Store';
import * as Actions from './Actions';
require('./styles.scss');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: Store.getSize(),
      running: Store.isRunning(),
      speed: 200,
      generations: Store.getGenerations()
    };
  }

  componentWillMount() {
    Store.on('change-size', () => {
      this.setState({
        size: Store.getSize()
      });
    });
    Store.on('gen-up', () => {
      this.setState({
        generations: Store.getGenerations()
      });
    });
  }

  handleClick = (e) => {
    const size = $(e.target).text();
    Actions.changeSize(size);
  }

  handleClickStart = () => {
    Actions.start();
  }

  handleClickStop = () => {
    Actions.stop();
  }

  handleClickSpeed = (e) => {
    let speed;
    switch ($(e.target).text()) {
        case 'slow':
        speed = 500;
        break;
        case 'normal':
        speed = 200;
        break;
        case 'fast':
        speed = 100;
        break;
    }
    this.setState({
      speed: speed
    });
  }

  handleClickClear = () => {
    console.log('I clear the board');
    Actions.clearBoard();
  }

  render() {
    return (
      <div>
        <h2 className="generations">Generations: {this.state.generations}</h2>
        <Board size={this.state.size} running={this.state.running} speed={this.state.speed} />
        <div className="menu">
          <button onClick={this.handleClick}>small</button>
          <button onClick={this.handleClick}>medium</button>
          <button onClick={this.handleClick}>large</button>
          <button onClick={this.handleClickSpeed}>slow</button>
          <button onClick={this.handleClickSpeed}>normal</button>
          <button onClick={this.handleClickSpeed}>fast</button>
          <button onClick={this.handleClickStart}>Start</button>
          <button onClick={this.handleClickStop}>Stop</button>
          <button onClick={this.handleClickClear}>Clear</button>
        </div>
      </div>
    );
  }
}
