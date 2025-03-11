import {Appearance, SafeAreaView, StatusBar} from 'react-native';
import {Main} from './navigation';
import {useThemeColors} from './content/Themes/Themes.tsx';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store/Store.ts';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Toasts} from '@backpackapp-io/react-native-toast';

const App = () => {
  const Colors = useThemeColors();
  const theme = Appearance.getColorScheme();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <SafeAreaProvider>

        <SafeAreaView style={{flex: 1, backgroundColor: '#181818'}}>
          <StatusBar
            barStyle={theme == 'dark' ? 'light-content' : 'dark-content'}
            backgroundColor={Colors.background}
          />
          <Main />
          <Toasts/>
        </SafeAreaView>
      </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
