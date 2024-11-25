import {Modal} from 'react-native';
import {FC, memo} from 'react';
import {BaseModalProps} from './BaseModal.Type.ts';
import useBaseModalViewModal from './BaseModal.ViewModal.ts';


// کامپوننت پایه Modal که قابلیت‌های اساسی مثل نمایش، مخفی شدن و شفافیت را مدیریت می‌کند
const BaseModal: FC<BaseModalProps> = memo(props => {

  const {
    children,         // محتوای داخلی که داخل Modal نمایش داده می‌شود
    showModal,        // وضعیت نمایش یا عدم نمایش Modal
    transparent = false, // مشخص می‌کند که پس‌زمینه شفاف باشد یا خیر
    setShowModal,     // تابعی برای تغییر وضعیت نمایش Modal
  } = props;

  // دریافت توابع مدیریت Modal از ViewModal
  const {handlerCloseModal} = useBaseModalViewModal({showModal, setShowModal});

  return (
    <Modal
      visible={showModal}
      animationType="slide"
      transparent={transparent}
      onRequestClose={handlerCloseModal} // بسته شدن Modal هنگام فشردن دکمه برگشت (Back) در اندروید
      >
      {children}
    </Modal>
  );
});

export default BaseModal;
