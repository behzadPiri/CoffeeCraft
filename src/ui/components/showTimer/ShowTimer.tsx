import React, {useEffect} from 'react';
import {Pressable, View} from 'react-native';
import styles from './ShowTimer.Styles.tsx';
import {TextUI} from '../../index.tsx';

import {useThemeColors} from '../../../content/Themes/Themes.tsx';

interface propsShowTimer {
  minutes: number; //دقایق باقی‌مانده
  setMinutes: (value: number) => void; //تابع تنظیم دقایق باقی‌مانده
  seconds: number; // ثانیه‌های باقی‌مانده
  setSeconds: (value: number) => void; // تابع تنظیم ثانیه‌های باقی‌مانده
  loadingTimer: boolean; // نشان می‌دهد آیا تایمر در حال بارگیری است یا نه
  GetOtpCodeAgain: () => void; // تابعی برای مدیریت ارسال مجدد کد
}

//کامپوننت ShowTimer یک تایمر را برای شمارش معکوس برای ارسال مجدد کد نشان می‌دهد.
const ShowTimer = (props: propsShowTimer) => {
  const Colors = useThemeColors();
  const {
    minutes,
    setMinutes,
    loadingTimer,
    seconds,
    setSeconds,
    GetOtpCodeAgain,
  } = props;

  // برای مدیریت شمارش معکوس تایمر.
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <View style={styles.timerWrapper}>
      {/* نمایش زمان باقی‌مانده */}
      <View style={styles.timer}>
        {(minutes > 0 || seconds > 0) && (<TextUI/>
          // <TextUI style={styles.text}>
          //   زمان باقیمانده: {` `}
          //   <TextUI style={styles.text}>
          //     {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          //   </TextUI>
          // </TextUI>
        )}
      </View>

      {/* دکمه ارسال مجدد کد */}
      <Pressable
        disabled={(minutes > 0 && seconds > 0) || loadingTimer}
        onPress={GetOtpCodeAgain}>
        <TextUI
          style={[
            styles.text,
            minutes == 0 && seconds == 0 && {color: Colors.disabled},
          ]}
          text={` ارسال مجدد کد`}
        />
      </Pressable>
    </View>
  );
};

export default ShowTimer;
