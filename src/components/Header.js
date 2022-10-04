import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;

    let sum = 0;
    expenses.forEach((element) => {
      const { currency } = element;
      sum += Number(element.value) * element.exchangeRates[currency].ask;
    });
    return (
      <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{sum.toFixed(2)}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

// função de soma de despesa
