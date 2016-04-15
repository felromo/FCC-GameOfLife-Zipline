import React from 'react';
import Cell from './Cell';
import Store from './Store';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.size
    };
    this.lifeCyclePID = null;
    this.board = this.populateBoardWithCells(this.props.size);
  }

  componentWillMount() {
    // store listeners
    Store.on('start', () => {
      this.startLifeCycle(this.props.speed);
    });
    Store.on('end', () => {
      this.endLifeCycle();
    });
    Store.on('cell-activate', () => {
      this.cellActivate();
    });
  }

  componentDidMount() {
    this.startLifeCycle(this.props.speed);
  }

  componentWillReceiveProps(nextProps) {
    // check if cycle is running
    if (this.lifeCyclePID != null) {
      this.endLifeCycle();
      this.startLifeCycle(nextProps.speed);
    }
    // only repopulate board if needed
    if (this.props.size !== nextProps.size) {
      this.board = this.populateBoardWithCells(nextProps.size);
    }
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
        board[x].push({
          cell: <Cell id={ x+ ',' +y } />,
          state: 'dead'
        });
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

  cellActivate() {
    const coords = Store.getActiveCellCoordinates().split(',').map(Number);
    this.board[coords[0]][coords[1]].state = 'alive';
    /* console.log(this.board); */
    console.log(coords);
  }

  checkForLife = () => {
    console.log('I am checking for life');
    console.log(this.checkAlive([1,1]));
  }

  checkAlive(origin) {
    // this function takes the coordinates in array form of a cell and treats it as the origin, and checks the surrounding 8 blocks for life and returns the total ammount of life
    let totalAlive = 0;
    // destructur origin for easier usage
    const [x, y] = origin;
    // now the tests [BUG] - cells at the edge break the tests
    if (this.board[x-1][y-1].state == 'alive') // top left cell
      totalAlive++;
    if (this.board[x][y-1].state == 'alive') // top middle cell
      totalAlive++;
    if (this.board[x+1][y-1].state == 'alive') // top right cell
      totalAlive++;
    if (this.board[x-1][y].state == 'alive') // middle left cell
      totalAlive++;
    if (this.board[x+1][y].state == 'alive') // middle right cell
      totalAlive++;
    if (this.board[x-1][y+1].state == 'alive') // bottom left cell
      totalAlive++;
    if (this.board[x][y+1].state == 'alive') // bottom middle cell
      totalAlive++;
    if (this.board[x+1][y+1].state == 'alive') // bottom right cell
      totalAlive++;
    return totalAlive;
  }

  startLifeCycle = (speed) => {
    let counter = 0;
    // prevents previous PID's from being overwritten if user spam clicks 'start'
    if (this.lifeCyclePID === null) {
      this.lifeCyclePID = setInterval(() => {
        console.log('running at speed: ', speed);
        this.checkForLife();
      }, speed);
    }
  }

  endLifeCycle = () => {
    clearInterval(this.lifeCyclePID);
    // clear the PID after usage
    this.lifeCyclePID = null;
  }

  render() {
    console.log(this.board);
    return (
      <div className={'board board-' + this.props.size}>
        {
          this.board.map((value) => {
            return value.map((value) => {
              return value.cell;
            });
          })
        }
      </div>
    );
  }
}

Board.defaultProps = {
  size: 'medium',
  speed: 1000
};
