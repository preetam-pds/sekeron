import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../../pages/search/Search';
import {routes} from '../route-names/RouteName';
import ViewPost from '../../pages/home/view-post/ViewPost';
import HeaderWithBackButton from '../../common-components/header-with-back-button/HeaderWithBackButton';
import Header from '../../pages/home/header/Header';
import Home from '../../pages/home/Home';
import Notificaton from '../../pages/notification/Notification';
import ProfileScreen from '../../pages/profile/Profile';
import EventsComponent from '../../pages/events/EventComponent';
import EventDetailsComponent from '../../pages/events/eventDetailsScreen/EventDetailsComponent';
import Blogs from '../../pages/blogs/Blogs';
import ViewBlog from '../../pages/blogs/view-blogs/ViewBlog';
import BlogsSearch from '../../pages/blogs/blogs-search/BlogsSearch';

const HomeStack: any = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={routes.home}
      screenOptions={{
        headerShown: true,
      }}>
      <HomeStack.Screen
        name={routes.home}
        component={Home}
        options={{
          header: () => {
            return <Header />;
          },
        }}
      />
      <HomeStack.Screen
        name={routes.explore}
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={routes.viewPost}
        component={ViewPost}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={routes.notifications}
        component={Notificaton}
        options={{
          header: (props: any) => {
            return <HeaderWithBackButton isViewPost={true} />;
          },
        }}
      />
      <HomeStack.Screen
        name={routes.events}
        component={EventsComponent}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={routes.eventsDetailsPage}
        component={EventDetailsComponent}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={routes.profile}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={routes.blogs}
        component={Blogs}
        options={{
          header: (props: any) => {
            return <HeaderWithBackButton isViewPost={false} />;
          },
        }}
      />
      <HomeStack.Screen
        name={routes.blogsDetails}
        component={ViewBlog}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={routes.blogsSearch}
        component={BlogsSearch}
        options={{
          header: (props: any) => {
            return (
              <HeaderWithBackButton isViewPost={false} customName="Blogs" />
            );
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
