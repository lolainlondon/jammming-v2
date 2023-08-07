import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/Search/SearchBar'
import TrackTiles from './Components/Tracks/trackTiles'
import PlaylistTiles from './Components/Playlist/PlaylistTiles'

function App(props) {
  return (
    <div className="App">
      <h1>Spotify playlist generator</h1>
        
        
         <div id="searchBar"><SearchBar /></div>
        
       
      
      
       <section id="lists"><div id="tracklist"><h2>Tracks</h2><TrackTiles /></div><div id="playlist"><h2>Playlist</h2><PlaylistTiles /></div></section>
      
    </div>
  );
}

export default App;
