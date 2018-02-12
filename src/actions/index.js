import Spotify from 'spotify-web-api-js';
import axios from 'axios';
const spotifyApi = new Spotify();

// our constants
export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN';
export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_ME_SUCCESS';
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE';
export const GET_RESULTS = 'get_results';

/** set the app's access and refresh tokens */
export function setTokens({accessToken, refreshToken}) {
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }
  return { type: SPOTIFY_TOKENS, accessToken, refreshToken };
}

export function getResults(query, callback) {
  const accessToken = '';
  const url = `https://api.spotify.com/v1/search?q=${query}&type=album,artist,playlist,track&limit=4`;
  const request = axios.get(url, {
    headers: { 'Authorization': `Bearer ${accessToken}`}
  }).then(() => callback());

  return {
    type: GET_RESULTS,

    payload: request
  }
}

/* get the user's info from the /me api */
// export function getMyInfo() {
//   return dispatch => {
//     dispatch({ type: SPOTIFY_ME_BEGIN});
//     spotifyApi.getMe().then(data => {
//       dispatch({ type: SPOTIFY_ME_SUCCESS, data: data });
//     }).catch(e => {
//       dispatch({ type: SPOTIFY_ME_FAILURE, error: e });
//     });
//   };
// }
