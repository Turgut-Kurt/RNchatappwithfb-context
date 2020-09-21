import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login, SignUp, Main} from '../containers';
import {color} from '../utility/';
const Stack = createStackNavigator();
function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Login'}
        headerMode="screen"
        screenOptions={{
          headerShown: true,
          headerStyle: {backgroundColor: color.DARK_GRAY},
          headerTintColor: color.WHITE,
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
        }}>
        <Stack.Screen
          name={'Main'}
          component={Main}
          options={{
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name={'Login'}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'SignUp'}
          component={SignUp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;
