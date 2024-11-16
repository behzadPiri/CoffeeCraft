import {ReactNode} from 'react';

export interface TextUIProps {
  text?: string | number; // متن اصلی برای نمایش
  subTitle?: string; // زیرعنوان اختیاری
  bold?: boolean; // آیا متن برجسته باشد؟
  onPressText?: (value: string | number | undefined) => void; // تابع کلیک بر روی متن
  numberOfLines?: number; // تعداد خطوط مجاز برای نمایش متن
  adjustsFontSizeToFit?: boolean; // آیا اندازه فونت برای جلوگیری از قطع کلمات تنظیم شود؟
  children?: ReactNode; // المان‌های فرزند داخلی
  style?: object; // استایل اضافی برای متن
}
