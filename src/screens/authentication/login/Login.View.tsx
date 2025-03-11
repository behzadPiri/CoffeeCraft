import {memo} from 'react';
import {useForm} from 'react-hook-form';
import styles from './Login.Styles.tsx';
import Images from '../../../content/images/images.tsx';
import useRegisterViewModal from './Login.ViewModal.ts';
import {FieldName} from '../../../common/types/FieldName.ts';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {ButtonUI, HeaderSection, InputUI, TextUI} from '../../../ui';
import {PhoneValidationRules} from '../../../common/validations';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store/Store.ts';
import {height, width} from '../../../content/Themes/Themes.tsx';
import {setVisibleModal} from '../../../redux/actions/SetVisibleModal.tsx';
import {UserLoginTypes} from '../../../common/types/UserLogin.Types.ts';

const Login = memo(() => {
  const {visibleModal} = useSelector((state: RootState) => state.ModalApp);
  const dispatch = useDispatch<AppDispatch>();

  const {
    loading,
    phoneInputRef,
    scrollViewRef,
    onSubmitHandler,
    handleNavigation,
  } = useRegisterViewModal();

  // استفاده از فرم‌های هوک برای مدیریت فرم
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    trigger,
  } = useForm<UserLoginTypes>();

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
              title={'مسیر حرفه‌ای شدن در دنیای قهوه!'}
              image={Images.login}
              style={styles.headerSection}
            />

            {/* محتوای اصلی */}
            <View style={styles.body}>
              <TextUI
                text={'خوش آمدید به دنیای کافه'}
                style={styles.title}
                bold
              />
              <TextUI
                numberOfLines={2}
                text={
                  'برای شروع سفرتان در دنیای قهوه، لطفاً شماره همراهتان را وارد کنید.'
                }
                style={styles.subtitle}
              />

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

              <View style={styles.buttonWrapper}>
                <ButtonUI
                  loading={loading}
                  singleButtonText={'شروع سفر من'}
                  singleButtonDisabled={!isValid || loading}
                  onPressPrimary={handleSubmit(onSubmitHandler)}
                />

                <View style={styles.createAccountWrapper}>
                  <TextUI text={'حساب کاربری ندارید؟'} />
                  <Pressable onPress={handleNavigation} hitSlop={10}>
                    <TextUI
                      text={`همین حالا یکی بساز و حرفه‌ای شو!`}
                      style={styles.createAccountText}
                    />
                  </Pressable>
                </View>
              </View>
            </View>

            <Modal
              visible={visibleModal}
              animationType={'slide'}
              transparent
              onRequestClose={() => dispatch(setVisibleModal(false))}>
              <SafeAreaView
                style={{
                  flexGrow:1,
                  height: height,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0,0,0,0.9)',
                }}>
                <View
                  style={{
                    width: width,
                    height: height,
                    backgroundColor: 'gray',
                  }}
                />
              </SafeAreaView>
            </Modal>

          </ScrollView>

          {/*<BaseModal>*/}
          {/*  <RulesModal />*/}
          {/*</BaseModal>*/}

        </View>

      </KeyboardAvoidingView>
    </>
  );
})

export default Login;
