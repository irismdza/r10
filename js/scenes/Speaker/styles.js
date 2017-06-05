import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    backgroundColor: colors.black
  },
  headerWrapper: {
    paddingVertical: 35,
    flexDirection: 'row',
  },
  sceneTitleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  sceneTitle: {
    fontFamily: typography.fontMain,
    color: colors.white,
  },
  innerContainer: {
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 17,
    alignItems: 'center',
    justifyContent: 'center'
  },
  speakerImage: {
    width: 100,
    height: 100,
    borderRadius: 52,
    paddingVertical: 10
  },
  speakerName: {
    fontSize: 24,
    fontFamily: typography.fontMain,
    paddingVertical: 15
  },
  speakerBio: {
    fontFamily: typography.fontMainLight,
    fontSize: 14,
    lineHeight: 22
  }
});