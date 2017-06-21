import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as artistsActions from '../actions/artists_actions';

class SongPage extends React.Component {
  state = {
    artists: [],
    song: ''
  }

  playSong = () => {
    this.props.actions.playSong(this.props.artist.stream_url);
  }

  render() {
    const { artist: song } = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-heading"><strong>{song.user.username} - {song.title}</strong></div>
        <ul className="list-group">
          <li className="list-group-item" style={{ position: 'relative', height: '13em' }}>
            <div style={{ float: 'left' }}>
              <img src={song.artwork_url} alt="" className="img-rounded" height="150" width="150" style={{ position: 'absolute' }} />
              <button style={{ 'fontSize': '2em', borderRadius: '50%', position: 'absolute', top: '3.5em', left: '3.8em' }} className="btn btn-warning glyphicon glyphicon-play-circle" onClick={this.playSong}>
              </button>
            </div>
            <div>
              <ul style={{ position: 'absolute', left: '12em', listStyleType: 'none' }}>
                <li>Genre: {song.genre}</li>
                <li>Year released: {song.release_date}</li>
                {song.downloadable ? <li>Download: <a href={song.download_url} download className="glyphicon glyphicon-circle-arrow-down" style={{ textDecoration: 'none' }}></a></li> : ''}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // Match the artist from the uri params with the top artists data to get all the data, 
  // otherwise use an object skeleton of the artist data
  let artist = { id: '', title: '', user: { username: '' } };
  const artistId = ownProps.match.params.id;
  const artists = state.artists;
  if (state.artists.artists.length > 0) {
    artist = Object.assign({}, state.artists.artists.find(artist => artist.id === artistId, 10))
  }
  return { artist, artists }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(artistsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SongPage);