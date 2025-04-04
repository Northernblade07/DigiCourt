// loginReducer.js
const loginReducer = (state = { showLoginModal: false, loginType: null }, action) => {
    switch (action.type) {
      case 'SHOW_LOGIN_MODAL':
        return { ...state, showLoginModal: true };
      case 'HIDE_LOGIN_MODAL':
        return { ...state, showLoginModal: false };
      case 'SET_LOGIN_TYPE':
        return { ...state, loginType: action.payload };
      default:
        return state;
    }
  };
  
  export default loginReducer;