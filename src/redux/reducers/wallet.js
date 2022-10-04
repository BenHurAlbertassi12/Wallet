const estadoInicial = {
  currencies: [],
  editor: false,
  expenses: [],
  idToEdit: 0,
};

function wallet(state = estadoInicial, action) {
  switch (action.type) {
  case 'ADD_DESPESA':
    return {
      ...state,
      expenses: [
        ...state.expenses, action.walletData,
      ],
    };
  case 'PRECO_MOEDA':
    return {
      ...state,
      currencies: action.currencies,
    };

  default:
    return state;
  }
}

export default wallet;

// linha 1 definindo os estados iniciais
