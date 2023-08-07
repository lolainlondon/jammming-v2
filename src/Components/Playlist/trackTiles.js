import { tracklist } from './Tracklist'
import Track from './Track'

function TrackTiles(props) {
    return tracklist.map(track => <Track tracklistObject={track} />)
}

export default TrackTiles;