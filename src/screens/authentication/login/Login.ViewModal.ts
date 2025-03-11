import {useEffect, useRef, useState} from 'react';
import {Keyboard, ScrollView, TextInput} from 'react-native';
import {LoginModal} from './Login.Modal.ts';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenNavigationProp} from '../../../navigation/authentication/Authentication.Types.ts';
import {SubmitHandler} from 'react-hook-form';
import {UserLoginTypes} from '../../../common/types/UserLogin.Types.ts';

const useLoginViewModal = (): LoginModal => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [loading, setLoading] = useState<boolean>(false);

  const phoneInputRef = useRef<TextInput>(null);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleNavigation = () => {
    navigation.navigate('Register');
  };

  const onSubmitHandler: SubmitHandler<UserLoginTypes> = data => {
    setLoading(true);
    console.log('submitHandler', data);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Otp');
    }, 3000);
  };

  // مدیریت اسکرول هنگام باز شدن کیبورد
  const handleKeyboardShow = (event: any) => {
    const keyboardHeight = event.endCoordinates.height;
    scrollViewRef.current?.scrollTo({
      x: 0,
      y: keyboardHeight - 50,
      animated: true,
    });
  };

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardShow,
    );
    return () => keyboardShowListener.remove();
  }, []);

  return {
    loading,
    phoneInputRef,
    scrollViewRef,
    onSubmitHandler,
    handleNavigation,
  };
};

export default useLoginViewModal;
