import {SET_ACCEPTING_RULES, SET_VISIBLE_MODAL_RULES} from '../types/Redux.Types.ts';
import {Action} from '../../common/reduxTypes/Actions.Types.ts';

// عملکرد برای تنظیم وضعیت نمایش مودال
export const setVisibleModal = (value: boolean) => (dispatch: (value: Action) => void) => {
  dispatch({
    type: SET_VISIBLE_MODAL_RULES,
    payload: value
  });
};

// عملکرد برای تنظیم وضعیت تایید یا عدم تایید قوانین و مقررات
export const setAcceptingRules = (value: boolean) => (dispatch: (value: Action) => void) => {
  dispatch({
    type: SET_ACCEPTING_RULES,
    payload: value
  });
};
