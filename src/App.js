import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/Search/SearchBar'
import { tracklist } from './Components/Tracks/Tracklist'
import Track from './Components/Tracks/Track'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <SearchBar />
        </p>
       
      </header>
      <body></body>
    </div>
  );
}

export default App;
