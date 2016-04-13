import React from 'react';
import Cell from './Cell';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.size,
      speed: this.props.size
    };
  }

  render() {
    return (
      <div className="board">
        I am a board
        <p>My size is: {this.props.size}</p>
        <p>My speed is: {this.props.speed}</p>
      </div>
    );
  }
}

Board.defaultProps = {
  size: 'medium',
  speed: 'medium'
};
