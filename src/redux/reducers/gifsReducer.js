import initialState from './initialState';
import {FETCH_GIFS, RECEIVE_GIFS} from '../actions/actionTypes';

export default function gifs(state = initialState.gifs, action) {
  let newState;
  switch (action.type) {
    case FETCH_GIFS:
      console.log('FETCH_GIFS Action')
      return action;
    case RECEIVE_GIFS:
      newState = action.gifs;
      console.log('RECEIVE_GIFS Action')
      return newState;
    default:
      return state;
  }
}