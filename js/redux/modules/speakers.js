import { firebaseUrl } from '../../config/api';
import { formatDataObject } from '../../lib/dataFormatHelpers';

// ACTIONS
const GET_SPEAKER_LOADING = 'GET_SPEAKER_LOADING';
const GET_SPEAKER_ERROR = 'GET_SPEAKER_ERROR';
const GET_SPEAKER = 'GET_SPEAKER';

// ACTION CREATORS
const getSpeakerLoading = () => ({ type: GET_SPEAKER_LOADING });
const getSpeakerError = (error) => ({ type: GET_SPEAKER_ERROR, payload: error });
const getSpeaker = (speakerData) => ({ type: GET_SPEAKER, payload: speakerData });

export const _fetchSpeaker = (speakerId) => (dispatch) => {
  dispatch(getSpeakerLoading());

  return fetch(`${firebaseUrl}/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`)
    .then(response => response.json())
    .then(speakerData => dispatch(getSpeaker(speakerData)))
    .catch(error => (dispatch(getSpeakerError(error))))
};

// REDUCER
export default function reducer(state = {
  isLoading: false,
  speakerData: {},
  error: ''
}, action) {
  switch (action.type) {
    case GET_SPEAKER_LOADING: {
      return Object.assign({}, state, {
        isLoading: true,
        error: ''
      })
    }
    case GET_SPEAKER_ERROR: {
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      })
    }
    case GET_SPEAKER: {
      const formattedSpeakerData = formatDataObject(action.payload);
      console.log(formattedSpeakerData)
      return Object.assign({}, state, {
        isLoading: false,
        error: '',
        speakerData: formattedSpeakerData
      })
    }
    default: {
      return state
    }
  }
};
