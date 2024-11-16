import React, {memo} from 'react';
import {Appearance, SafeAreaView, StatusBar} from 'react-native';
import {Main} from './navigation';
import {useThemeColors} from './content/Themes/Themes.tsx';

const App = () => {
  const Colors = useThemeColors();
  const theme = Appearance.getColorScheme();
  return (
    <>
      <StatusBar
        barStyle={theme == 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.background}
      />
      <SafeAreaView style={{flex: 1}}>
        <MemoizedMain />
      </SafeAreaView>
    </>
  );
};

const MemoizedMain = memo(Main);

export default App;
