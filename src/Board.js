import React from 'react';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        I am a board
        <p>My size is: {this.props.size}</p>
        <p>My speed is: {this.props.speed}</p>
      </div>
    );
  }
}
