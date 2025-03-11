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
    width: width,
    backgroundColor: Colors.background,
  },
  headerSection: {
    height: height * 0.5,
  },
  Keyboard: {
    flex: 1,
    width: width,
  },
  scrollWrapper: {
    width: width,
    backgroundColor: Colors.background,
  },
  body: {
    width: width,
    height: height * 0.5,
    backgroundColor: Colors.background,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  title: {
    fontSize: Fonts.large,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: Fonts.medium,
    marginBottom: 12,
    textAlign: 'justify',
    color: Colors.secondaryText,
  },
  buttonWrapper: {
    marginTop: 24,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  createAccountWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountText: {
    color: Colors.primary,
    fontSize: Fonts.medium,
    paddingVertical: 8,
  },
  inputWrapper: {
    marginTop: 16,
  },
  errorInput: {
    color: Colors.error,
    fontSize: Fonts.extraSmall,
    marginVertical: 4,
  },
});

export default styles;
