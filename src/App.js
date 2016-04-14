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
      running: Store.isRunning()
    };
  }

  componentWillMount() {
    Store.on('change-size', () => {
      this.setState({
        size: Store.getSize()
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

  render() {
    return (
      <div>
        <Board size={this.state.size} running={this.state.running}/>
        <button onClick={this.handleClick}>small</button>
        <button onClick={this.handleClick}>medium</button>
        <button onClick={this.handleClick}>large</button>
        <button onClick={this.handleClickStart}>Start</button>
        <button onClick={this.handleClickStop}>Stop</button>
      </div>
    );
  }
}
