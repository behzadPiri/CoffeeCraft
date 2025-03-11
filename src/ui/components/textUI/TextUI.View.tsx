import styles from './TextUI.Styles.tsx';
import Animated from 'react-native-reanimated';
import {TextUIProps} from './TextUI.Types.ts';

// یک کامپوننت مخصوص برای نمایش متن با امکانات اضافی
const TextUI= (propsApp:TextUIProps) => {
  const {
    text,
    style,
    onPressText,
    bold = false,
    numberOfLines = 1,
    adjustsFontSizeToFit = false,
    ...props
  } = propsApp;


  const fontStyle = {
    fontFamily: bold ? 'Vazir-Bold-FD-WOL' : 'Vazir-FD-WOL',
  };

  return (
    <Animated.Text
      {...props}
      numberOfLines={numberOfLines}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      style={[styles.container, fontStyle, style]}>
      {text}
    </Animated.Text>
  );
};

export default TextUI;
