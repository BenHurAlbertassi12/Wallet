import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoinPrice, fetchExpenses } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Lazer',
      description: '',
    };
  }

  async componentDidMount() {
    const { fetchOptions } = this.props;
    await fetchOptions();
  }

  manupularTroca = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  manipularClick = () => {
    const { fetchCurrance } = this.props;
    fetchCurrance(this.state);
    this.setState((antes) => ({
      id: antes.id + 1,
      value: '',
      currency: 'EUR',
      method: 'Cartão de débito',
      tag: 'Trabalho',
      description: '',
    }));
  };

  render() {
    const { value,
      description,
      currency,
      method,
      tag } = this.state;

    const { coinOptions } = this.props;
    return (
      <form>
        Valor:
        <input
          data-testid="value-input"
          type="number"
          onChange={ this.manupularTroca }
          name="value"
          value={ value }
          required
        />

        <select
          data-testid="currency-input"
          name="currency"
          id="currency"
          value={ currency }
        >
          {coinOptions.map((siglaMoeda) => (
            <option key={ siglaMoeda } value={ siglaMoeda }>
              {siglaMoeda}
            </option>
          ))}
        </select>

        Descrição:
        <input
          data-testid="description-input"
          type="text"
          onChange={ this.manupularTroca }
          name="description"
          value={ description }
          required
        />

        <select data-testid="method-input" name="method" value={ method }>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select data-testid="tag-input" name="tag" value={ tag }>
          <option name="select">Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>

        <button type="button" onClick={ this.manipularClick }>
          {' '}
          Adicionar despesas:
          {' '}
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrance: (store) => dispatch(fetchExpenses(store)),
  fetchOptions: () => dispatch(fetchCoinPrice()),
});

const mapStateToProps = (state) => ({
  fetchCurrance: state.wallet.expenses,
  coinOptions: state.wallet.currencies,
});

WalletForm.propTypes = {
  fetchCurrance: propTypes.func.isRequired,
  coinOptions: propTypes.arrayOf(propTypes.string).isRequired,
  fetchOptions: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

// Linhas 1 a 4 são feitas as importações necessarias para o funcionamento
// Linha 6 definição da classe WalletForm com constructor
// linha 8 definição do this.state

// linha 19 componentDidMount
// https://pt-br.reactjs.org/docs/react-component.html#componentdidmount

// linha 20 e 21 definindo fetchOptions como props e chamando de forma assincrona
// linha 24 função handleChange
// linha 25 variavel name e value recebendo o parametro target
// linha 26 setando o estado da variavel nome

// linha 29 função de handleClick
// linha 30 definindo fetchCurrance como props
// linha 31 coloca o state dentro da props fetchCurrance
// linha 32 setando o estado com o parametro antes, pois ele vai junto ao id na linha 33
// linha 33 a 38 os parametros são definidos

// linha 43 setando o estado do render
// linha 49 definindo coinOptions como props

// linha 51 form com inputs e select's
// linha 68 map com o coinOption para jogar nas opções a sigla da moeda (ex eur, usd, jpy)
// linha 85 e 90 as opções destas linhas estão definidas no teste
// linha 103 encerramento do form

// linha 108 WalletForm.propTypes como feito em outras aulas

// linha 113 pega a props do estado global e e usa o state

// linha 114 https://www.youtube.com/watch?v=gdNitBetNWc
// utilizei um pouco do video acima para tentar entender a logica,
// copiei parte do dispach do course na aula 4
// ela dispara uma ação para aquela props
