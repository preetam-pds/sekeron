import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../route-names/RouteName';
import Login from '../../pages/user-management/login/Login';
import Registration from '../../pages/user-management/create-user/registeration/Registration';

const AuthenticationStack:any = createNativeStackNavigator();

const AuthenticationStackNavigator=()=>{
    return (
      <AuthenticationStack.Navigator
        initialRouteName={routes.login}
        screenOptions={{
          headerShown: false,
        }}>
        <AuthenticationStack.Screen
          name={routes.login}
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <AuthenticationStack.Screen
          name={routes.registration}
          component={Registration}
          options={{
            headerShown: false,
          }}
        />
      </AuthenticationStack.Navigator>
    );
}
export default AuthenticationStackNavigator;