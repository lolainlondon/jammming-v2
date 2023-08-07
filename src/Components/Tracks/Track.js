import React from 'react';


function Track(props) {
  
  return (
    <div>
      <ul>
       <li>{props.tracklistObject.trackImage}</li>       
        <li>{props.tracklistObject.trackTitle}</li>
        <li>{props.tracklistObject.trackAlbum}</li>
       <li>{props.tracklistObject.trackArtist}</li>
       <li><button>Add to playlist</button></li>
      </ul>
     </div>
  );
}

export default Track;