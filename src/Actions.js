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

export function cellActivate(cellCoordinates) {
  dispatcher.dispatch({
    type: 'CELL_ACTIVATE',
    data: cellCoordinates
  });
}

export function genUp() {
  dispatcher.dispatch({
    type: 'GEN_UP'
  });
}

export function clearBoard() {
  dispatcher.dispatch({
    type: 'CLEAR'
  });
}
