import Images from '../content/images/images.tsx';
import {ImageProps} from 'react-native';

export interface OnboardingSlideDataProps {
  id: number;
  image: ImageProps;
  title: string;
}

export const OnboardingSlideData: Array<OnboardingSlideDataProps> = [
  {
    id: 1,
    image: Images.onboardingScreen1,
    title:
      'از سفارش قهوه تا یادگیری حرفه‌ای‌ترین مهارت‌های باریستا، همه ‌چیز در دستان شماست!',
  },
  {
    id: 2,
    image: Images.onboardingScreen2,
    title:
      'از قهوه‌های داغ تا نوشیدنی‌های خنک، با منوی متنوع ما، سلیقه شما همیشه اولویت است.',
  },
  {
    id: 3,
    image: Images.onboardingScreen3,
    title:
      'آموزش مهارت‌های حرفه‌ای و دسترسی به بهترین اقلام مورد نیاز کافه‌داری در اپلیکیشن ما.',
  },
  {
    id: 4,
    image: Images.onboardingScreen4,
    title: 'رزومه‌ای حرفه‌ای ایجاد کنید و به شغل رویایی خود در کافه‌ها برسید.',
  },
];
