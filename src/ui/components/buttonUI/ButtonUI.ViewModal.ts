import {useCallback} from 'react';
import {ButtonUIProps} from './ButtonUI.Types';

const useButtonViewModel = (props: ButtonUIProps) => {
  const {onPressPrimary, onPressLeft, onPressRight} = props;

  const handlePressLeft = useCallback(() => {
    onPressLeft && onPressLeft();
  }, [onPressLeft]);

  const handlePressRight = useCallback(() => {
    onPressRight && onPressRight();
  }, [onPressRight]);

  const handlePressPrimary = useCallback(() => {
    onPressPrimary && onPressPrimary();
  }, [onPressPrimary]);

  return {
    handlePressLeft,
    handlePressRight,
    handlePressPrimary,
  };
};

export default useButtonViewModel;
