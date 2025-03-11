import { RefObject} from 'react';
import {ScrollView, TextInput} from 'react-native';
import {UserRegisterTypes} from '../../../common/types/UserRegister.Types.ts';

export interface RegisterModal {
  loading:boolean
  handleNavigation: () => void;
  handlerVisibleModal: () => void;
  handlerAcceptingRules: () => void;
  nameInputRef: RefObject<TextInput>;
  phoneInputRef: RefObject<TextInput>;
  scrollViewRef: RefObject<ScrollView>;
  onSubmitHandler:(data:UserRegisterTypes) => void;
}
