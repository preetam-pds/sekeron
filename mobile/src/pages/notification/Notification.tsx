import * as React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AllScreen} from './app-notification/AppNotification';
import {PostScreen} from './post-notification/PostNotification';
import {ProjectScreen} from './project-notification/ProjectNotification';
import {EventScreen} from './event-notification/EventNotification';
import CustomText from '../../common-components/custom-text/CustomText';
import styles from './Notification.style';

const NotificationTopBar = ({state, descriptors, navigation, position}) => {
  return (
    <View
      style={{flexDirection: 'row', paddingTop: 20, backgroundColor: 'black'}}>
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
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles({isFocused, label}).container}>
            <View>
              <CustomText
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles({isFocused, label}).textLabel}>
                {label}
              </CustomText>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

export default function Notificaton() {
  return (
    <Tab.Navigator
      screenOptions={{swipeEnabled: false}}
      tabBar={props => <NotificationTopBar {...props} />}>
      <Tab.Screen name="All" component={AllScreen} />
      <Tab.Screen name="Posts" component={PostScreen} />
      <Tab.Screen name="Projects" component={ProjectScreen} />
      <Tab.Screen name="Events" component={EventScreen} />
    </Tab.Navigator>
  );
}
