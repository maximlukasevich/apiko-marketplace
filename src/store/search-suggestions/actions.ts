import axios from 'axios';
import { Dispatch } from 'redux';
import { 
  SearchSuggestionsActionCreatorsTypes, 
  SearchSuggestionsActionTypes
} from '../../types/search-suggestions';


export const fetchSuggest = (keywords: string) => {
  return async (
    dispatch: Dispatch<SearchSuggestionsActionCreatorsTypes>
  ) => {
    try {
      dispatch({ type: SearchSuggestionsActionTypes.FETCH_SUGGESTIONS });
      const res = await axios.get('/api/products/search', {
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