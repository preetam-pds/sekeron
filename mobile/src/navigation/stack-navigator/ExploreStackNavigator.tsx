import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../../pages/search/Search';
import {routes} from '../route-names/RouteName';

const ExploreStack = createNativeStackNavigator();
const ExploreStackNavigator = () => {
  return (
    <ExploreStack.Navigator
      initialRouteName={routes.explore}
      screenOptions={{
        headerShown: true,
      }}>
      <ExploreStack.Screen
        name={routes.explore}
        component={Search}
        options={{
          headerShown: false,
        }}
      />
    </ExploreStack.Navigator>
  );
};

export default ExploreStackNavigator;
