import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './Main.Types.ts';
import {Authentication, Initial} from '../index.tsx';

const Main = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Authentication">
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="Authentication" component={Authentication} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
