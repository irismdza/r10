import { combineReducers } from 'redux';

import { NavigationReducer } from '@expo/ex-navigation';
import ConductReducer from './modules/conduct';

export default combineReducers({
  navigation: NavigationReducer,
  conduct: ConductReducer
});
