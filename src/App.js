import React from 'react';
import Board from './Board';
require('./styles.scss');

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Board size="small"/>
      </div>
    );
  }
}
