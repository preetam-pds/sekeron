import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import React, {Fragment, useState} from 'react';
import tabNavigatorStyles from './TabNavigator.Style';
import MediaAssets from '../../assets';
import HomeStackNavigator from '../stack-navigator/HomeStackNavigator';
import DashBoardStackNavigator from '../stack-navigator/DashBoardStackNavigator';
import CreatePostStackNavigator from '../stack-navigator/CreatePostStackNavigator';
import ExploreStackNavigator from '../stack-navigator/ExploreStackNavigator';
import {getFocusedRouteNameFromRoute, Route} from '@react-navigation/native';
import {routes} from '../route-names/RouteName';
import ProfileStackNavigator from '../stack-navigator/ProfileStackNavigator';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../resources/Colors';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const [isCreatePostModalVisible, setIsCreatePostModalVisible] =
    useState(false);

  return (
    <View style={tabNavigatorStyles.tabNavigationContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: [tabNavigatorStyles.tabBar],
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
        initialRouteName="Home"
        backBehavior="initialRoute">
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={({route}) => ({
            title: '',
            tabBarStyle: [
              {
                display: getTabBarVisibility(route),
              },
              tabNavigatorStyles.tabBar,
            ],
            tabBarIcon: (props: {focused: boolean; color: string}) => {
              return (
                <Fragment>
                  {props.focused ? (
                    <Image
                      source={MediaAssets.ic_home_active}
                      style={tabNavigatorStyles.tabIcon}
                    />
                  ) : (
                    <Image
                      source={MediaAssets.ic_home_inactive}
                      style={tabNavigatorStyles.tabIcon}
                    />
                  )}
                </Fragment>
              );
            },
          })}
          listeners={{
            tabPress: e => {
              setIsCreatePostModalVisible(false);
            },
          }}
        />

        <Tab.Screen
          name="Dashboard"
          component={DashBoardStackNavigator}
          options={({route}) => ({
            title: '',
            tabBarStyle: [
              {
                display: getTabBarVisibility(route),
              },
              tabNavigatorStyles.tabBar,
            ],
            tabBarIcon: (props: {focused: boolean; color: string}) => {
              return (
                <Fragment>
                  {props.focused ? (
                    <Image
                      source={MediaAssets.ic_dashboard_active}
                      style={tabNavigatorStyles.tabIcon}
                    />
                  ) : (
                    <Image
                      source={MediaAssets.ic_dashboard_inactive}
                      style={tabNavigatorStyles.tabIcon}
                    />
                  )}
                </Fragment>
              );
            },
          })}
        />
        <Tab.Screen
          name={routes.createPosts}
          children={props => (
            <CreatePostStackNavigator
              {...props}
              setIsCreatePostModalVisible={setIsCreatePostModalVisible}
              isCreatePostModalVisible={isCreatePostModalVisible}
            />
          )}
          options={({route}) => ({
            title: '',
            tabBarIcon: (props: {focused: boolean; color: string}) => {
              return (
                <Fragment>
                  {props.focused ? (
                    <Image
                      source={MediaAssets.ic_add_active}
                      style={tabNavigatorStyles.tabIcon}
                    />
                  ) : (
                    <Image
                      source={MediaAssets.ic_add_inactive}
                      style={tabNavigatorStyles.tabIcon}
                    />
                  )}
                </Fragment>
              );
            },
            tabBarStyle: [
              {
                display: getTabBarVisibility(route),
              },
              tabNavigatorStyles.tabBar,
            ],
          })}
          listeners={{
            tabPress: (e: any) => {
              setIsCreatePostModalVisible(true);
            },
          }}
        />

        <Tab.Screen
          name="Search"
          component={ExploreStackNavigator}
          options={{
            title: '',
            tabBarIcon: (props: {focused: boolean; color: string}) => {
              return (
                <Fragment>
                  {props.focused ? (
                    <Image
                      source={MediaAssets.ic_search_active}
                      style={tabNavigatorStyles.tabIcon}
                    />
                  ) : (
                    <Image
                      source={MediaAssets.ic_search_inactive}
                      style={tabNavigatorStyles.tabIcon}
                    />
                  )}
                </Fragment>
              );
            },
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileStackNavigator}
          options={{
            title: '',
            tabBarIcon: (props: {focused: boolean; color: string}) => {
              return (
                <Fragment>
                  {props.focused ? (
                    <Image
                      source={MediaAssets.ic_profile_active}
                      style={tabNavigatorStyles.tabIcon}
                    />
                  ) : (
                    <Image
                      source={MediaAssets.ic_profile_inactive}
                      style={tabNavigatorStyles.tabIcon}
                    />
                  )}
                </Fragment>
              );
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const getTabBarVisibility = (
  route: Partial<Route<string, object | undefined>>,
) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? ('Home' || 'Dashboard') ;
  switch (routeName) {
    case routes.notifications:
    case routes.createPost:
    case routes.createPosts:
    case routes.addAdditionalPostDetails:
    case routes.reorder:
    case routes.previewPost:
    case routes.events:
    case routes.eventsDetailsPage:
    case routes.blogs:
    case routes.blogsDetails:
    case routes.blogsSearch:
      return 'none';
    default:
      return 'flex';
  }
};

export default TabNavigator;
