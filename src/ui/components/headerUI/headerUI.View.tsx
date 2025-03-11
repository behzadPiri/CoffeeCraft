import {Image, Pressable, View} from 'react-native';
import styles from './headerUI.Styles.tsx';
import {TextUI} from '../../index.tsx';
import {HeaderProps} from './headerUI.Types.ts';
import Images from '../../../content/images/images.tsx';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';
import {useThemeColors} from '../../../content/Themes/Themes.tsx';

/*
یک کامپوننت برای نمایش هدر اپلیکیشن است.
این کامپوننت شامل دو دکمه (سمت چپ و راست) و یک عنوان در وسط است.
*/
const HeaderUI = (props: HeaderProps) => {
  /*مقادیر رنگ‌های تم از useThemeColors استخراج می‌شود*/
  const Colors: ThemeColorsType = useThemeColors();

  const {
    title = '', // عنوان پیش‌فرض خالی
    styleButtonLeft = {}, // استایل پیش‌فرض برای دکمه چپ
    styleButtonRight = {}, // استایل پیش‌فرض برای دکمه راست
    disabledButtonLeft = false, // وضعیت پیش‌فرض غیرفعال بودن دکمه چپ
    disabledButtonRight = false, // وضعیت پیش‌فرض غیرفعال بودن دکمه راست
    onPressRight,
    onPressLeft,
  } = props;

  return (
    <View style={styles.container}>
      {/* دکمه سمت راست */}
      <Pressable
        onPress={onPressRight}
        pointerEvents="box-only"
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
        onPress={onPressLeft}
        pointerEvents="box-only"
        disabled={disabledButtonLeft}
        style={[styles.buttonWrapper, styleButtonLeft]}
        android_ripple={{foreground: true, color: Colors.android_ripple}}>
        {!disabledButtonLeft && (
          <Image source={Images.noMessage} style={styles.image} />
        )}
      </Pressable>
    </View>
  );
};

export default HeaderUI;
