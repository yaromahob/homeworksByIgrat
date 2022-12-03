const initState: TThemeState = {
  themeId: 1,
};

export const themeReducer = (state: TThemeState = initState, action: TChangeThemeId): TThemeState => { // fix any
  switch (action.type) {
    case "SET_THEME_ID": {
      return {
        ...state,
        themeId: action.id
      };
    }
    // дописать
    
    default:
      return state;
  }
};


export const changeThemeId = (id: number): TChangeThemeId => ({type: 'SET_THEME_ID', id}); // fix any


type TChangeThemeId = {
  type: 'SET_THEME_ID'
  id: number
}

type TThemeState = {
  themeId: number
}