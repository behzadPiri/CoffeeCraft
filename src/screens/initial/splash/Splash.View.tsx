import {SafeAreaView} from 'react-native';
import useSplashViewModal from './Splash.ViewModal.ts';
import styles from './Splash.Styles.tsx';
import LottieFiles from '../../../content/lottieFiles/lottieFiles.tsx';
import LottieView from 'lottie-react-native';
import {TextUI} from '../../../ui';

const Splash = () => {
  const {} = useSplashViewModal();

  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        source={LottieFiles.splash}
        autoPlay
        resizeMode="contain"
        loop
        style={styles.lottieWrapper}
      />
      <TextUI text={'با کافه هنر هر لحظه‌ی شما خاص‌تر می‌شود!'} />
    </SafeAreaView>
  );
};

export default Splash;
