import {StyleProp, ViewStyle} from 'react-native';

export interface ButtonUIProps {
  loading?: boolean;
  isDualButton?: boolean;
  onPressPrimary?: () => void;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  leftButtonText?: string;
  rightButtonText?: string;
  singleButtonText?: string;
  leftButtonDisabled?: boolean;
  rightButtonDisabled?: boolean;
  singleButtonDisabled?: boolean;
  leftButtonStyle?: StyleProp<ViewStyle>;
  rightButtonStyle?: StyleProp<ViewStyle>;
  singleButtonStyle?: StyleProp<ViewStyle>;
}
