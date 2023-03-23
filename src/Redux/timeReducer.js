const initialState = {
  timeSlots: [],
  eventTime: "Thursday March 23",
  currentYear: 2023,
  meetingHour: "08:00",
};

const addTimeSlots = (state, action) => {
  return {
    ...state,
    timeSlots: action.payload,
  };
};

const updateEventTime = (state, action) => {
  return {
    ...state,
    eventTime: action.payload.eventTime,
    currentYear: action.payload.currentYear
  };
}

const updateMeetingHour = (state, action) => {
  return {
    ...state,
    meetingHour: action.payload, 
  };
}

export default function timeReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TIME_SLOTS":
      return addTimeSlots(state, action);
    case "UPDATE_EVENT_TIME":
      return updateEventTime(state, action);
    case "UPDATE_MEETING_HOUR":
      return updateMeetingHour(state, action);
    default:
      return state;
  }
}
