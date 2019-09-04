import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from './Stage';

describe('<Stage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders satge as expected',() => {
    const tree = renderer.create(<Stage participantsOnStage={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


