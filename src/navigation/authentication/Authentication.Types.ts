import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Otp: undefined;
};

// تایپ‌دهی به صفحه‌ها برای استفاده از `navigation`
export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;

export type OtpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Otp'
>;
