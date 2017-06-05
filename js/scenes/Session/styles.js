import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  sessionLocation: {
    fontFamily: typography.fontMainLight,
    color: colors.mediumGrey,
  },
  sessionTitle: {
    fontFamily: typography.fontMain,
    fontSize: 24,
    paddingVertical: 10
  },
  sessionTime: {
    fontFamily: typography.fontMain,
    color: colors.red,
    fontSize: 14,
    paddingBottom: 10
  },
  sessionDescription: {
    fontFamily: typography.fontMainLight,
    fontSize: typography.baseSize,
    lineHeight: 25,
    paddingBottom: 20
  },
  speakerInfoTitle: {
    fontFamily: typography.fontMainLight,
    color: colors.mediumGrey,
    paddingBottom: 10
  },
  speakerInfo: {
    fontFamily: typography.fontMain,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginTop: 15,
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: colors.lightGrey,
    alignItems: 'center'
  },
  faveButtonText: {
    fontFamily: typography.fontMain,
    fontSize: 15,
    color: colors.white,
    backgroundColor: 'transparent',
  },
  faveButton: {
    width: 175,
    height: 38,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
