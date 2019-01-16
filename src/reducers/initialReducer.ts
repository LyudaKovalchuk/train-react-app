const initialState = {
  counter: 0
}
export const initialReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter+1
      };
    case 'DECREMENT':
      return {
        ...state,
      counter: state.counter-1
    };
    default :
      return state;
  }
}

