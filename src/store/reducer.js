const initialState = {
  allThreads: [],
  thread: {},
  isAThreadSelected: false,
  isDrawerOpen: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SELECTED_THREAD":
      return {
        ...state,
        isAThreadSelected: true,
        thread: action.payload
      };
    case "ADD_MESSAGE_TO_THREAD":
      return {
        ...state,
        thread: action.payload
      };
    case "OPEN_DRAWER":
      return {
        ...state,
        isDrawerOpen: true
      };
    case "CLOSE_DRAWER":
      return {
        ...state,
        isDrawerOpen: false
      };
    case "GET_THREADS":
      return {
        ...state,
        allThreads: action.payload
      };
    case "ADD_THREAD":
      return {
        ...state,
        allThreads: action.payload
      };
    case "CHANGE_THREAD":
      return {
        ...state,
        allThreads: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
