import React, {Fragment, useEffect, useState} from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import TabNavigator from './src/navigation/tab-navigator/TabNavigator';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Colors from './src/resources/Colors';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import AuthenticationStackNavigator from './src/navigation/stack-navigator/AuthenticationStackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const loginState = useSelector((state: any) => state.Login);

  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
    retrieveData();
  }, [loginState.isTokenSet]);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.primaryThemeColor,
    },
  };

  const retrieveData = async () => {
    try {
      const value: any = await AsyncStorage.getItem('isLoggedIn');
      setIsLoggedIn(value);
    } catch (error) {}
  };

  return (
    <Fragment>
      <NavigationContainer theme={MyTheme}>
        {isLoggedIn !== null ? (
          <GestureHandlerRootView style={styles.container}>
            <SafeAreaView style={styles.container}>
              <StatusBar
                backgroundColor={Colors.primaryThemeColor}
                barStyle="light-content"
              />
              <TabNavigator />
            </SafeAreaView>
          </GestureHandlerRootView>
        ) : (
          <AuthenticationStackNavigator />
        )}
      </NavigationContainer>
    </Fragment>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryThemeColor,
  },
});
