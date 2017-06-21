export const loadArtistsSuccess = artists => {
  return { type: 'LOAD_ARTISTS_SUCCESS', artists };
}

export const playSongAction = song => {
  return { type: 'PLAY_SONG_ACTION', song };
}

export const loadArtists = () => {
  return dispatch => {
    return getTopArtists().then(artists => {
      dispatch(loadArtistsSuccess(artists));
    }).catch(error => {
      throw (error);
    });
  };
};

export const playSong = (song) => {
  return dispatch => {
    dispatch(playSongAction(song));
  };
};

// api
function getTopArtists() {
  return fetch('https://api-v2.hearthis.at/feed/?type=popular&page=1&count=5')
    .then(res => res.json())
    .catch(error => { throw (error) });
};