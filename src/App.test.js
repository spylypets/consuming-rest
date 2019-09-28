import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

App.prototype.setState = jest.fn(function(updatedState) {
  this.state = Object.assign(this.state, updatedState);
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  test('snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
  test('onNewItem', () => {
    const component = new App();
    expect(component.state).toEqual({
        showDetails: false,
        editItem: false,
        selectedItem: null,
        newItem: null
      });
    component.onNewItem();
    expect(component.setState.mock.calls.length).toEqual(2);
    expect(component.state).toEqual({
      showDetails: false,
      editItem: false,
      selectedItem: null,
      newItem: true
    });
  });
  test('onEditItem', () => {
  });
  test('onCancelEdit', () => {
  });
  test('onCancel', () => {
  });
  test('onCreateItem', () => {
  });
  test('onUpdateItem', () => {
  });
  test('onDeleteItem', () => {
  });
