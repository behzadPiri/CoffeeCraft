import {RefObject} from 'react';
import type {Control, RegisterOptions, UseFormTrigger} from 'react-hook-form';
import type {
  KeyboardTypeOptions,
  StyleProp,
  TextInput,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface InputUIProps {
  hint: string; // متنی که به عنوان placeholder استفاده می‌شود
  maxLength?: number; // حداکثر تعداد کاراکترهای ورودی
  editable?: boolean; // کنترل قابلیت ویرایش
  multiline?: boolean; // پشتیبانی از چند خطی بودن
  ref?: RefObject<TextInput>; // مرجع برای دسترسی مستقیم به TextInput
  inputStyle?: StyleProp<TextStyle>; // استایل مربوط به TextInput
  keyboardType?: KeyboardTypeOptions; // نوع کیبورد برای ورودی
  containerStyle?: StyleProp<ViewStyle>; // استایل مربوط به View بیرونی
  name: string; // نام فیلد
  control: Control<any>; // کنترل مدیریت فرم توسط react-hook-form
  defaultValue?: string; // مقدار پیش‌فرض
  rulesValid?: RegisterOptions; // قوانین اعتبارسنجی
  trigger: UseFormTrigger<any>; // تابع trigger برای اجرای اعتبارسنجی
}
