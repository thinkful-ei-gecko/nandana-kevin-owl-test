import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatLog from './ChatLog';

describe('<ChatLog />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatLog chatEvents={[]} participants={[]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('chatlog renders as expected', () => {
    const tree = renderer.create(<ChatLog chatEvents={[]} participants={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});