import React from 'react';
import $ from 'jquery';
import * as Actions from './Actions';

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cellState: this.props.cellState
    };
  }

  clickHandler = (e) => {
    const cellCoordinates = $(e.target).attr('id');
    Actions.cellActivate(cellCoordinates);
    $(e.target).addClass('alive');
    /* this.displayAlive(e.target); */
    /* this.setState({
       cellState: 'alive'
       }); */
    /* this.displayAlive(cellCoordinates); */
  }

  /* displayAlive (coords) {
     // coords should be a string x,y
     const formatedCoords = coords.split(',').join('\\,');
     $('#'+formatedCoords).addClass('alive');
     } */

  render() {
    return (
      <div className={'cell ' + this.state.cellState} id={this.props.id}onClick={this.clickHandler}></div>
    );
  }
}

Cell.defaultProps = {
  cellState: 'dead'
};
