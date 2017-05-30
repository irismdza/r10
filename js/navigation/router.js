import { createRouter } from '@expo/ex-navigation';
import NavigationLayout from '../navigation/NavigationLayout';
import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import Faves from '../scenes/Faves';

const Router = createRouter(() => ({
  navigation: () => NavigationLayout,
  about: () => About,
  schedule: () => Schedule,
  faves: () => Faves

}));

export default Router;