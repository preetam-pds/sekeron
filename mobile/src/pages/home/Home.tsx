import {View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import homeScreenStyles from './Home.Style';
import Slider from './slider/Slider';
import Posts from './posts/Posts';
import PersonalizeHomeContent from './personalize-home-content/PersonalizeHomeContent';
import { routes } from '../../navigation/route-names/RouteName';

const Home = ({route}) => {
  const [isModalVisible, setisModalVisible] = useState(false);

  useEffect(() => {
    if(route.name === routes.home) {
      setisModalVisible(true);
    }
  }, []);

  const handleModalClose = () => {
    setisModalVisible(false);
  };

  return (
    <View>
      <View>
        <ScrollView
          contentContainerStyle={homeScreenStyles.contentContainerStyle}
          showsVerticalScrollIndicator={false}>
          <View>
            <Slider />
          </View>
          <Posts />
        </ScrollView>
      </View>
      {isModalVisible ? (
        <PersonalizeHomeContent
          isModalVisible={isModalVisible}
          handleModalClose={handleModalClose}
        />
      ) : null}
    </View>
  );
};

export default Home;
