import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import  App from '../App';
import Board from '../Board';

describe('App Component', () => {

  beforeEach(function() {
    this.compoment = TestUtils.renderIntoDocument(
      <App />
    );
    this.renderedDOM = () => React.findDOMNode(this.component);

  });

  it('checks text of App', function() {
    const app = TestUtils.renderIntoDocument(
      <App />
    );
    const appnode = ReactDOM.findDOMNode(app);
    expect(appnode.textContent).toEqual('Hello Stream!');
  });

  it('app has an element', function() {
    expect(this.renderedDOM().children.length).toEqual(1);

  })

});

describe('Board Component', () => {
  it('exists', () => {
    const board = TestUtils.renderIntoDocument(
      <Board />
    );
    const boardnode = ReactDOM.findDOMNode(board);
    expect(TestUtils.isDOMComponent(boardnode)).toBe(true);
  });
});
