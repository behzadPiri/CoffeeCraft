import {SET_VISIBLE_MODAL_RULES,SET_ACCEPTING_RULES} from '../types/Redux.Types'; // وارد کردن اکشن‌ها
import {Action} from '../../common/reduxTypes/Actions.Types.ts';
import {VisibleModalTypes} from '../../common/reduxTypes/VisibleModal.Types.ts';

// وضعیت اولیه ردیوسر
const initialState: VisibleModalTypes = {
  visibleModal: false,
  acceptingRules:false
};

// ردیوسر مربوط به احراز هویت
const ModalReducer = (
  state: VisibleModalTypes = initialState,
  action: Action,
) => {
  switch (action.type) {
    case SET_VISIBLE_MODAL_RULES:
      return {...state, visibleModal: action.payload};
    case SET_ACCEPTING_RULES:
      return {...state, acceptingRules: action.payload};
    default:
      return state;
  }
};

export default ModalReducer;
