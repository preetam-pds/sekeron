import {Image, ImageBackground, Text, View} from 'react-native';
import React, {Fragment} from 'react';
import Swiper from 'react-native-swiper';
import MediaAssets from '../../../assets';
import Gradient from '../../../common-components/linear-gradient/LinearGradient';
import Colors from '../../../resources/Colors';
import {carousel} from '../../../json/carouselJson';
import styles from './SliderItem.Style';
import CustomText from '../../../common-components/custom-text/CustomText';
import {strings} from '@sekeron/domain';

// rename it as CoverPhotoCarousel or CoverPhotoSlider
const Slider = () => {
  const rightArrowButton = () => {
    return <Image source={MediaAssets.ic_right_arrow} style={styles.icon} />;
  };

  const leftArrowButton = () => {
    return <Image source={MediaAssets.ic_left_arrow} style={styles.icon} />;
  };

  const renderArtistOfTheWeek = (item: any) => {
    return (
      <View>
        <CustomText style={styles.artistOfTheWeek}>{item.type}</CustomText>
      </View>
    );
  };

  const renderAdmirationsCount = (item: any) => {
    return (
      <Fragment>
        {item?.admireIcon ? (
          <Image
            source={MediaAssets.ic_admirations_active}
            style={styles.icon}
          />
        ) : null}
        <CustomText style={styles.admirationsText}>
          {item.admirations}
        </CustomText>
        <CustomText style={styles.admirationsText}>
          {item.weeklyAdmirations}
        </CustomText>
      </Fragment>
    );
  };

  return (
    <View style={styles.container}>
      <Swiper
        showsButtons
        autoplay={true}
        buttonWrapperStyle={styles.buttonWrapperStyle}
        autoplayTimeout={5}
        nextButton={
          <Gradient
            colors={[Colors.primaryThemeColor, Colors.primaryThemeColor]}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            style={[styles.gradient, styles.position]}
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
        paginationStyle={styles.paginationStyle}
        dot={<View style={styles.dotStyle} />}
        activeDot={<View style={styles.activeDotStyle} />}>
        {carousel.map((item: any) => {
          return (
            <Fragment key={item.id}>
              <ImageBackground
                source={{uri: item.img}}
                resizeMode="cover"
                style={styles.backgroundImage}>
                <View style={styles.contentContainer}>
                  <Gradient
                    colors={[
                      Colors.primaryThemeColor,
                      Colors.primaryThemeColor,
                    ]}
                    start={{x: 0, y: 0.15}}
                    end={{x: 0.5, y: 0.75}}
                    style={[
                      styles.secondaryContainer,
                      styles.artistOfTheWeekContainer,
                    ]}
                    gradient={() => renderArtistOfTheWeek(item)}
                  />
                  {item.type === strings.artistOfTheWeek ? (
                    <Fragment>
                      <Image
                        source={{uri: item.profileImage}}
                        resizeMode="contain"
                        style={styles.profileImage}
                      />

                      <CustomText style={styles.artistName}>
                        {item.artistName}
                      </CustomText>
                      <CustomText style={styles.designation}>
                        {item.designation}
                      </CustomText>

                      <Gradient
                        colors={[
                          Colors.primaryThemeColor,
                          Colors.primaryThemeColor,
                        ]}
                        start={{x: 0, y: 0.75}}
                        end={{x: 1, y: 0.25}}
                        style={styles.secondaryContainer}
                        gradient={() => renderAdmirationsCount(item)}
                      />
                    </Fragment>
                  ) : (
                    <Fragment>
                      <View style={styles.sliderContent} />
                      <CustomText
                        style={[
                          item.colorChange
                            ? styles.sliderTextColor
                            : styles.sliderBlogTextColor,
                          styles.sliderContentText,
                        ]}>
                        {item.eventName}
                      </CustomText>

                      <Gradient
                        colors={[
                          Colors.primaryThemeColor,
                          Colors.primaryThemeColor,
                        ]}
                        start={{x: 0, y: 0.75}}
                        end={{x: 1, y: 0.25}}
                        style={styles.secondaryContainer}
                        gradient={() => renderAdmirationsCount(item)}
                      />
                    </Fragment>
                  )}
                </View>
              </ImageBackground>
            </Fragment>
          );
        })}
      </Swiper>
    </View>
  );
};

export default Slider;
