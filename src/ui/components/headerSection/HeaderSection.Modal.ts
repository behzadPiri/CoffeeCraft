import {Animated} from 'react-native';

export interface HeaderSectionModal {
  textOpacity: Animated.AnimatedInterpolation<number>; // مقدار انیمیشن برای شفافیت
  textTranslateY: Animated.AnimatedInterpolation<number>; // مقدار انیمیشن برای انتقال در محور Y

}
