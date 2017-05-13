import * as actionTypes from '../constants/actionTypes'

const initialState = [];

// we export an anon function, the reducer, as an
// interface to our existing app

export default function(state = initialState, action) {
  switch(action.type) {
    case actionTypes.TRACKS_SET:
      return setTracks(state, action);
  }
  return state;
}

function setTracks(state, action) {
  const { tracks } = action;
  return [ ...state, ...tracks ];
}
