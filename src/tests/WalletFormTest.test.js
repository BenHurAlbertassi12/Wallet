import { screen } from '@testing-library/react';
import React from 'react';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Verificando o Header', () => {
  test('testa se tem um elemento exibe o e-mail da pessoa usuária. deve mostrar valor zerado', () => {
    renderWithRouterAndRedux(<Wallet />, {
      estadoInicial: { user: { email: 'alguem@google.com' } },
    });

    expect(screen.getByText('BRL')).toBeDefined();
    expect(screen.getByText('alguem@google.com')).toBeDefined();
    expect(screen.getByText('0.00')).toBeDefined();
  });
  test('testa se tem um formulário de despesas', async () => {
    renderWithRouterAndRedux(<Wallet />);

    screen.logTestingPlaygroundURL();
    expect(screen.getByTestId('currency-input')).toBeDefined();
    expect(screen.getByTestId('description-input')).toBeDefined();
    expect(screen.getByTestId('method-input')).toBeDefined();
    expect(screen.getByTestId('tag-input')).toBeDefined();
    expect(screen.getByTestId('value-input')).toBeDefined();
    expect(
      screen.getByRole('button', { name: /adicionar despesa/i }),
    ).toBeDefined();
    expect(await screen.findByText('USD')).toBeDefined();
  });
});
