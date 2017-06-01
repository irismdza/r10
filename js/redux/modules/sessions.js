import { firebaseUrl } from '../../config/api';
import { formatSessionData } from '../../lib/dataFormatHelpers';

// ACTIONS
const GET_SESSIONS_LOADING = 'GET_SESSIONS_LOADING';
const GET_SESSIONS_ERROR = 'GET_SESSIONS_ERROR';
const GET_SESSIONS = 'GET_SESSIONS';

// ACTION CREATORS
const getSessionsLoading = () => ({ type: GET_SESSIONS_LOADING });
const getSessionsError = (error) => ({ type: GET_SESSIONS_ERROR, payload: error });
const getSessions = (codes) => ({ type: GET_SESSIONS, payload: codes });

export const _fetchSessions = () => (dispatch) => {
  dispatch(getSessionsLoading());

  return fetch(`${firebaseUrl}/sessions.json`)
    .then(response => response.json())
    .then(sessions => dispatch(getSessions(sessions)))
    .catch(error => (dispatch(getSessionsError(error))))
};

// REDUCER
export default function reducer(state = {
  isLoading: false,
  sessionsData: {
    dataBlob: {},
    sectionIds: [],
    rowIds: []
  },
  error: ''
}, action) {
  switch (action.type) {
    case GET_SESSIONS_LOADING: {
      return Object.assign({}, state, {
        isLoading: true,
        error: ''
      })
    }
    case GET_SESSIONS_ERROR: {
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      })
    }
    case GET_SESSIONS: {
      const formattedData = formatSessionData(action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        error: '',
        sessionsData: formattedData
      })
    }
    default: {
      return state
    }
  }
};
