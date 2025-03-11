//این نوع تعریف مربوط به اکشن‌های Redux است که می‌توانند در انتقال داده به reducer ها استفاده شوند. این اکشن‌ها شامل تنظیمات مختلف برای بخش‌های مختلف برنامه است.
export type Action =
  { type: "SET_VISIBLE_MODAL_RULES", payload: boolean }|
  { type: "SET_ACCEPTING_RULES", payload: boolean }
