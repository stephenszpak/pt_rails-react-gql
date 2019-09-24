import React from 'react';
import { render } from 'react-dom';
import Provider from '../components/Provider';
import Tracker from '../components/Tracker';

render(
  <Provider>
    <Tracker />
  </Provider>,
  document.querySelector('#root')
);
