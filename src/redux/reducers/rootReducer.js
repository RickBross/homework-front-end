import {combineReducers} from 'redux';
import gifs from './gifsReducer';

const rootReducer = combineReducers({
  gifs
});

export default rootReducer;