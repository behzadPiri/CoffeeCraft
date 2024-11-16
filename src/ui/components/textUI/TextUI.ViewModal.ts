import {useCallback} from 'react';
import {TextUIProps} from './TextUI.Types.ts';

const useTextUI = (props: TextUIProps) => {
  const {text, onPressText} = props;

  const handlePress = useCallback(() => {
    onPressText&& onPressText(text);
  }, [onPressText, text]);

  return {
    handlePress,
  };
};

export default useTextUI;
