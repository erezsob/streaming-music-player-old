import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Artists from './Artists';
import Navbar from './Navbar';
import SongPage from './SongPage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as artistsActions from '../actions/artists_actions';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar song={this.props.song} />
          <div className="container-fluid">
            <Route exact path="/" render={() =>
              <Artists
                artists={this.props.artists} />
            } />
            <Route exact path="/songs/:id" component={SongPage} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let song = state.artists.song || '';
  let artists = state.artists.artists;
  return { artists, song }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(artistsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);