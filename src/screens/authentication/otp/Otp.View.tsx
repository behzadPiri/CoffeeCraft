import {SafeAreaView, View} from 'react-native';
import styles from './Otp.Styles.tsx';
import useOtpViewModal from './Otp.ViewModal.ts';
import Images from '../../../content/images/images.tsx';
import {ButtonUI, HeaderSection, TextUI} from '../../../ui';


const Otp = () => {
  const { handleNavigation} = useOtpViewModal();

  return (
    <SafeAreaView style={styles.container}>
      {/* تصویر پس زمینه */}
      <HeaderSection
        title={'مسیر حرفه‌ای شدن در دنیای قهوه'}
        image={Images.otp}
      />

      {/* محتوای اصلی */}
      <View style={styles.body}>
        <TextUI text={'خوش آمدید به دنیای کافه'} style={styles.title} bold />
        <TextUI
          numberOfLines={3}
          text={
            'برای شروع سفرتان در دنیای قهوه، لطفاً شماره همراهتان را وارد کنید.'
          }
          style={styles.subtitle}
        />

        <View style={styles.buttonWrapper}>
          <ButtonUI singleButtonText={'ورود'} />
          <View style={styles.createAccountTextWrapper}>
            <TextUI text={'حساب کاربری ندارید؟'} />
            <TextUI
              text={`  همین حالا یکی بساز و حرفه‌ای شو!`}
              style={styles.createAccountText}
              onPressText={handleNavigation}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;
