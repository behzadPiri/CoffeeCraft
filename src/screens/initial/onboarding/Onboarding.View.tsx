import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';
import styles from './Onboarding.Styles.tsx';
import {OnboardingSlideData} from '../../../utils/OnboardingSlideData.tsx';
import {ButtonUI, TextUI} from '../../../ui';
import useOnboardingViewModal from './Onboarding.ViewModal.ts';

const Onboarding = () => {
  const {
    handleNext,
    currentIndex,
    animatedTextStyle,
    animatedImageStyle,
    animatedShadowStyle,
  } = useOnboardingViewModal();

  return (
    <View style={styles.container}>
      {/* بخش تصویر */}
      <View style={styles.SliderWrapper}>
        <Animated.View style={[styles.sliderImageWrapper, animatedShadowStyle]}>
          <Animated.Image
            source={OnboardingSlideData[currentIndex].image}
            style={[styles.image, animatedImageStyle]}
          />
        </Animated.View>

        {/* بخش متن */}
        <View style={styles.sliderTextWrapper}>
          <TextUI
            style={[styles.text, animatedTextStyle]}
            text={OnboardingSlideData[currentIndex].title}
            numberOfLines={3}
          />
          <View style={styles.paginationWrapper}>
            {OnboardingSlideData?.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.pagination,
                  currentIndex === index && styles.paginationDisable,
                ]}
              />
            ))}
          </View>
        </View>
      </View>

      {/* دکمه "بعدی" */}
      <View style={styles.footerWrapper}>
        <ButtonUI
          singleButtonText={
            currentIndex < OnboardingSlideData.length - 1 ? 'بعدی' : 'پایان'
          }
          onPressPrimary={handleNext}
        />
      </View>
    </View>
  );
};

export default Onboarding;
