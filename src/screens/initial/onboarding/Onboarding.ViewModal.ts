import {OnboardingModal} from './Onboarding.Modal.ts';
import {useThemeColors, width} from '../../../content/Themes/Themes.tsx';
import {useState} from 'react';
import {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {OnboardingSlideData} from '../../../utils/OnboardingSlideData.tsx';
import {useNavigation} from '@react-navigation/native';
import {OnboardingScreenNavigationProp} from '../../../navigation/initial/Initial.Types.ts';

const useOnboardingViewModal = (): OnboardingModal => {
  const Colors = useThemeColors();
  const navigation = useNavigation<OnboardingScreenNavigationProp>();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Shared values برای انیمیشن
  const imageOpacity = useSharedValue(1);
  const textOpacity = useSharedValue(1);
  const imageTranslateX = useSharedValue(0);
  const textTranslateY = useSharedValue(0);
  const shadowColorProgress = useSharedValue(0);

  // استایل انیمیشن تصویر
  const animatedImageStyle = useAnimatedStyle(() => ({
    opacity: imageOpacity.value,
    transform: [{ translateX: imageTranslateX.value }],
  }));

  // استایل انیمیشن متن
  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
    transform: [{translateY: textTranslateY.value}],
  }));

  // استایل انیمیشن برای سایه
  const animatedShadowStyle = useAnimatedStyle(() => {
    const shadowColor = interpolateColor(
      shadowColorProgress.value,
      [0, 1],
      [Colors.white, Colors.background],
    );
    const elevation = interpolate(
      shadowColorProgress.value,
      [0, 1],
      [5, 0], // مقدار elevation از 5 به 0 تغییر می‌کند
    );

    return {
      shadowColor: shadowColor,
      elevation: elevation,
    };
  });


  // تابع تغییر اسلاید
  const handleNext = () => {
    'worklet';

    if (currentIndex < OnboardingSlideData.length - 1) {
      // انیمیشن خروج اسلاید فعلی
      imageOpacity.value = withTiming(0, {duration: 300});
      textOpacity.value = withTiming(0, {duration: 300});
      shadowColorProgress.value = withTiming(1, {duration: 300});
      imageTranslateX.value = withTiming(-width, { duration: 300 });
      textTranslateY.value = withTiming(-20, {duration: 300}, () => {
        // تغییر اسلاید به بعدی
        runOnJS(setCurrentIndex)(currentIndex + 1);

        // انیمیشن ورود اسلاید جدید
        imageOpacity.value = withTiming(1, {duration: 300});
        textOpacity.value = withTiming(1, {duration: 300});
        textTranslateY.value = withTiming(0, {duration: 300});
        imageTranslateX.value = withTiming(0, { duration: 300 });
        shadowColorProgress.value = withTiming(0, {duration: 300});
      });
    } else {
      // رفتار در پایان اسلایدر
      // navigation.addListener()
    }
  };

  return {
    handleNext,
    currentIndex,
    animatedTextStyle,
    animatedImageStyle,
    animatedShadowStyle,
  };
};

export default useOnboardingViewModal;
