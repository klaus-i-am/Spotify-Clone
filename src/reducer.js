export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null
};

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
      // Set User
    case 'SET_USER':
        return {
            ...state,
            user: action.user
        }
    // Set Token
    case 'SET_TOKEN':
        return {
            ...state,
            token: action.token
        }
    // Set Playlists
    case 'SET_PLAYLISTS':
        return {
            ...state,
            playlists: action.playlists,
        }
    // Set Discover Weekly
    case 'SET_DISCOVER_WEEKLY':
        return {
            ...state,
            discover_weekly: action.discover_weekly,
        }
    // Default
    default: 
        return state;
  }
}

export default reducer;