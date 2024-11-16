import {StyleSheet} from 'react-native';
import {useThemeColors} from '../../../content/Themes/Themes.tsx';
import {width} from '../../../content/Themes/Themes.tsx';

const Colors = useThemeColors();
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieWrapper: {
    width: width/1.5,
   aspectRatio:1
  },
});

export default styles;
