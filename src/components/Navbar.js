import React from 'react';
import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';

const Navbar = ({ song }) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header" style={{ display: 'inline-block' }}>
          <Link className="navbar-brand" style={{ padding: '22px 34px' }} to="/">Home</Link>
        </div>
        <div className="navbar-text navbar-right" style={{ paddingRight: '2em', float: 'right' }}>
          <ReactAudioPlayer src={song} autoPlay controls />
        </div>
      </div>
    </nav>

  )
}

export default Navbar;