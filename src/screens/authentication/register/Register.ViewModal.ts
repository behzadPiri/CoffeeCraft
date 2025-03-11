import {useEffect, useRef, useState} from 'react';
import { BackHandler, Keyboard, ScrollView, TextInput} from 'react-native';
import {RegisterModal} from './Register.Modal.ts';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenNavigationProp} from '../../../navigation/authentication/Authentication.Types.ts';
import {SubmitHandler} from 'react-hook-form';
import {UserRegisterTypes} from '../../../common/types/UserRegister.Types.ts';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store/Store.ts';
import {setVisibleModal,setAcceptingRules} from '../../../redux/actions/SetVisibleModal.tsx';

const useRegisterViewModal = (): RegisterModal => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
const dispatch = useDispatch<AppDispatch>();
const {acceptingRules}=useSelector((state: RootState) => state.ModalApp);

  const [loading, setLoading] = useState<boolean>(false);


  const nameInputRef = useRef<TextInput>(null);
  const phoneInputRef = useRef<TextInput>(null);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleNavigation = () => {
    navigation.goBack();
  };

  const handlerAcceptingRules = () => {
    dispatch(setAcceptingRules(!acceptingRules))
  };

  const handlerVisibleModal = () => {
    dispatch(setVisibleModal(true))
  };

  const onSubmitHandler: SubmitHandler<UserRegisterTypes> = data => {
    setLoading(true);
    console.log("submitHandler", data);
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

  // useEffect(() => {
  //   const backActionNavigate = () => {
  //     navigation.goBack();
  //     return true;
  //   };
  //   const backActionAnimation = () => {
  //     setRulesModalShown(false);
  //     return true;
  //   };
  //
  //   const backHandlerNavigation = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backActionNavigate,
  //   );
  //
  //   const backHandlerAnimation = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backActionAnimation,
  //   );
  //   BackHandler.
  //   return () => {
  //     backHandlerNavigation.remove();
  //     backHandlerAnimation.remove();
  //   };
  // }, []);
  //
  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardShow,
    );
    return () => keyboardShowListener.remove();
  }, []);

  return {
    loading,
    nameInputRef,
    phoneInputRef,
    scrollViewRef,
    onSubmitHandler,
    handleNavigation,
    handlerVisibleModal,
    handlerAcceptingRules,
  };
};

export default useRegisterViewModal;
