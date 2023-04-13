import {
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {Fragment} from 'react';
import styles from './Blogs.style';
import Colors from '../../resources/Colors';
import MediaAssets from '../../assets';
import Swiper from 'react-native-swiper';
import Gradient from '../../common-components/linear-gradient/LinearGradient';
import {sliderImage} from '../../json/BlogsJson';
import CustomText from '../../common-components/custom-text/CustomText';
import {BlurView} from '@react-native-community/blur';
import BlogsOurStory from './blogs-our-story/BlogsOurStory';
import PopularBlogsCards from './popular-blogs-cards/PopularBlogsCards';
import {ScrollView} from 'react-native-virtualized-view';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../navigation/route-names/RouteName';

const Blogs = (props: any) => {
  const navigation: any = useNavigation();

  const {route} = props;
  const rightArrowButton = () => {
    return <Image source={MediaAssets.ic_right_arrow} style={styles.icon} />;
  };

  const leftArrowButton = () => {
    return <Image source={MediaAssets.ic_left_arrow} style={styles.icon} />;
  };

  const handleInputFocus = () => {
    navigation.navigate(routes?.blogsSearch, {
      searchValue: route?.params && route?.params?.searchValue,
    });
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* search bar */}
        <View style={styles.blogsInputBoxContainer}>
          <Image
            style={styles.blogsSerachIcon}
            source={MediaAssets.ic_search_inactive}
          />
          <TextInput
            value={route?.params && route?.params?.searchValue}
            // onChangeText={(e)=>handleFilterDataBySearch(e)}
            style={styles.blogsSerachTextInput}
            placeholderTextColor={Colors.secondaryGreyColor}
            placeholder={'Search'}
            onFocus={handleInputFocus}
          />
        </View>

        {/* swiper */}
        <View style={[styles.postImageContainer]}>
          <Swiper
            loop={true}
            style={{height: 250}}
            showsButtons={true}
            autoplay={true}
            autoplayTimeout={5}
            nextButton={
              <Gradient
                colors={[Colors.primaryThemeColor, Colors.primaryThemeColor]}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={[styles.gradient]}
                gradient={rightArrowButton}
              />
            }
            prevButton={
              <Gradient
                colors={[Colors.primaryThemeColor, Colors.primaryThemeColor]}
                start={{x: 0, y: 0.75}}
                end={{x: 1, y: 0.25}}
                style={styles.gradient}
                gradient={leftArrowButton}
              />
            }
            buttonWrapperStyle={styles.buttonWrapperStyle}
            paginationStyle={styles.paginationStyle}
            dot={<View style={styles.dotStyle} />}
            activeDot={<View style={styles.activeDotStyle} />}>
            {sliderImage?.map((item: any) => {
              return (
                <Fragment key={item.id}>
                  <ImageBackground
                    source={{uri: item.imageSrc}}
                    resizeMode="cover"
                    style={styles.backgroundImage}>
                    <View style={styles.contentContainer}>
                      <BlurView
                        style={styles.footerContentBlur}
                        blurType="light" // Values = dark, light, xlight .
                        blurAmount={20}
                        reducedTransparencyFallbackColor="blue"
                      />
                      <View style={styles.footerContainer}>
                        <TouchableOpacity
                          style={styles.footerTextContainer}
                          onPress={() => {}}>
                          <View style={styles.footerTextSubContainer}>
                            <View>
                              <CustomText style={styles.footerTextStyle}>
                                {item?.footerText}
                              </CustomText>
                            </View>
                            <View style={styles.readMoreTextContainer}>
                              <CustomText style={styles.readMoreText}>
                                Read now
                              </CustomText>
                              <Image
                                source={MediaAssets.ic_right_arrow_icon}
                                style={styles.rightArrowIcon}
                              />
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ImageBackground>
                </Fragment>
              );
            })}
          </Swiper>
        </View>

        {/* our story */}
        <BlogsOurStory />

        {/* Popular this week cards */}
        <PopularBlogsCards />
      </ScrollView>
    </View>
  );
};

export default Blogs;
