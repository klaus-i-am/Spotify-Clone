import React, { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from './DataLayer';
import Login from './Login';
import Player from './Player';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';

// Spotify
const spotify = new SpotifyWebApi();

function App() {
  
  document.oncontextmenu = new Function("return false;");

  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      setToken(_token);

      spotify.setAccessToken(_token);
      // Set User
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      
      // Set Set Playlists
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
        });
      });
      
      // Set Discover Weekly
      spotify.getPlaylist('37i9dQZEVXcQDpexiuk3Vq').then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

    };
  }, []);
  
  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
