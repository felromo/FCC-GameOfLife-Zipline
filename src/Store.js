import {EventEmitter} from 'events';

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
}

const gameOfLifeStore = new Store;

export default gameOfLifeStore;
