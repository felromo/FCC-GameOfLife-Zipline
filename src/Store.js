import {EventEmitter} from 'events';
import dispatcher from './Dispatcher';

class Store extends EventEmitter {
  constructor() {
    super();
    this.size = 'medium';
  }

  changeSize(size) {
    this.size = size;
    this.emit('change-size');
  }

  getSize() {
    return this.size;
  }

  handleActions(action) {
    switch(action.type) {
      case 'CHANGE_SIZE': {
        this.changeSize(action.size);
      }
    }
  }
}

const gameOfLifeStore = new Store;
dispatcher.register(gameOfLifeStore.handleActions.bind(gameOfLifeStore));

export default gameOfLifeStore;
