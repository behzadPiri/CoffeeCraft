import {useEffect} from 'react';
import {SplashModal} from './Splash.Modal';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {SplashScreenNavigationProp} from '../../../navigation/initial/Initial.Types.ts';
import {useThemeColors} from '../../../content/Themes/Themes.tsx';

const useSplashViewModal = (): SplashModal => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const Colors = useThemeColors();

  const lottieFileColor = [
    {
      keypath: 'lottiesteam',
      color: Colors.primary,
    },
    {
      keypath: 'lottiesteam 2',
      color: Colors.primary,
    },
    {
      keypath: 'lottiesteam 3',
      color: Colors.primary,
    },
    {
      keypath: 'Coffeecup Comp 1',
      color: Colors.primary,
    },
  ];

  const startApp = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Onboarding'}],
      }),
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => startApp(), 4000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return {
    lottieFileColor,
  };
};

export default useSplashViewModal;
