import {BaseModalProps} from './BaseModal.Type.ts';
import {BaseModalModal} from './BaseModal.Modal.ts';
import {useCallback} from 'react';

// بسته شدن Modal هنگام فشردن دکمه برگشت (Back) در اندروید
const useBaseModalViewModal = ({
  showModal, // وضعیت نمایش Modal
  setShowModal, // تابعی برای تغییر وضعیت نمایش Modal
}: BaseModalProps): BaseModalModal => {

  // تابعی که مسئول بستن Modal است
  const handlerCloseModal = useCallback(() => {
    setShowModal(false); // بستن Modal با تنظیم مقدار false
  }, [showModal]); // وابستگی به مقدار showModal برای جلوگیری از رندر غیرضروری

  return {
    handlerCloseModal,
  };
};

export default useBaseModalViewModal;
