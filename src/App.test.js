import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('<App />', () => {
  test('renders without exploding', async () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <App />,
      div
    );
  });

  test('shows the email actions', async () => {
    render(<App />)
    await screen.findByTestId('emails')
    const checkboxes = screen.getAllByTestId('checkbox');
    fireEvent.click(checkboxes.shift())
    expect(screen.getByTestId('mark-as-unread')).toBeVisible()
    expect(screen.getByTestId('mark-as-read')).toBeVisible()
    expect(screen.getByTestId('delete')).toBeVisible()
  })

  test('deletes everything', async () => {
    render(<App />)
    await screen.findByTestId('emails')
    const checkboxes = screen.getAllByTestId('checkbox');
    fireEvent.click(checkboxes[0])
    fireEvent.click(screen.getByTestId('delete'))
    expect(screen.getByTestId('no-emails')).toBeVisible()
  })
});
