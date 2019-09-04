import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('<List />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List participants={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('list renders as expected', () => {
    const tree = renderer.create(<List participants={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});