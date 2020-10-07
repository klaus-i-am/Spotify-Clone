import React from 'react'
import "./Footer.css";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayArrow";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import DevicesSharpIcon from '@material-ui/icons/DevicesSharp';
import { Grid, Slider } from "@material-ui/core";
import { Favorite } from '@material-ui/icons';
  
function Footer() {
    return (
        <div className="footer">
            {/* Current Song Info */}
            <div className="footer__left">
                <img 
                className="footer__albumLogo"
                src="https://m.media-amazon.com/images/I/71TY56i2SmL._SS500_.jpg" 
                alt=""
                />
                <div className="footer__songInfo">
                    <a href="">
                        <h5>Party Rock Anthem</h5>
                    </a>
                    <a href=""><p>LMAFO</p></a>
                </div>
                <FavoriteIcon className="footer__heartCurrent" />
            </div>

            {/* Player Controls */}
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon 
                fontSize="large"
                className="footer__icon footer__play" 
                />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__durationContainer">
              <span>01:20</span>
              <Slider className="footer__durationBar" />
              <span>3:34</span>
            </div>

            {/* Volume Controls */}
            <div className="footer__right">
              <div className="footer__rightContainer">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon className="footer__playlistIcon" />
                    </Grid>
                    <Grid item>
                        <DevicesSharpIcon className="footer__deviceIcon" />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className="footer__volumeIcon" />
                    </Grid>
                    <Grid item xs>
                        <Slider className="footer__volumeSlider" />
                    </Grid>
                </Grid>
              </div>
            </div>

        </div>
    )
}

export default Footer;