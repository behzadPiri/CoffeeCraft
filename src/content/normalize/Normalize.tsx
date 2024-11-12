import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// عرض مرجع که معمولاً در طراحی‌های رایج استفاده می‌شود
const BASE_WIDTH = 375;

const scale = SCREEN_WIDTH / BASE_WIDTH;

/**
 * تابع normalizeFont: برای مقیاس‌بندی فونت به صورت ریسپانسیو
 * @param size - اندازه اصلی فونت در طراحی (بدون تغییر)
 * @returns - اندازه نهایی مقیاس‌بندی شده برای نمایشگر کاربر
 */
export function normalizeFont(size: number): number {
  // محاسبه اندازه جدید با استفاده از scale
  const newSize = size * scale;

  // استفاده از PixelRatio برای گرد کردن به نزدیک‌ترین پیکسل مناسب
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
