import {FC, memo} from 'react';
import {Modal} from 'react-native';
import {BaseModalProps} from './BaseModal.Type.ts';

// کامپوننت پایه Modal که قابلیت‌های اساسی مثل نمایش، مخفی شدن و شفافیت را مدیریت می‌کند
const BaseModal: FC<BaseModalProps> = memo(props => {
  const {children, visible, close} = props;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={close}>
      {children}
    </Modal>
  );
});

export default BaseModal;
