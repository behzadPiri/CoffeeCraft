import {FC, memo} from 'react';
import {Pressable, View} from 'react-native';
import styles from './ButtonUI.Styles';
import {TextUI} from '../../index';
import {ButtonUIProps} from './ButtonUI.Types';
import {useThemeColors} from '../../../content/Themes/Themes';
import useButtonViewModel from './ButtonUI.ViewModal.ts';
import LottieView from 'lottie-react-native';
import lottieFiles from '../../../content/lottieFiles/lottieFiles.tsx';

const ButtonUI: FC<ButtonUIProps> = memo(props => {
  const Colors = useThemeColors();

  const {
    loading,
    isDualButton,
    singleButtonStyle,
    leftButtonDisabled = false,
    leftButtonStyle,
    rightButtonDisabled = false,
    rightButtonStyle,
    singleButtonDisabled = false,
    leftButtonText,
    rightButtonText,
    singleButtonText,
  } = props;

  const {handlePressLeft, handlePressPrimary, handlePressRight} =
    useButtonViewModel(props);

  return (
    <>
      {isDualButton ? (
        <View style={styles.dualButtonWrapper}>
          <Pressable
            android_ripple={{color: Colors.android_ripple, foreground: true}}
            onPress={handlePressRight}
            disabled={rightButtonDisabled}
            style={[
              styles.buttonWrapper,
              styles.rightButton,
              rightButtonStyle,
              rightButtonDisabled && styles.buttonDisable,
            ]}
            pointerEvents="box-only">
            {loading ? (
              <LottieView
                loop
                autoPlay
                style={styles.loading}
                source={lottieFiles.loadingButton}
              />
            ) : (
              <TextUI style={styles.dualButtonText} text={rightButtonText} />
            )}
          </Pressable>
          <Pressable
            android_ripple={{color: Colors.android_ripple, foreground: true}}
            disabled={leftButtonDisabled}
            onPress={handlePressLeft}
            style={[
              styles.buttonWrapper,
              styles.leftButton,
              leftButtonStyle,
              leftButtonDisabled && styles.buttonDisable,
            ]}
            pointerEvents="box-only">
            <TextUI style={styles.dualButtonText} text={leftButtonText} />
          </Pressable>
        </View>
      ) : (
        <Pressable
          android_ripple={{color: Colors.android_ripple, foreground: true}}
          disabled={singleButtonDisabled}
          onPress={handlePressPrimary}
          style={[
            styles.container,
            singleButtonStyle,
            singleButtonDisabled && styles.buttonDisable,
          ]}
          pointerEvents="box-only">
          {loading ? (
            <LottieView
              loop
              autoPlay
              style={styles.loading}
              source={lottieFiles.loadingButton}
            />
          ) : (
            <TextUI style={styles.textButton} text={singleButtonText} />
          )}
        </Pressable>
      )}
    </>
  );
});

export default ButtonUI;
