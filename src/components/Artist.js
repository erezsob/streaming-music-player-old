import React from 'react';
import { Link } from 'react-router-dom';

const Artist = ({ artist }) => {
  return (
    <Link to={{ pathname: `/songs/${artist.id}` }} style={{ textDecoration: 'none' }}>
      <button type="button" className="list-group-item">
        <img src={artist.thumb} alt="" className="img-thumbnail" height="80" width="80" />
        <div style={{ display: 'inline-block' }}>
          <div style={{ fontSize: '1.5em', paddingLeft: '1em' }} >{artist.user.username}</div>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0, float: 'left', marginLeft: '22px' }}>
            <li style={{ fontSize: '11px' }}>Play Count: {artist.playback_count}</li>
          </ul>
        </div>
      </button>
    </Link>
  )
};

export default Artist;