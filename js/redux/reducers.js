import { combineReducers } from 'redux';

import { NavigationReducer } from '@expo/ex-navigation';
import ConductReducer from './modules/conduct';
import SessionsReducer from './modules/sessions';
import SpeakerReducer from './modules/speakers';
import FavesReducer from './modules/faves';

export default combineReducers({
  navigation: NavigationReducer,
  conduct: ConductReducer,
  sessions: SessionsReducer,
  speaker: SpeakerReducer,
  faves: FavesReducer
});
