export function setUserMail(userMail) {
  return {
    type: 'SET_MAIL_USUARIO',
    userMail,
  };
}

export function setWalletData(walletData) {
  return {
    type: 'ADD_DESPESA',
    walletData,
  };
}

export const FETCH_PRECO_MOEDA = 'FETCH_PRECO_MOEDA';

export const PRECO_MOEDA = 'PRECO_MOEDA';

export const priceGoldenCoin = (currencies) => ({
  type: PRECO_MOEDA,
  currencies,
});

export const fetchCoinPrice = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((resposta) => resposta.json())
    .then((pegarMoeda) => Object.keys(pegarMoeda))
    .then((filtroMoedas) => filtroMoedas.filter((item) => item !== 'USDT'))
    .then((pegarMoedaCorrente) => dispatch(priceGoldenCoin(pegarMoedaCorrente)));
};

export function fetchExpenses(payload) {
  return async (dispatch) => {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await request.json();
    payload.exchangeRates = data;
    dispatch(setWalletData(payload));
  };
}

// para pegar a api como action, tem que fazer um fetch
