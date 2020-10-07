import React from 'react';
import './Player.css';
import Body from './Body';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Player({ spotify }) {
  return (
    <div>
      {/* Player Container */}
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />             
      </div>  
        <Footer />
    </div>
  );
}

export default Player;
