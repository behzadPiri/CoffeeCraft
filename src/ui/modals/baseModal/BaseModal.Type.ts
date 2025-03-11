import {ReactNode} from 'react';

// نوع‌بندی Props برای کامپوننت BaseModal
export interface BaseModalProps {
  children: ReactNode;
  visible: boolean;
  close: () => void;
}
