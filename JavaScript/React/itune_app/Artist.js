import React from 'react';

// stateless component.
const Artist = ({artist}) => 
  <li>
    {artist.artistName} - {artist.albumName}
  </li>

export default Artist;
