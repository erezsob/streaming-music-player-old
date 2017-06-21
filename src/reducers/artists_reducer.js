import initialState from './initial_state';

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_ARTISTS_SUCCESS':
      return Object.assign({}, state, {
        artists: action.artists
      });
    case 'PLAY_SONG_ACTION':
      return Object.assign({}, state, {
        song: action.song
      });
    default:
      return state;
  }
};

export default artistsReducer;
