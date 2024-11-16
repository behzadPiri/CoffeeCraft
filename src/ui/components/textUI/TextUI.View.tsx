import {FC, memo} from 'react';
import styles from './TextUI.Styles.tsx';
import Animated from 'react-native-reanimated';
import {TextUIProps} from './TextUI.Types.ts';

// یک کامپوننت مخصوص برای نمایش متن با امکانات اضافی
const TextUI: FC<TextUIProps> = memo(props => {
  const {
    text,
    style,
    children,
    subTitle,
    onPressText,
    bold = false,
    numberOfLines = 1,
    adjustsFontSizeToFit = false,
  } = props;

  const fontStyle = {
    fontFamily: bold ? 'Vazir-Bold-FD-WOL' : 'Vazir-FD-WOL',
  };

  return (
    <Animated.Text
      onPress={() => onPressText && onPressText(text)}
      numberOfLines={numberOfLines}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      style={[styles.container, fontStyle, style]}>
      {text}
      {children}
      {subTitle}
    </Animated.Text>
  );
});

export default TextUI;
