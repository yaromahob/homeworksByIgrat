type LoadingInitStateType = {
  isLoading: boolean
}

const initState: LoadingInitStateType = {
  isLoading: false,
};

export const loadingReducer = (state = initState, action: LoadingActionType): LoadingInitStateType => { // fix any
  switch (action.type) {
    case "CHANGE_LOADING": {
      console.log(action.isLoading);
      return {
        ...state,
        isLoading: action.isLoading
      };
    }
    
    default:
      return state;
  }
};

type LoadingActionType = {
  type: 'CHANGE_LOADING'
  isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
  type: 'CHANGE_LOADING',
  isLoading,
});
