const initialState = {
  value: 0,
  user: {
    _id: "",
    userName: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: "",
  },
};

function addReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREASE":
      return { ...state, value: state.value - 1 };
    case "UPDATEUSER":
      console.log("redux state", state);
      console.log("action.payload", action.payload);
      const newData = { ...state, user: action.payload };
      return newData;
    default:
      return state;
  }
}

export default addReducer;
