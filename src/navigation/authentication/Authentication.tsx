
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './Authentication.Types.ts';
import {Login, Otp, Register} from '../../screens';

const Authentication = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
        gestureEnabled: true,
        animationDuration: 500,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{animation: 'slide_from_left'}}
      />
    </Stack.Navigator>
  );
};

export default Authentication;
