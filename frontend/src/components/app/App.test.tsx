import React from 'react';
import { Provider } from 'react-redux';
import { render, getByDisplayValue } from '@testing-library/react';

import App from './App';
import store from '../../store';

test('renders project component which has text', (): any => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const createProjectElement = getByText('Create a new project');
  expect(createProjectElement).toBeVisible();
});
