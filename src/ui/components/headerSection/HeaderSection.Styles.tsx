import {StyleSheet} from 'react-native';
import {
  Fonts,
  height,
  useThemeColors,
  width,
} from '../../../content/Themes/Themes';

const Colors = useThemeColors();

const styles = StyleSheet.create({
  imageWrapper: {
    width: width,
    height: height * 0.5,
    position: 'relative',
    backgroundColor: Colors.background,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.background,
  },
  textImageWrapper: {
    width:width ,
    position: 'absolute',
    fontSize: Fonts.extraLarge,
    top: width / 2.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textImage: {
    fontSize: Fonts.extraLarge,
    fontFamily: 'Vazir-Bold-FD-WOL',
    textShadowColor: Colors.android_ripple,
    textShadowOffset: {width: -4, height: 8},
    textShadowRadius: 2,
    color: Colors.white,
  },
  footer: {
    width: '100%',
    height: 24,
    bottom: 0,
    position: 'absolute',
    backgroundColor: Colors.background,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
  },
});

export default styles;
