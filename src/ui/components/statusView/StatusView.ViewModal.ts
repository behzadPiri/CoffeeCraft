import {useCallback} from 'react';
import {StateViewProps} from './StatusView.Types.ts';

const useStateViewModel = (props: StateViewProps) => {
  const {onPress} = props;

  const handlePress = useCallback(() => {
    onPress && onPress();
  }, [onPress]);

  return {
    handlePress,
  };
};

export default useStateViewModel;
