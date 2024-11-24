import {StyleProp, ViewStyle} from 'react-native';

/* اینترفیس مشخص‌کننده props برای کامپوننت HeaderUI*/
export interface HeaderProps {
  title: string; //عنوان (Title) برای نمایش در وسط header
  onPressLeft: () => void; //تابعی که هنگام کلیک روی دکمه سمت چپ اجرا می‌شود
  onPressRight: () => void; //تابعی که هنگام کلیک روی دکمه سمت راست اجرا می‌شود
  styleButtonLeft?: StyleProp<ViewStyle>; //استایل سفارشی برای دکمه سمت چپ
  styleButtonRight?: StyleProp<ViewStyle>; //استایل سفارشی برای دکمه سمت راست
  disabledButtonLeft?:boolean; //غیرفعال کردن دکمه سمت چپ
  disabledButtonRight?: boolean; //غیرفعال کردن دکمه سمت راست
}
