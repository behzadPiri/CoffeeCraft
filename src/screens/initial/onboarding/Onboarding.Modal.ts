import {AnimatedStyle} from 'react-native-reanimated';
import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export interface OnboardingModal {
  currentIndex: number;
  animatedImageStyle: AnimatedStyle<ImageStyle>;
  animatedTextStyle: AnimatedStyle<TextStyle>;
  animatedShadowStyle: AnimatedStyle<ViewStyle>;
  handleNext: () => void;
}
