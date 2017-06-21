import React from 'react';
import Artist from './Artist';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as artistsActions from '../actions/artists_actions';

class Artists extends React.Component {
  render() {
    const { artists } = this.props;
    return (
      <div className="container">
        <h2>
          Top Artists
          </h2>

        <hr />

        <div className="list-group">
          {artists.artists.map((artist, i) => (
            <Artist key={i} artist={artist} />
          ))}
        </div>
      </div>
    )
  };
};

const mapStateToProps = (state, ownProps) => ({
  artists: state.artists
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(artistsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);