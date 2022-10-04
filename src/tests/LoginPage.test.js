import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('teste', () => {
  it('verifica se o login tem os inputs e botões', () => {
    renderWithRouterAndRedux(<App />);
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /entrar/i,
      }),
    ).toBeInTheDocument();
  });
  it('testa se o botão envia para /carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const buttonLogin = screen.getByRole('button', {
      name: /entrar/i,
    });
    const emailInput = screen.getByTestId('email-input');
    expect(buttonLogin).toBeDisabled();
    const passwordInput = screen.getByTestId('password-input');
    userEvent.type(emailInput, 'alguem@google.com');
    userEvent.type(passwordInput, '123456');
    expect(buttonLogin).not.toBeDisabled();
    userEvent.click(buttonLogin);
    expect(history.location.pathname).toBe('/carteira');
  });
});
