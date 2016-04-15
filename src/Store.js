import {EventEmitter} from 'events';
import dispatcher from './Dispatcher';

class Store extends EventEmitter {
  constructor() {
    super();
    this.size = 'medium';
    this.running = true;
  }

  changeSize(size) {
    this.size = size;
    this.emit('change-size');
  }

  startLifeCycle() {
    this.running = true;
    this.emit('start');
  }

  endLifeCycle() {
    this.running = false;
    this.emit('end');
  }

  getSize() {
    return this.size;
  }

  isRunning() {
    return this.running;
  }

  handleActions(action) {
    switch(action.type) {
      case 'CHANGE_SIZE': {
        this.changeSize(action.size);
        break;
      }
      case 'START': {
        this.startLifeCycle();
        break;
      }
      case 'STOP': {
        this.endLifeCycle();
        break;
      }
    }
  }
}

const gameOfLifeStore = new Store;
dispatcher.register(gameOfLifeStore.handleActions.bind(gameOfLifeStore));

export default gameOfLifeStore;
