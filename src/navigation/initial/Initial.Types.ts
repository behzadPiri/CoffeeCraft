import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
};

// تایپ‌دهی به صفحه‌ها برای استفاده از `navigation`
export type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Splash'
>;
export type OnboardingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;
