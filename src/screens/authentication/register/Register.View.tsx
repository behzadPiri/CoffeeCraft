import {useForm} from 'react-hook-form';
import styles from './Register.Styles.tsx';
import Images from '../../../content/images/images.tsx';
import useRegisterViewModal from './Register.ViewModal.ts';
import {FieldName} from '../../../common/types/FieldName.ts';
import {UserRegisterTypes} from '../../../common/types/UserRegister.Types.ts';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {
  ButtonUI,
  CheckRadioGroup,
  HeaderSection,
  InputUI,
  TextUI,
} from '../../../ui';
import {
  FullNameValidationRules,
  PhoneValidationRules,
} from '../../../common/validations';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store/Store.ts';
import {height, width} from '../../../content/Themes/Themes.tsx';
import {setVisibleModal} from '../../../redux/actions/SetVisibleModal.tsx';

const Register = () => {
  const {acceptingRules, visibleModal} = useSelector(
    (state: RootState) => state.ModalApp,
  );
  const dispatch = useDispatch<AppDispatch>();

  const {
    loading,
    nameInputRef,
    phoneInputRef,
    scrollViewRef,
    onSubmitHandler,
    handleNavigation,
    handlerVisibleModal,
    handlerAcceptingRules,
  } = useRegisterViewModal();

  // استفاده از فرم‌های هوک برای مدیریت فرم
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    trigger,
  } = useForm<UserRegisterTypes>();

  return (
    <>
      <KeyboardAvoidingView
        contentContainerStyle={styles.Keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.Keyboard}>
        <View style={styles.container}>
          <ScrollView
            ref={scrollViewRef}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollWrapper}
            keyboardShouldPersistTaps="handled">
            {/* تصویر پس زمینه */}
            <HeaderSection
              title={'سفری پر از عطر قهوه و تجربه‌های نو!'}
              image={Images.register}
              style={styles.headerSection}
            />

            {/* محتوای اصلی */}
            <View style={styles.body}>
              <TextUI
                text={'حساب کاربری خود را بسازید!'}
                style={styles.title}
                bold
              />
              <TextUI
                numberOfLines={2}
                text={
                  'ثبت‌نام کنید و به دنیای حرفه‌ای‌ها بپیوندید! آموزش تخصصی، مدیریت سفارش‌ها و امکانات ویژه در انتظار شماست.'
                }
                style={styles.subtitle}
              />

              {/* کنترل فرم برای ورودی متنی مربوط به شماره موبایل */}
              <InputUI
                trigger={trigger}
                control={control}
                ref={nameInputRef}
                editable={!loading}
                hint={'نام و نام خانوادگی'}
                keyboardType={'default'}
                name={FieldName.FullName}
                rulesValid={FullNameValidationRules}
                containerStyle={styles.inputWrapper}
              />
              {errors.fullName && (
                <TextUI
                  text={errors.fullName.message}
                  style={styles.errorInput}
                />
              )}

              {/* کنترل فرم برای ورودی متنی مربوط به شماره موبایل */}
              <InputUI
                maxLength={11}
                trigger={trigger}
                control={control}
                ref={phoneInputRef}
                editable={!loading}
                hint={'شماره موبایل'}
                keyboardType={'phone-pad'}
                name={FieldName.PhoneNumber}
                rulesValid={PhoneValidationRules}
                containerStyle={styles.inputWrapper}
              />
              {errors.phoneNumber && (
                <TextUI
                  text={errors.phoneNumber.message}
                  style={styles.errorInput}
                />
              )}

              <View style={styles.rulesWrapper}>
                <CheckRadioGroup
                  type={'checkBox'}
                  disabled={loading}
                  selectBox={acceptingRules}
                  onPressSelection={handlerAcceptingRules}
                />
                <Pressable
                  style={styles.rules}
                  onPress={handlerVisibleModal}
                  pointerEvents={'box-only'}>
                  <TextUI
                    style={styles.rulesText}
                    text={`قوانین و مقررات`}
                    bold
                  />
                  <TextUI text={'را مطالعه کردم و قبول میکنم.'} />
                </Pressable>
              </View>

              <View style={styles.buttonWrapper}>
                <ButtonUI
                  loading={loading}
                  singleButtonText={'شروع سفر من'}
                  singleButtonDisabled={!isValid || loading}
                  onPressPrimary={handleSubmit(onSubmitHandler)}
                />
                <View style={styles.createAccountWrapper}>
                  <TextUI text={'قبلاً ثبت‌نام کرده‌اید؟'} />
                  <Pressable onPress={handleNavigation} hitSlop={10}>
                    <TextUI text={`  ورود`} style={styles.createAccountText} />
                  </Pressable>
                </View>
              </View>
            </View>
          </ScrollView>

          {/*<BaseModal>*/}
          {/*  <RulesModal />*/}
          {/*</BaseModal>*/}


        </View>
        <Modal
          visible={visibleModal}
          animationType={'slide'}
          transparent={true}

          onRequestClose={() => dispatch(setVisibleModal(false))}>
          <SafeAreaView style={{  flexGrow: 1,

            height:height,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',}}>
            <View
              style={{
                width: width,
                height: height,
                backgroundColor: 'white',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}/>
          </SafeAreaView>
        </Modal>
      </KeyboardAvoidingView>

    </>
  );
};

export default Register;
