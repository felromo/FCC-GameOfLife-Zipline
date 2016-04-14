import {EventEmitter} from 'events';

class Store extends EventEmitter {
  constructor() {
    super();
    this.size = 'medium';
  }

  getSize() {
    return this.size;
  }
}

const gameOfLifeStore = new Store;

export default gameOfLifeStore;
