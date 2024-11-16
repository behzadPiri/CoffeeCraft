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
    backgroundColor: Colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  SliderWrapper: {
    width: width,
    height: '90%',
    backgroundColor: Colors.background,
    maxHeight: height - 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sliderImageWrapper: {
    width: width,
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    borderBottomLeftRadius: width/2,
    borderBottomRightRadius:  width/2,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: 'hidden',
  },
  sliderTextWrapper: {
    width: width,
    height: '15%',
    overflow: 'hidden',
    paddingHorizontal:24,
    backgroundColor: Colors.background,
    alignItems:'center',
    justifyContent: 'space-between',
  },
  image: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius:  width/2,
    borderBottomRightRadius:  width/2,
  },
  text: {
    textAlign: 'center',
    lineHeight: 36,
    fontSize:Fonts.medium
  },
  footerWrapper: {
    width: width,
    height: '8%',
    paddingHorizontal:24,
    backgroundColor: Colors.background
  },
  paginationWrapper:{
    width: '100%',
    height:width/20,
    flexDirection:"row-reverse",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:Colors.background,
    gap:8
  },
  pagination:{
    height: '50%',
    aspectRatio: 1,
    borderRadius: '50%',
    backgroundColor:Colors.border,
  },
  paginationDisable:{
    backgroundColor:Colors.primaryText,
  }
});

export default styles;
