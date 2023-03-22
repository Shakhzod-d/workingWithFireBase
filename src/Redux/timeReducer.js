const initialState = {
  timeSlots: [],
  counter: 0,
};

const addTimeSlots = (state, action) => {
  return {
    ...state,
    timeSlots: action.payload,
  };
};

export default function timeReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TIME_SLOTS":
      return addTimeSlots(state, action);
    case "UPDATE_TIME_SLOTS":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
