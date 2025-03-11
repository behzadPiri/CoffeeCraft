import {Fonts, useThemeColors} from '../../../content/Themes/Themes.tsx';
import {StyleSheet} from 'react-native';

const Colors = useThemeColors();
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.inputBackground,
    borderRadius: 12,
    height: 60,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 12,
    justifyContent: 'center',
    position: 'relative',
    paddingVertical: 0,
  },
  inputWrapper: {
    fontSize: Fonts.medium,
    height: 50,
    textAlignVertical: 'center',
    color: Colors.primaryText,
    fontFamily: 'Vazir-FD-WOL',
    backgroundColor: 'transparent',
    paddingVertical: 0,
    zIndex: 10,
  },
  textArea: {
    textAlignVertical: 'top',
  },
  hint: {
    color: Colors.primaryText,
    fontFamily: 'Vazir-FD-WOL',
    fontSize: Fonts.medium,
  },
  hintWrapper: {
    height: 52,
    flex: 1,

    backgroundColor:Colors.inputBackground,
    // backgroundColor:Colors.primary,
    position: 'absolute',
    alignItems:"center",
    justifyContent:"flex-start",
    zIndex: 2,
    left:8,
  },

});

export default styles;
