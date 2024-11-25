import {useThemeColors} from '../../../content/Themes/Themes.tsx';
import {StyleSheet} from 'react-native';

const Colors=useThemeColors();

const styles=StyleSheet.create({
  container:{
    width: 20,
    padding: 3.5,
    borderWidth:1,
    aspectRatio: 1,
    borderRadius: 4,
    borderColor:Colors.border,
    backgroundColor: 'transparent'
  },
  select:{
    width: '100%',
    height: '100%',
    borderRadius: 2,
    backgroundColor: Colors.checkbox,
  }
})

export default styles;
