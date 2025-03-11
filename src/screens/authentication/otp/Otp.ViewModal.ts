import {useNavigation} from '@react-navigation/native';
import {LoginScreenNavigationProp} from '../../../navigation/authentication/Authentication.Types.ts';
import {OtpModal} from './Otp.Modal.ts';

const useOtpViewModal = (): OtpModal => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleNavigation = () => {
    navigation.navigate('Register');
  };
  return {
    handleNavigation,
  };
};

export default useOtpViewModal;
