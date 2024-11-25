import {StyleProp, ViewStyle} from 'react-native';

export interface CheckRadioGroupProps {
  type: 'checkBox' | 'radioBox'; // فقط این دو مقدار قابل قبول هستند
  styleBox?:StyleProp<ViewStyle> // استایل سفارشی برای جعبه خارجی
  styleSelector?:StyleProp<ViewStyle> // استایل سفارشی برای ویو داخلی
  disabled?:boolean // (پیش‌فرض: false) تعیین می‌کند آیا جعبه غیرفعال است یا خیر
  selectBox:boolean   // وضعیت انتخاب: true = انتخاب شده، false = لغو انتخاب
  onPressSelection:(value:boolean)=>void  // متد مدیریت انتخاب selection
}
