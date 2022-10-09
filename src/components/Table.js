import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletaDespesa } from '../redux/actions';

class Table extends Component {
  // retirado da lecture/7.4/mentoria

  removeDespesa = (expenseId) => {
    const { deletaDespesa: actionDelete } = this.props;
    actionDelete(expenseId);
  };

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
              .map((expense) => (
                <tr key={ expense.id }>
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
                  {/* <td>Trabalho</td>
                  <td>Cartão de crédito</td>
                  <td>Cartão de débito</td>
                  <td>Lazer</td> */}
                  <td>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => this.removeDespesa(expense.id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  deletaDespesa: (expenseId) => dispatch(deletaDespesa(expenseId)),
});

Table.propTypes = {
  tabelaDeDespesas: PropTypes.arrayOf.isRequired,
  deletaDespesa: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tabelaDeDespesas: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

// linha 26 map comum como os feitos nos projetos anteriores
// linha 35 e 40 parsefloat para "arredondar" os resultados
// toFixed é para fixar em duas casas decimais
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
