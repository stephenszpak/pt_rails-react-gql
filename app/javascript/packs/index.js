import React from 'react';
import { render } from 'react-dom';
import Provider from '../components/Provider';
import Tracker from '../components/Tracker';
import UserInfo from '../components/UserInfo';
import Project from '../components/Project';
import AddProjectForm from '../components/AddProjectForm';

render(
  <Provider>
    <UserInfo />
    <AddProjectForm />
    <Project />
  </Provider>,
  document.querySelector('#root')
);
