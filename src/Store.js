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
        console.log('recieved the start action');
        this.startLifeCycle();
        break;
      }
      case 'STOP': {
        console.log('recieved the stop action');
        this.endLifeCycle();
        break;
      }
    }
  }
}

const gameOfLifeStore = new Store;
dispatcher.register(gameOfLifeStore.handleActions.bind(gameOfLifeStore));

export default gameOfLifeStore;
