import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setUserMail } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  manipularTroca = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  clickSubmit = () => {
    const { history, setUserMail: actionUserMail } = this.props;
    actionUserMail(this.state);
    history.push('/carteira');
  };

  validacaoForm = () => {
    const { email, password } = this.state;

    const MIN_LENGTH = 6;
    const OUTRA_INFO = password.length >= MIN_LENGTH;

    return !(OUTRA_INFO && email.includes('@') && email.endsWith('.com'));
  };

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="E-Mail"
            onChange={ this.manipularTroca }
            value={ email }
            required
          />
        </label>

        <label htmlFor="password">
          <input
            data-testid="password-input"
            type="password"
            name="password"
            placeholder="Senha"
            onChange={ this.manipularTroca }
            value={ password }
            required
          />
        </label>

        <button
          type="button"
          onChange={ this.manipularTroca }
          onClick={ this.clickSubmit }
          disabled={ this.validacaoForm() }
        >
          ENTRAR
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserMail: (userMail) => dispatch(setUserMail(userMail)),
});

Login.propTypes = {
  setUserMail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

// linha 16 handleChange
// linha 17 variavel name e value recebendo o parametro target
// linha 18 setando o estado da variavel nome

// linha 21 handleClick
// linha 22 definição do this.props
// linha 23 definindo actionUserMail como state
// linha 24 enviando a prop history para carteira

// linha 27 validação do fomulario

// linha 37 state do render

// linha 39 formulario

// linha 77 ainda estou com dificuldade de entender, mas fiz com base na aula 7.4 redux-thunk

// lihna 81 Login.propTypes o basico
