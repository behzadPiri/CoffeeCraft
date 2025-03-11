import {useState, useRef} from 'react';
import {InputModal} from './InputUI.Modal.ts';
import {Animated} from 'react-native';
import {UseFormTrigger} from 'react-hook-form';
import {debounceValidation} from '../../../common/utils/debounceValidation.tsx';

const useInputViewModal = (): InputModal => {

  // مدیریت وضعیت فوکوس
  const [isFocused, setIsFocused] = useState(false);

  // تعریف مقدار اولیه انیمیشن با useRef
  const animation = useRef(new Animated.Value(0)).current;

  const handleInputChange = (
    text:string,
    fieldOnChange: (value: string) => void,
    fieldNameInput: string,
    trigger: UseFormTrigger<any>
  ) => {
    fieldOnChange(text);
    debounceValidation(fieldNameInput, trigger);
  };

  // تابع عمومی انیمیشن
  const animate = (toValue: number) => {
    Animated.timing(animation, {
      toValue,
      duration: 200, // مدت زمان انیمیشن
      useNativeDriver: false, // تغییر رنگ نیاز به غیر بومی بودن دارد
    }).start();
  };

  // هندلر فوکوس
  const handleFocus = () => {
    if (!isFocused) {
      setIsFocused(true);
      animate(1);
    }
  };

  // هندلر بلر
  const handleBlur = (value:string) => {
    if (!value && isFocused) {
      setIsFocused(false);
      animate(0);
    }
  };

  // تنظیم انیمیشن‌ها
  const interpolate = (outputRange: [string|number, number|any]) =>
    animation.interpolate({
      inputRange: [0, 1],
      outputRange,
    });

  const viewTranslateY = interpolate([2, -5]); //  حرکت عمودی والد
  const translateY = interpolate([8, -14]); // حرکت عمودی
  const translateX = interpolate([-8, 0]);  // حرکت افقی
  const scale = interpolate([1, 0.7]);       // تغییر اندازه


  return {
    scale,
    isFocused,
    translateY,
    handleBlur,
    translateX,
    handleFocus,
    viewTranslateY,
    handleInputChange
  };
};

export default useInputViewModal;
