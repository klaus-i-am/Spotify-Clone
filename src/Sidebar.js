import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusicOutlined";
import { useDataLayerValue } from './DataLayer';

function Sidebar() {

  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);

    return (
      <div className="sidebar">
        {/* Spotify Sidebar Logo */}
        <img 
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"  
            className="sidebar__logo"
            alt=""
        />
        {/* Sidebar Menu */}
        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
        <br/>
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr/>

        {/* Get User Playlists */}
        {playlists?.items?.map((playlist) => (
          <SidebarOption title={playlist.name} />
        ))}
      </div>
    )
}

export default Sidebar
