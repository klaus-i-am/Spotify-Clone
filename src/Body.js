import React from 'react'
import './Body.css';
import Header from './Header';
import SongRow from "./SongRow";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DurationIcon from '@material-ui/icons/AccessTimeSharp';


function Body({ spotify }) {

    // Track Duration
    var dHours = Math.floor(4585515 / 3600)%24;
    var dMinutes = Math.floor(4585515 / 60000)%60;
    var dSeconds = ((4585515 % 60000) / 1000).toFixed(0);
    var dTrackTime = dHours + " hr " + dMinutes + " min ";

    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    
    return (
        <div className="body">
          
          {/* Get './Header' */}
          <Header spotify={spotify} />

          {/* Discover Weekly Info */}
          <div className="body__info">
            <img id="discover__profileImage" src={discover_weekly?.images[0].url} alt=""/>
            <div className="body__infoText">
              <strong>PLAYLIST</strong>
              <h2>Discover Weekly</h2>
              <p>
                {discover_weekly?.description}
                  <p></p>
                  <a href="https://open.spotify.com/user/spotify">Spotify </a>
                  &bull;<span> 30 songs, {dTrackTime}</span>
              </p>
            </div>
          </div>
          
          {/* Play Songs */}
          <div className="body__songs">
            <div className="body__icons">
              <PlayCircleFilledIcon className="body__shuffle icon__green" />
              <FavoriteIcon fontSize="large" />
              <MoreHorizIcon />
            </div>            

            {/* Songs Header */}
            <ul className="body__songsHeader">
              <li className="body__songsNumber"><p>#</p></li>
              <li className="body__songsTitle"><p>TITLE</p></li>
              <li className="body__songsAlbum"><p>ALBUM</p></li>
              <li className="body__songsRelease"><p>RELEASE</p></li>
              <li className="body__songsDurationIcon">
                <DurationIcon className="body__duration" />
              </li>
            </ul>

            {/* Get Tracks */}
            <div className="body__songNumber">
              {discover_weekly?.tracks.items.map((item) => (
                <SongRow track={item.track} duration={item.duration} />
              ))}
            </div>
          </div>
        </div>
    )
}

export default Body
