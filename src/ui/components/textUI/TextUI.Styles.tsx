import {StyleSheet} from 'react-native';
import {Fonts, useThemeColors} from '../../../content/Themes/Themes.tsx';

const Colors = useThemeColors();
const styles = StyleSheet.create({
  container: {
    color: Colors.primaryText,
    fontSize: Fonts.medium,
    flexShrink: 1,
  },
});

export default styles;
