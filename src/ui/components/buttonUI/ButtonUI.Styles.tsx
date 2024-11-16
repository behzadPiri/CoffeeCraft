import {StyleSheet} from 'react-native';
import {Fonts, useThemeColors} from '../../../content/Themes/Themes.tsx';

const Colors = useThemeColors();

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.button,
    overflow: 'hidden',
  },
  textButton: {
    fontSize: Fonts.regular,
    color: Colors.white,
  },
  dualButtonWrapper: {
    width: '100%',
    height: 52,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  buttonWrapper: {
    width: '48%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    overflow: 'hidden',
  },
  rightButton: {
    backgroundColor: Colors.button,
  },
  leftButton: {
    backgroundColor: Colors.secondary,
  },
  buttonDisable: {
    opacity: 0.4,
  },
  dualButtonText: {
    fontSize: Fonts.medium,
    color: Colors.white,
  },
  loading: {
    height: '200%',
    width: '100%',
  },

});

export default styles;
