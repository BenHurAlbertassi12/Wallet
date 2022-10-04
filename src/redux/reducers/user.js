// Esse reducer será responsável por tratar as informações da pessoa usuária
const FIRST_STATE = {
  email: '',
};
const REDUCER_USUARIO = (state = FIRST_STATE, action) => {
  const { userMail } = action;

  switch (action.type) {
  case 'SET_MAIL_USUARIO':
    return {
      ...state,
      email: userMail.email,
    };
  default:
    return state;
  }
};
export default REDUCER_USUARIO;

// linha 11 puxa o sprad do state
// linha 12 seta o email
// quando a ação for disparada pelo usuario, ela vai pegar o estado global antigo
// e setar o estado email
