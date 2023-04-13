import {Animated, TouchableOpacity, View} from 'react-native';
import React, {Fragment, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomText from '../../../../common-components/custom-text/CustomText';
import Colors from '../../../../resources/Colors';
import {MyFavouritesPost} from '../my-favourites-post/MyFavouritesPost';
import MyFavouritesProject from '../my-favourites-project/MyFavouritesProject';
import MyFavouritesBlogs from '../my-favourites-blogs/MyFavouritesBlogs';
import {styles} from './MyFavouritesTabs.styles';
import LinearGradient from 'react-native-linear-gradient';

const MyFavouritesTabBar = ({state, descriptors, navigation, position}) => {
  return (
    <Fragment>
      <Animated.View
        style={{
          flexDirection: 'row',
          backgroundColor: 'black',
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <React.Fragment key={index}>
              <TouchableOpacity
                key={label}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={[styles({isFocused, label}).container]}>
                <View style={{overflow: 'hidden'}}>
                  <CustomText
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={[
                      styles({isFocused, label}).textLabel,
                      {
                        color: isFocused
                          ? Colors.whiteColor
                          : Colors.secondaryGreyColor,
                      },
                    ]}>
                    {label}
                  </CustomText>
                </View>
              </TouchableOpacity>
            </React.Fragment>
          );
        })}
      </Animated.View>
      <Fragment>
        {state.index == 0 ? (
          <LinearGradient
            colors={[
              Colors.secondaryVioletColor,
              Colors.primaryVioletColor,
              Colors.primaryVioletColor,
            ]}
            start={{x: 0, y: 0.75}}
            end={{x: 1, y: 0.25}}
            style={{
              height: 1,
              width: '100%',
            }}></LinearGradient>
        ) : state.index == 1 ? (
          <LinearGradient
            colors={[
              Colors.primaryVioletColor,
              Colors.secondaryVioletColor,
              Colors.primaryVioletColor,
            ]}
            start={{x: 0, y: 0.75}}
            end={{x: 1, y: 0.25}}
            style={{
              height: 1,
              width: '100%',
            }}></LinearGradient>
        ) : (
          <LinearGradient
            colors={[
              Colors.primaryVioletColor,
              Colors.primaryVioletColor,
              Colors.secondaryVioletColor,
            ]}
            start={{x: 0, y: 0.75}}
            end={{x: 1, y: 0.25}}
            style={{
              height: 1,
              width: '100%',
            }}></LinearGradient>
        )}
      </Fragment>
    </Fragment>
  );
};

const Tab = createMaterialTopTabNavigator();

const MyFavouritesTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        swipeEnabled: false
      }}
      tabBar={props => <MyFavouritesTabBar {...props} />}>
      <Tab.Screen name="Posts" children={() => <MyFavouritesPost />} />
      <Tab.Screen name="Projects" children={() => <MyFavouritesProject />} />
      <Tab.Screen name="Blogs" children={() => <MyFavouritesBlogs />} />
    </Tab.Navigator>
  );
};

export default MyFavouritesTabs;
