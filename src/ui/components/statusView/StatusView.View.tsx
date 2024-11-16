import {FC, memo} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import {ButtonUI, TextUI} from '../../index.tsx';
import styles from './StatusView.Styles.tsx';
import {StateViewProps} from './StatusView.Types.ts';
import useStateViewModel from './StatusView.ViewModal.ts';

const StatusViewView: FC<StateViewProps> = memo(props => {
  const {
    speed,
    styleText,
    lottieFile,
    textStatus,
    styleButton,
    loop = true,
    retry=false,
    styleContainer,
    disabled=false,
    styleLottieFile,
    autoPlay = true,
    styleTextWrapper,
    styleLottieFileWrapper,
  } = props;

  const {handlePress}=useStateViewModel(props)

  return (
    <View style={[styles.container, styleContainer]}>
      <View style={[styles.lottieFileWrapper, styleLottieFileWrapper]}>
        <LottieView
          source={lottieFile}
          autoPlay={autoPlay}
          loop={loop}
          speed={speed || 1}
          resizeMode="contain"
          style={[styles.lottieFile, styleLottieFile]}
        />
      </View>

      <View style={[styles.textWrapper, styleTextWrapper]}>
        <TextUI text={textStatus} style={[styles.text, styleText]} />
      </View>

      {retry && (
        <ButtonUI
          singleButtonStyle={[styles.buttonWrapper,styleButton]}
          singleButtonText={'تلاش مجدد'}
          singleButtonDisabled={disabled}
          onPressPrimary={handlePress}
        />
      )}
    </View>
  );
});

export default StatusViewView;
