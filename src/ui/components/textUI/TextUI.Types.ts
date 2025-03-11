import {TextStyle} from 'react-native';

export interface TextUIProps extends TextStyle {
  text?: string | number; // متن اصلی برای نمایش
  bold?: boolean; // آیا متن برجسته باشد؟
  onPressText?: (value: string | number | undefined) => void; // تابع کلیک بر روی متن
  numberOfLines?: number; // تعداد خطوط مجاز برای نمایش متن
  adjustsFontSizeToFit?: boolean; // آیا اندازه فونت برای جلوگیری از قطع کلمات تنظیم شود؟
  style?: object; // استایل اضافی برای متن
}
