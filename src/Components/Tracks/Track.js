import React from 'react';


function Track(props) {
  return (
    <div>
      <ul>
       <li>trackImg={props.tracklistObject.trackImage}</li>       
       <li>title={props.tracklistObject.trackTitle}</li>
       <li>title={props.tracklistObject.trackArtist}</li>
       <li><button>Add to playlist</button></li>
      </ul>
     </div>
  );
}

export default Track;