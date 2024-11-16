import {StyleSheet} from 'react-native';
import {
  Fonts,
  height,
  useThemeColors,
  width,
} from '../../../content/Themes/Themes.tsx';

const Colors = useThemeColors();
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  lottieFileWrapper: {
    aspectRatio: 1,
    height: height / 3,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  lottieFile: {
    width: '90%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  textWrapper: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 12,
  },
  text: {
    fontSize: Fonts.large,
    color: Colors.primaryText,
  },
  buttonWrapper: {
    width: width - 48,
    marginTop: 32,
  },
});

export default styles;
