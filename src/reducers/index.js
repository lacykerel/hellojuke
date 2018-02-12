import {
  SPOTIFY_TOKENS, SPOTIFY_ME_BEGIN, SPOTIFY_ME_SUCCESS, SPOTIFY_ME_FAILURE, GET_RESULTS
} from '../actions';

/** The initial state; no tokens and no user info */
const initialState = {
  accessToken: null,
  refreshToken: null,
};

/**
 * Our reducer
 */
export default function reduce(state = initialState, action) {
  switch (action.type) {

  case GET_RESULTS:
    return [ action.payload.data, ...state ];

  // when we get the tokens... set the tokens!
  case SPOTIFY_TOKENS:
    const {accessToken, refreshToken} = action;
    return Object.assign({}, state, {accessToken, refreshToken});

  // set our loading property when the loading begins
  case SPOTIFY_ME_BEGIN:
    return Object.assign({}, state, {
      user: Object.assign({}, state.user, {loading: true})
    });

  // when we get the data merge it in
  case SPOTIFY_ME_SUCCESS:
    return Object.assign({}, state, {
      user: Object.assign({}, state.user, action.data, {loading: false})
    });

  // currently no failure state :(
  case SPOTIFY_ME_FAILURE:
    return state;

  default:
    return state;
  }
}
