const initialState = {
  items: [],
  currentItemId: null
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEMS':
      return {
        ...state, items: action.payload
      }
    default :
      return state
  }
};


