import {StyleProp, ViewStyle} from 'react-native';

export interface StateViewProps {
  textStatus: string;
  onPress: () => void;
  styleContainer?: StyleProp<ViewStyle>;
  styleLottieFileWrapper?: StyleProp<ViewStyle>;
  styleLottieFile?: StyleProp<ViewStyle>;
  styleTextWrapper?: StyleProp<ViewStyle>;
  styleText?: StyleProp<ViewStyle>;
  styleButton?: StyleProp<ViewStyle>;
  lottieFile: string;
  retry?: boolean;
  disabled?: boolean;
  speed?: number;
  autoPlay?: boolean;
  loop?: boolean;
}
