import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {HeaderSectionModal} from './HeaderSection.Modal.ts';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenNavigationProp} from '../../../navigation/authentication/Authentication.Types.ts';

const useHeaderSectionViewModal=():HeaderSectionModal=>{

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const textOpacity = useRef(new Animated.Value(0)).current; // مقدار اولیه برای شفافیت
  const textTranslateY = useRef(new Animated.Value(50)).current; // مقدار اولیه برای انتقال در محور Y


  useEffect(() => {
    // پاکسازی لیسنر هنگام خروج از کامپوننت
    return navigation.addListener('focus', () => {
      // اجرای انیمیشن‌ها به صورت همزمان
      Animated.parallel([
        // انیمیشن شفافیت
        Animated.timing(textOpacity, {
          toValue: 1, // مقدار نهایی
          duration: 1000, // مدت زمان انیمیشن
          delay: 1000, // تأخیر شروع
          useNativeDriver: true, // استفاده از درایور بومی
        }),
        // انیمیشن انتقال در محور Y
        Animated.timing(textTranslateY, {
          toValue: -50, // مقدار نهایی
          duration: 1000, // مدت زمان انیمیشن
          delay: 1000, // تأخیر شروع
          useNativeDriver: true, // استفاده از درایور بومی
        }),
      ]).start();
    });
  }, [navigation,]);


  return {
    textOpacity,
    textTranslateY
  }
}

export default useHeaderSectionViewModal;
