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

  populateBoardWithCells(size) {
    let row = 0;
    let col = 0;
    switch (size) {
      case 'small':
      row = 50;
      col = 30;
      break;
      case 'medium':
      row = 70;
      col = 50;
      break;
      case 'large':
      row = 100;
      col = 80;
      break;
    }
    // across
    const across = col;
    // down
    const down = row;
    // will be a two dimension array
    let board = [];
    for (let x = 0; x < across; x++) {
      board.push([]);
      for (let y = 0; y < down; y++) {
        board[x].push(<Cell id={ x+ ',' +y }/>);
      }
    }
    return board;
  }

  boardSize(size) {
    switch (size) {
      case 'small':
        return ;
        break;
      case 'medium':
        break;
      case 'large':
        break;
    }
  }

  render() {
    const board = this.populateBoardWithCells(this.props.size);
    return (
      <div className={"board board-" + this.props.size}>
        {
          board
        }
      </div>
    );
  }
}

Board.defaultProps = {
  size: 'medium',
  speed: 'medium'
};
