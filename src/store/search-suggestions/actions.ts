import axios from 'axios';
import { TAction, SearchSuggestionsActionTypes } from '../../types/searchSuggestions';
import { Dispatch } from 'redux';

export const fetchSuggest = (keywords: string) => {
  return async (dispatch: Dispatch<TAction>) => {
    try {
      dispatch({ type: SearchSuggestionsActionTypes.FETCH_SUGGESTIONS });
      const res = await axios.get('/products/search', {
        params: {
          keywords,
          limit: 5,
        }
      });
      dispatch({ 
        type: SearchSuggestionsActionTypes.FETCH_SUGGESTIONS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({ type: SearchSuggestionsActionTypes.FETCH_SUGGESTIONS_ERROR });
    }
  }
}