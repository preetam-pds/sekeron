import {StyleSheet, View} from 'react-native';
import React from 'react';
import MyFavouritesTabs from './my-favourites-tabs/MyFavouritesTabs';

const MyFavourites = () => {
  return (
    <View style={styles.container}>
      <MyFavouritesTabs />
    </View>
  );
};

export default MyFavourites;

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
