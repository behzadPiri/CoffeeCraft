import {
  Fonts,
  height,
  useThemeColors,
  width,
} from '../../../content/Themes/Themes.tsx';
import {StyleSheet} from 'react-native';

const Colors = useThemeColors();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: Colors.background,
  },
  body: {
    width: width,
    height: height * 0.55,
    backgroundColor: Colors.background,
    zIndex: 3,
    transform: [{translateY: -height * 0.05}],
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  title: {
    fontSize: Fonts.large,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: Fonts.medium,
    marginBottom: 48,
    textAlign:"justify",
    color:Colors.secondaryText
  },
  buttonWrapper: {
    paddingTop: 24,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  createAccountTextWrapper: {
   width:"100%",
    alignItems:"center",
    justifyContent:"center"
  },
  createAccountText: {
    color: Colors.primary,
    marginTop:8
  },
});

export default styles;
