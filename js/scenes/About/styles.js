import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  headerLogo: {
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    paddingVertical: 20,
    marginBottom: 20,
  },
  baseText: {
    fontFamily: typography.fontMainLight,
  },
  titleText: {
    fontSize: 20,
    fontFamily: typography.fontMain,
    paddingVertical: 20
  }
});