import {useCallback} from 'react';
import {HeaderModal} from './headerUI.Modal.ts';
import {HeaderProps} from './headerUI.Types.ts';
import {useThemeColors} from '../../../content/Themes/Themes.tsx';
import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';


/*وظیفه این هوک مدیریت عملیات مربوط به دکمه‌های سمت چپ و راست و تم رنگی است*/
const useHeaderViewModal = (props: HeaderProps): HeaderModal => {

  const {onPressRight, onPressLeft} = props;

  /*مقادیر رنگ‌های تم از useThemeColors استخراج می‌شود*/
  const Colors: ThemeColorsType = useThemeColors();

  /*هندلر دکمه سمت چپ*/
  const handleLeftButton = useCallback(() => {
    onPressLeft();
  }, [onPressLeft]);

  /*هندلر دکمه سمت راست*/
  const handleRightButton = useCallback(() => {
    onPressRight();
  }, [onPressRight]);

  return {
    Colors,
    handleLeftButton,
    handleRightButton,
  };
};

export default useHeaderViewModal;
