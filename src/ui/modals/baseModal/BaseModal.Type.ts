import {ReactNode} from 'react';

// نوع‌بندی Props برای کامپوننت BaseModal
export interface BaseModalProps {
  showModal: boolean; // وضعیت نمایش یا عدم نمایش Modal
  transparent?: boolean; // آیا پس‌زمینه Modal شفاف است؟
  setShowModal: (value: boolean) => void; // تابع تغییر وضعیت نمایش Modal
  children?: ReactNode; // محتوای داخلی Modal
}
