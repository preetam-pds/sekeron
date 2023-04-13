import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Projects from '../../pages/projects/Projects';
import {routes} from '../route-names/RouteName';
import DashBoardComponent from '../../components/dashboard/Dashboard';
import HeaderWithBackButton from '../../common-components/header-with-back-button/HeaderWithBackButton';
import {View} from 'react-native';
import MyProjectsComponent from '../../components/my-projects/MyProject';
import MyCollaborationsComponent from '../../components/my-collaborations/MyCollaborations';
import MyEventsComponent from '../../components/my-events/MyEvents';
import MyProjectDetailsComponent from '../../components/my-project-details/MyProjectDetails';
import MyCalendarComponent from '../../components/my-calendar/MyCalendar';
import Blogs from '../../pages/blogs/Blogs';
import ViewBlog from '../../pages/blogs/view-blogs/ViewBlog';
import BlogsSearch from '../../pages/blogs/blogs-search/BlogsSearch';
import EventDetailsComponent from '../../pages/events/eventDetailsScreen/EventDetailsComponent';
import EventsComponent from '../../pages/events/EventComponent';

const DashBoardStack = createNativeStackNavigator();
const DashBoardStackNavigator = () => {
  return (
    <DashBoardStack.Navigator
      initialRouteName={'DashBoardStack'}
      screenOptions={{
        headerShown: true,
      }}>
      <DashBoardStack.Screen
        name={'DashBoardStack'}
        component={DashBoardComponent}
        options={{
          header: () => {
            return (
              <View style={{backgroundColor: '#0d0d0e'}}>
                <HeaderWithBackButton
                  disbableBackButton={true}
                  customName={'My Dashboard'}
                />
              </View>
            );
          },
        }}
      />

      <DashBoardStack.Screen
        name={'MyProjects'}
        component={MyProjectsComponent}
        options={{
          header: () => {
            return (
              <View style={{backgroundColor: '#0d0d0e'}}>
                <HeaderWithBackButton customName={'My Projects'} />
              </View>
            );
          },
        }}
      />

      <DashBoardStack.Screen
        name={'MyCollaborations'}
        component={MyCollaborationsComponent}
        options={{
          header: () => {
            return (
              <View style={{backgroundColor: '#0d0d0e'}}>
                <HeaderWithBackButton customName={'My Collaborations'} />
              </View>
            );
          },
        }}
      />

      <DashBoardStack.Screen
        name={'MyEvents'}
        component={MyEventsComponent}
        options={{
          header: () => {
            return (
              <View style={{backgroundColor: '#0d0d0e'}}>
                <HeaderWithBackButton customName={'My Events'} />
              </View>
            );
          },
        }}
      />
      <DashBoardStack.Screen
        name={'MyCalendar'}
        component={MyCalendarComponent}
        options={{
          header: () => {
            return (
              <View style={{backgroundColor: '#0d0d0e'}}>
                <HeaderWithBackButton customName={'My Calendar'} />
              </View>
            );
          },
        }}
      />

      <DashBoardStack.Screen
        name={'MyProjectDetails'}
        component={MyProjectDetailsComponent}
        options={{
          header: () => {
            return <></>;
          },
        }}
      />

      <DashBoardStack.Screen
        name={routes.events}
        component={EventsComponent}
        options={{
          headerShown: false,
        }}
      />
      <DashBoardStack.Screen
        name={routes.eventsDetailsPage}
        component={EventDetailsComponent}
        options={{
          headerShown: false,
        }}
      />

      <DashBoardStack.Screen
        name={routes.blogs}
        component={Blogs}
        options={{
          header: (props: any) => {
            return <HeaderWithBackButton isViewPost={false} />;
          },
        }}
      />
      <DashBoardStack.Screen
        name={routes.blogsDetails}
        component={ViewBlog}
        options={{
          headerShown: false,
        }}
      />
      <DashBoardStack.Screen
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
    </DashBoardStack.Navigator>
  );
};

export default DashBoardStackNavigator;
