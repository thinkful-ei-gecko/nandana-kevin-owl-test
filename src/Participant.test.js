import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './Participant';

describe('<Participant />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant 
      key=''
      name=''
      avatar=''
      inSession={true}
      onStage={true}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});