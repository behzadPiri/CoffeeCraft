import {FC, memo} from 'react';
import {Animated, Image, View} from 'react-native';
import styles from './HeaderSection.Styles.tsx';
import {HeaderSectionProps} from './HeaderSection.Types.ts';
import useHeaderSectionViewModal from './HeaderSection.ViewModal.ts';

const HeaderSection: FC<HeaderSectionProps> = memo(props => {
  const {title, image, style} = props;
  const {textOpacity, textTranslateY} = useHeaderSectionViewModal();

  return (
    <View style={[styles.imageWrapper, style]}>
      <Image
        style={styles.image}
        source={image}
        blurRadius={1}
        resizeMode={'cover'}
      />

      <Animated.View
        style={[
          styles.textImageWrapper,
          {transform: [{translateY: textTranslateY}]},
        ]}>
        <Animated.Text style={[styles.textImage, {opacity: textOpacity}]}>
          {title}
        </Animated.Text>
      </Animated.View>

      <View style={styles.footer} />
    </View>
  );
});

export default HeaderSection;
