import { firebaseUrl } from '../../config/api';

// ACTIONS
const GET_CONDUCT_LOADING = 'GET_CONDUCT_LOADING';
const GET_CONDUCT_ERROR = 'GET_CONDUCT_ERROR';
const GET_CONDUCT = 'GET_CONDUCT';

// ACTION CREATORS
const getConductLoading = () => ({ type: GET_CONDUCT_LOADING });
const getConductError = (error) => ({ type: GET_CONDUCT_ERROR, payload: error });
const getConduct = (codes) => ({ type: GET_CONDUCT, payload: codes });

export const _fetchConduct = () => (dispatch) => {
  dispatch(getConductLoading());

  return fetch(`${firebaseUrl}/code_of_conduct.json`)
    .then(response => response.json())
    .then(conduct => dispatch(getConduct(conduct)))
    .catch(error => (dispatch(getConductError(error))))
};

// REDUCER
export default function reducer(state = {
  isLoading: false,
  conductData: [],
  error: ''
}, action) {
  switch (action.type) {
    case GET_CONDUCT_LOADING: {
      return Object.assign({}, state, {
        isLoading: true,
        error: ''
      })
    }
    case GET_CONDUCT_ERROR: {
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      })
    }
    case GET_CONDUCT: {
      return Object.assign({}, state, {
        isLoading: false,
        error: '',
        conductData: action.payload
      })
    }
    default: {
      return state
    }
  }
};
