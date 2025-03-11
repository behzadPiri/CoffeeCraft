import {
  height,
  useThemeColors,
  width,
} from '../../../content/Themes/Themes.tsx';
import {StyleSheet} from 'react-native';

const Colors = useThemeColors();

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    flex: 1,
    backgroundColor: Colors.modalBackground,
  },
  bodyModal: {
    width: width,
    flexGrow: 1,
    backgroundColor: Colors.modalBackground,
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  everyPart: {
    marginBottom: 24,
  },
  text: {
    color: Colors.secondaryText,
    textAlign: 'justify',
    marginTop: 8,
  },
  rulesWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 16,
  },
  rules: {
    marginLeft: 16,
  },
});

export default styles;
