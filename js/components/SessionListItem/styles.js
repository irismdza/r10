import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  sessionTitleText: {
    fontFamily: typography.fontMain,
    paddingVertical: 5,
  },
  sessionLocationText: {
    fontSize: 12,
    fontFamily: typography.fontMain,
    color: colors.mediumGrey,
    paddingBottom: 5
  }
});