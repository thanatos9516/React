import React from 'react';
import ReactDOM from 'react-dom';
import List from './add';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Add />, div);
  ReactDOM.unmountComponentAtNode(div);
});
