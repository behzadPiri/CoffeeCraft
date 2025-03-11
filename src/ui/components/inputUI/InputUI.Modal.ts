import {Animated} from 'react-native';
import {UseFormTrigger} from 'react-hook-form';

export interface InputModal {
  isFocused: boolean; // نشان‌دهنده فوکوس بودن یا نبودن
  handleFocus: () => void; // تابع هندلر فوکوس
  handleBlur: (value:string) => void; // تابع هندلر بلر
  handleInputChange: (
    text: string,
    fieldOnChange: (value: string) => void,
    fieldNameInput:string,
    trigger: UseFormTrigger<any>,
  ) => void;
  viewTranslateY: Animated.AnimatedInterpolation<string|number>;// انیمیشن حرکت عمودی والد
  translateY: Animated.AnimatedInterpolation<string | number>; // انیمیشن حرکت عمودی
  translateX: Animated.AnimatedInterpolation<string | number>; // انیمیشن حرکت افقی
  scale: Animated.AnimatedInterpolation<string | number>; // انیمیشن مقیاس
}
