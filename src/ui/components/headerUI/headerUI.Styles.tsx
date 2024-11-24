import {StyleSheet} from 'react-native';
import {Fonts, useThemeColors, width} from '../../../content/Themes/Themes.tsx';

const Colors = useThemeColors();

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    shadowColor: Colors.white,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical:4,
    paddingHorizontal:24
  },
  buttonWrapper: {
    height:"100%",
    aspectRatio:1,
    borderRadius:12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.background,
    overflow:"hidden"
  },
  title:{
    fontSize:Fonts.regular,
  },
  image:{
    width:36,
    height:36,
    resizeMode:"contain",
    tintColor:Colors.icon,
  }
});

export default styles;
