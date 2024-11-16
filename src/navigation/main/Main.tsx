import {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Initial} from '../index.tsx';

const Main: FC = () => {
  type RootStackParamList = {
    Initial: undefined;
  };

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}} initialRouteName="Initial">
        <Stack.Screen name="Initial" component={Initial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
