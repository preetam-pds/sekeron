import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HeaderWithBackButton from '../../common-components/header-with-back-button/HeaderWithBackButton';
import EditProfile from '../../pages/profile/edit-profile/EditProfile';
import MyFavourites from '../../pages/profile/my-favourites/MyFavourites';
import Profile from '../../pages/profile/Profile';
import { routes } from '../route-names/RouteName';
import CameraComponent from '../../common-components/camera/Camera';
import ViewPost from '../../pages/home/view-post/ViewPost';

const ProfileStack = createNativeStackNavigator();
const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName={routes.profile}
      screenOptions={{
        headerShown: true,
      }}>
      <ProfileStack.Screen
        name={routes.profile}
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
          name={routes.cameraScreen}
          component={CameraComponent}
          options={{
            headerShown:false,
          }}
        />
      <ProfileStack.Screen
        name={routes.editProfile}
        component={EditProfile}
        options={{
          headerShown:false
        }}
      />
      <ProfileStack.Screen
        name={routes.favourites}
        component={MyFavourites}
        options={{
          header: (props: any) => {
            return <HeaderWithBackButton isOptionsIcon={false} />;
          },
        }}
      />
      <ProfileStack.Screen
        name={routes.viewPost}
        component={ViewPost}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
