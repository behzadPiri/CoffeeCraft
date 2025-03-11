import {Pressable, View} from 'react-native';
import styles from './CheckRadioGroup.Styles.tsx';
import {CheckRadioGroupProps} from './CheckRadioGroup.Types.ts';

/*این کامپوننت برای ایجاد دو نوع انتخاب (CheckBox و RadioBox) استفاده می‌شود.*/
const CheckRadioGroup = (props: CheckRadioGroupProps) => {
  const {
    styleBox, // استایل سفارشی برای جعبه خارجی
    selectBox, // وضعیت انتخاب: true = انتخاب شده، false = لغو انتخاب
    styleSelector, // استایل سفارشی برای ویو داخلی
    disabled = false, // (پیش‌فرض: false) تعیین می‌کند آیا جعبه غیرفعال است یا خیر
    type = 'checkBox', // (پیش‌فرض: checkBox) نوع جعبه: CheckBox یا RadioBox
    onPressSelection, // متد مدیریت انتخاب selection
  } = props;

  /*بررسی نوع انتخاب Box*/
  const isCheckBox = type === 'checkBox';

  return (
    <Pressable
      disabled={disabled}
      onPress={onPressSelection}
      hitSlop={10}
      pointerEvents="box-only"
      style={[
        styles.container,
        styleBox,
        {borderRadius: isCheckBox ? 4 : 100},
      ]}>
      {/* ویو انتخابگر داخلی با انیمیشن تغییر رنگ */}
      <View
        style={[
          styles.select,
          styleSelector,
          {
            borderRadius: isCheckBox ? 2 : 100,
            display: selectBox ? 'flex' : 'none',
          },
        ]}
      />
    </Pressable>
  );
};

export default CheckRadioGroup;
