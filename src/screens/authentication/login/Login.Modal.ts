import { RefObject} from 'react';
import {ScrollView, TextInput} from 'react-native';
import {UserLoginTypes} from '../../../common/types/UserLogin.Types.ts';

export interface LoginModal {
  loading:boolean
  handleNavigation: () => void;
  phoneInputRef: RefObject<TextInput>;
  scrollViewRef: RefObject<ScrollView>;
  onSubmitHandler:(data:UserLoginTypes) => void;
}
