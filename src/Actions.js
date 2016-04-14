import dispatcher from './Dispatcher';

export function changeSize(size) {
  dispatcher.dispatch({
    type: 'CHANGE_SIZE',
    size: size
  });
}

export function start() {
  dispatcher.dispatch({
    type: 'START'
  });
}

export function stop() {
  dispatcher.dispatch({
    type: 'STOP'
  });
}
