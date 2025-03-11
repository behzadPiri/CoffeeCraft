import {RulesModal} from './RulesModal.Modal.ts';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store/Store.ts';
import {
  setAcceptingRules,
  setVisibleModal,
} from '../../../redux/actions/SetVisibleModal.tsx';

const useRulesViewModal = (): RulesModal => {

  const dispatch = useDispatch<AppDispatch>();
  const {acceptingRules} = useSelector((state: RootState) => state.ModalApp);

  const handlerButton = () => dispatch(setVisibleModal(false));
  const handlerAcceptingRules = () =>
    dispatch(setAcceptingRules(!acceptingRules));

  return {
    handlerButton,
    handlerAcceptingRules,
  };
};

export default useRulesViewModal;
