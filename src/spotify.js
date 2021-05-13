export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://spotify-reactjs-clone.herokuapp.com/"; //host URL
const clientId = "08ee8b145b1a43869c6e4cf317fc0106"; // Client ID

// Scope
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// Retrieve Token
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      var parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
  }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
