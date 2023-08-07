import { playlist } from './Playlist'
import Track from '../Tracks/Track'

function PlaylistTiles(props) {
    return playlist.map(track => <Track tracklistObject={track} />)
}

export default PlaylistTiles;