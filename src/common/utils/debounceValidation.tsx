import {FieldName} from '../types/FieldName.ts';


let debounceTimer: NodeJS.Timeout | null = null;

export const debounceValidation = (
  fieldName: string,
  trigger: (field: string) => Promise<boolean>,
  delay: number = 1000 // زمان تاخیر در میلی‌ثانیه
) => {
  if (debounceTimer) clearTimeout(debounceTimer);

  debounceTimer = setTimeout(async () => {
    await trigger(fieldName); // عملیات اعتبارسنجی
  }, delay);
};
