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
    flexGrow: 1,
    width: width,
    backgroundColor: Colors.background,
  },
  headerSection:{
    height:height*0.4
  },
  Keyboard: {
    flex: 1,
  },
  scrollWrapper: {
    flexGrow: 1,
    backgroundColor: Colors.background,
  },
  body: {
    width: width,
    height: height * 0.6,
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
    width:"100%",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  createAccountText: {
    color: Colors.primary,
    fontSize: Fonts.regular,
    paddingBottom:6,
  },
  inputWrapper:{
    marginTop:16
  },
  errorInput:{
    color:Colors.error,
    fontSize: Fonts.extraSmall,
    marginVertical:4
  },
  rulesWrapper:{
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"transparent",
    marginTop:24
  },
  rules:{
    flexGrow:1,
    flexDirection:"row",
    alignItems:"center",
    marginLeft:8,
  },
  rulesText:{
    fontSize:Fonts.medium,
    color:Colors.primary,
    marginHorizontal:8
  }

});

export default styles;
