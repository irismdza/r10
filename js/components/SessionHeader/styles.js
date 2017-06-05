import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  sessionHeaderText: {
    fontSize: 12,
    fontFamily: typography.fontMain,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.lightGrey
  }
});