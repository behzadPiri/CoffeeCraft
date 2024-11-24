import {FC, memo} from 'react';
import {Image, Pressable, View} from 'react-native';
import styles from './headerUI.Styles.tsx';
import {TextUI} from '../../index.tsx';
import {HeaderProps} from './headerUI.Types.ts';
import useHeaderViewModal from './headerUI.ViewModal.ts';
import Images from '../../../content/images/images.tsx';

/*
یک کامپوننت برای نمایش هدر اپلیکیشن است.
این کامپوننت شامل دو دکمه (سمت چپ و راست) و یک عنوان در وسط است.
*/
const HeaderUI: FC<HeaderProps> = memo(props => {
  const {
    title = '', // عنوان پیش‌فرض خالی
    styleButtonLeft = {}, // استایل پیش‌فرض برای دکمه چپ
    styleButtonRight = {}, // استایل پیش‌فرض برای دکمه راست
    disabledButtonLeft = false, // وضعیت پیش‌فرض غیرفعال بودن دکمه چپ
    disabledButtonRight = false, // وضعیت پیش‌فرض غیرفعال بودن دکمه راست
  } = props;

  /* استفاده از ViewModal برای مدیریت عملکردها و مقادیر رنگی*/
  const {handleRightButton, handleLeftButton, Colors} =
    useHeaderViewModal(props);

  return (
    <View style={styles.container}>
      {/* دکمه سمت راست */}
      <Pressable
        pointerEvents={'box-only'}
        onPress={handleRightButton}
        disabled={disabledButtonRight}
        style={[styles.buttonWrapper, styleButtonRight]}
        android_ripple={{foreground: true, color: Colors.android_ripple}}>
        {!disabledButtonRight && (
          <Image source={Images.arrowBack} style={styles.image} />
        )}
      </Pressable>

      {/* عنوان هدر */}
      <TextUI style={styles.title} text={title} bold />

      {/* دکمه سمت چپ */}
      <Pressable
        pointerEvents={'box-only'}
        onPress={handleLeftButton}
        disabled={disabledButtonLeft}
        style={[styles.buttonWrapper, styleButtonLeft]}
        android_ripple={{foreground: true, color: Colors.android_ripple}}>
        {!disabledButtonLeft && (
          <Image source={Images.noMessage} style={styles.image} />
        )}
      </Pressable>
    </View>
  );
});

export default HeaderUI;
