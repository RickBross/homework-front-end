import * as types from './actionTypes';
import 'whatwg-fetch';

const API_KEY = 'gk18YlX3VBR07KWtWNF2bj6Qcnhty7ly';

function url(options) {
  const search = options.search || "technology";
  return 'http://api.giphy.com/v1/gifs/search?q=' + search.split(' ').join('+') + '&api_key='+ API_KEY +'&limit='+ options.quantity;
}

export function receivegifs(json) {
  return {type: types.RECEIVE_GIFS, gifs: json.data};
}

export function fetchgifs(config) {
  return dispatch => {
    return fetch(url(config), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    })
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(json => dispatch(receivegifs(json)));
  };
}
