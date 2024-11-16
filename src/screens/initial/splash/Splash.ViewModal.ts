import {useEffect} from 'react';
import {SplashModal} from './Splash.Modal';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {SplashScreenNavigationProp} from '../../../navigation/initial/Initial.Types.ts';

const useSplashViewModal = (): SplashModal => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  const startApp = () => {
    navigation.dispatch(CommonActions.reset({
     index:0,
     routes:[{name:"Onboarding"}]
    }))
  };

  useEffect(() => {
    const timer = setTimeout(() => startApp(), 4000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return {};
};

export default useSplashViewModal;
