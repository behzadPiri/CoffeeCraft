import {Appearance, Dimensions} from 'react-native';
import {normalizeFont} from '../normalize/Normalize.tsx';

export const {width, height} = Dimensions.get('window');

const Colors = {
  dark: {
    background: '#121212',
    primaryText: '#E0E0E0',
    secondaryText: '#A3A3A3',
    primary: '#D2691E',
    secondary: '#FFA07A',
    inputBackground: '#1E1E1E',
    icon: '#A3A3A3',
    button: '#D2691E',
    radio: '#FFA07A',
    checkbox: '#FFA07A',
    border: '#333333',
    shadow: 'rgba(0, 0, 0, 0.6)',
    modalBackground: '#1E1E1E',
  },
  light: {
    background: '#FFFFFF',
    primaryText: '#2E2E2E',
    secondaryText: '#5C5C5C',
    primary: '#8B4513',
    secondary: '#FF4500',
    inputBackground: '#F5F5F5',
    icon: '#5C5C5C',
    button: '#8B4513',
    radio: '#FF4500',
    checkbox: '#FF4500',
    border: '#DDDDDD',
    shadow: 'rgba(0, 0, 0, 0.2)',
    modalBackground: '#FFFFFF',
  },
};


export function useThemeColors() {
  const theme = Appearance.getColorScheme(); // Get theme directly without hook
  return theme === 'dark' ? Colors.dark : Colors.light;
}

export const Fonts = {
  font_8: normalizeFont(8),
  font_10: normalizeFont(10),
  font_12: normalizeFont(12),
  font_14: normalizeFont(14),
  font_16: normalizeFont(16),
  font_18: normalizeFont(18),
  font_24: normalizeFont(24),
  font_32: normalizeFont(24),
  font_48: normalizeFont(24),
};
