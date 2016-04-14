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

  populateBoardWithCells(row, col) {
    // across
    const across = col;
    // down
    const down = row;
    // will be a two dimension array
    let board = [];
    for (let x = 0; x < across; x++) {
      board.push([]);
      for (let y = 0; y < down; y++) {
        board[x].push(<Cell />);
      }
    }
    return board;
  }

  render() {
    const board = this.populateBoardWithCells(50, 70);
    return (
      <div className="board board-md">
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
