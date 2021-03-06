export default (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTION":
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (el) => el.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      state;
  }
};
