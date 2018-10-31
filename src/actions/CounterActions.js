import * as Constants from '../constants/ActionTypes';
import axios from 'axios';

export const get = () =>  {
  return (dispatch) => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      const content = response.data;
      dispatch({
        type: Constants.get,
        payload: { content }
      })
    })
  }
}