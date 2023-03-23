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
    default:
      return state;
  }
}
