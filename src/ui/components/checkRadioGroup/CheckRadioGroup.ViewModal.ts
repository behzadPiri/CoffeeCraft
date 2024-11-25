import {useCallback} from 'react';
import {CheckRadioGroupProps} from './CheckRadioGroup.Types.ts';
import {CheckRadioGroupModal} from './CheckRadioGroup.Modal.ts';

/*مدیریت منطق انتخاب و انیمیشن تغییر رنگ.*/
const useCheckRadioGroupViewModal = (props: CheckRadioGroupProps,): CheckRadioGroupModal => {

  const {onPressSelection, selectBox} = props;

  // متد مدیریت انتخاب selection
  const handlePress = useCallback(() => {
    onPressSelection(!selectBox); // تغییر مقدار انتخاب
  }, [onPressSelection, selectBox]);


  return {
    handlePress,
  };
};

export default useCheckRadioGroupViewModal;
