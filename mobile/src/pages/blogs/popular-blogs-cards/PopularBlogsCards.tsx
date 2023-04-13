import {View, TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import React, {Fragment} from 'react';
import CustomText from '../../../common-components/custom-text/CustomText';
import {styles} from './PopularBlogsCards.style';
import {PopuleredBlogs} from '../../../json/BlogsJson';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/route-names/RouteName';
// import LinearGradient from 'react-native-linear-gradient';
// import Colors from '../../../resources/Colors';

const PopularBlogsCards = () => {

  const navigation: any = useNavigation();

  const Cards = ({item}: any) => {
    return (
      <View>
        <View style={[styles.container]}>
          <View>
            <ImageBackground
              imageStyle={styles.imageBackgroundStyle}
              style={styles.cardImagesLinearGradentSelected}
              source={{uri: item.blogImage}}>
              {/* <LinearGradient
                style={styles.imageLinearGradentBlurEffect}
                colors={[
                  Colors.transparentColor,
                  Colors.primaryThemeColor,
                ]}></LinearGradient> */}
            </ImageBackground>
            <Fragment>
              <View
                style={[styles.eventTypeContainer, styles.contentContainer]}>
                <CustomText style={[styles.textSize]}>
                  {item?.blogHeader}
                </CustomText>
              </View>
            </Fragment>
          </View>

          <View style={styles.blogEventsDescription}>
            <View style={[styles.eventNameContainer]}>
              <CustomText style={[styles.eventName, styles.textColor]}>
                {item?.blogDescription}
              </CustomText>
            </View>
            <View style={styles.blogsReadNowConatiner}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(routes.blogsDetails, {
                    blogsDetails: item,
                  });
                }}
                style={styles.readNowSubContainer}>
                <CustomText style={[styles.readNowText]}>READ NOW</CustomText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <CustomText style={styles.headerText}>Popular this week</CustomText>

        <FlatList
          columnWrapperStyle={styles.flatListContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            {
              //   padding: 20,
              //   borderRadius: 24,
            }
          }
          numColumns={2}
          data={PopuleredBlogs}
          renderItem={({item}: any) => <Cards item={item} />}
        />
      </View>
    </View>
  );
};

export default PopularBlogsCards;
