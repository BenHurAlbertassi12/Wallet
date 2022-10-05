import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { tabelaDeDespesas,
    } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {tabelaDeDespesas
              .map((expense, index) => (
                <tr key={ index }>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>{parseFloat(expense.value).toFixed(2)}</td>
                  <td>{expense.exchangeRates[expense.currency].name}</td>
                  <td>
                    {parseFloat(expense.exchangeRates[expense.currency].ask)
                      .toFixed(2)}
                  </td>
                  <td>
                    {parseFloat(
                      expense.exchangeRates[expense.currency].ask * expense.value,
                    ).toFixed(2)}
                  </td>
                  <td>Real</td>
                  <td>Trabalho</td>
                  <td>Cartão de crédito</td>
                  <td>Cartão de débito</td>
                  <td>Lazer</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  tabelaDeDespesas: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  tabelaDeDespesas: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);

// linha 26 map comum como os feitos nos projetos anteriores
// linha 35 e 40 parsefloat para "arredondar" os resultados
// toFixed é para fixar em duas casas decimais
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
