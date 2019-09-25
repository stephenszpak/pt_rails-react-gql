import React from 'react';
import { render } from 'react-dom';
import Provider from '../components/Provider';
import Tracker from '../components/Tracker';
import UserInfo from "../components/UserInfo";

render(
  <Provider>
    <Tracker />
    <UserInfo />
  </Provider>,
  document.querySelector('#root')
);
