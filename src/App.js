import React from 'react';
import Board from './Board';
import Store from './Store';
require('./styles.scss');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: Store.getSize()
    };
  }

  render() {
    return (
      <div>
        <Board size={this.state.size}/>
        <button>small</button>
        <button>medium</button>
        <button>large</button>
      </div>
    );
  }
}
