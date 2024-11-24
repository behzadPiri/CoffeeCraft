import {ThemeColorsType} from '../../../common/types/ThemeColors.Type.ts';

/*اینترفیس مشخص‌کننده مقادیر برگشتی از ViewModal*/
export interface HeaderModal {
  handleLeftButton: () => void; //هندلر دکمه سمت چپ
  handleRightButton: () => void; //هندلر دکمه سمت راست
  Colors: ThemeColorsType; //رنگ‌های تم که برای استایل‌دهی استفاده می‌شود
}
