import dispatcher from './Dispatcher';

export function changeSize(size) {
  dispatcher.dispatch({
    type: 'CHANGE_SIZE',
    size: size
  });
}
