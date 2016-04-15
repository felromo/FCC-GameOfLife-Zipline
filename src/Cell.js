import React from 'react';
import $ from 'jquery';
import * as Actions from './Actions';

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler(e) {
    const cellCoordinates = $(e.target).attr('id');
    Actions.cellActivate(cellCoordinates);
  }

  render() {
    return (
      <div className="cell" id={this.props.id} onClick={this.clickHandler}></div>
    );
  }
}
