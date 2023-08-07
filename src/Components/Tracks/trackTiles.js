import { tracklist } from './Components/Tracks/Tracklist'
import Track from './Components/Tracks/Track'

function trackTiles(props) = {
    return tracklist.map(track => <Track tracklistObject={track} />)
}

export default trackTiles;