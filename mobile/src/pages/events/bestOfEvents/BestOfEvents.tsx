import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import React, {Fragment, useState} from 'react';
import {styles} from './BestOfEvents.styles';
import CustomText from '../../../common-components/custom-text/CustomText';
import PostActions from '../../home/posts/post-actions/PostActions';
import SharePostList from '../../home/share-post-bottom-sheet/SharePostBottomSheet';
import AdmirationsList from '../../home/admirations-bottom-sheet/AdmirationsBottomSheet';
import Gradient from '../../../common-components/linear-gradient/LinearGradient';
import Colors from '../../../resources/Colors';
import Swiper from 'react-native-swiper';
import MediaAssets from '../../../assets';
import LinearGradient from 'react-native-linear-gradient';
import Avathar from '../../../common-components/avathar/Avathar';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/route-names/RouteName';

const BestOfEvents = ({item, attachments}) => {
  const navigation: any = useNavigation();

  const [bestEventData, setBestEventData] = useState<any>(item);
  const [sharePost, setSharePost] = useState(false);
  const [followAdmirations, setFollowAdmirations] = useState(false);

  const toggleSharePostSheet = () => {
    setSharePost(!sharePost);
  };

  const toggleFollowAdmirations = () => {
    setFollowAdmirations(!followAdmirations);
  };

  const handleAdmire = (number: any) => {
    if (item.id === number) {
      setBestEventData({
        ...bestEventData,
        isLiked: !bestEventData.isLiked,
      });
    } else {
      setBestEventData({...bestEventData});
    }
  };

  const renderNotification = (item: any) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            // setPostMenuId(bestEventData.id);
          }}>
          <Image
            source={MediaAssets.ic_gery_bell_icon}
            style={styles.moreOptionsIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Fragment>
        <View key={bestEventData.id} style={styles.post}>
          {/* <View style={[styles.sliderDivider, styles.divider]} /> */}
          <View style={styles.postOpacity}>
            <View style={[styles.feedsHeader, styles.alignmentContainer]}>
              {/* <View
              onPress={() => {
                setPostMenuId(bestEventData.id);
              }}>
              <Image
                source={MediaAssets.ic_more_options}
                style={styles.moreOptionsIcon}
              />
            </View> */}
            </View>

            <View style={[styles.postImageContainer]}>
              <Swiper
                loop={false}
                style={{height: 250}}
                showsButtons={false}
                //   autoplay={true}
                //   autoplayTimeout={5}
                buttonWrapperStyle={styles.buttonWrapperStyle}
                paginationStyle={styles.paginationStyle}
                dot={<View style={styles.dotStyle} />}
                activeDot={<View style={styles.activeDotStyle} />}>
                {attachments?.map((item: any) => {
                  return (
                    <Fragment key={item.post}>
                      <ImageBackground
                        source={{uri: item.post}}
                        resizeMode="cover"
                        style={styles.backgroundImage}>
                        <View style={styles.contentContainer}>
                          <LinearGradient
                            style={styles.backgroundImage}
                            colors={[
                              Colors.transparentColor,
                              Colors.primaryThemeColor,
                            ]}></LinearGradient>
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
                            gradient={() => renderNotification(item)}
                          />
                        </View>
                      </ImageBackground>
                    </Fragment>
                  );
                })}
              </Swiper>
            </View>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate(routes.eventsDetailsPage, {
                  attachments: attachments,
                  bestEventData: bestEventData,
                  item: item,
                })
              }
              style={styles.captionContainer}>
              <CustomText style={styles.postCaption}>
                {bestEventData.caption}
              </CustomText>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <CustomText style={styles.hostedBy}>
                  {bestEventData.hostedBy}
                </CustomText>
                <CustomText style={styles.hostDays}>
                  {bestEventData.days}
                </CustomText>
              </View>
            </TouchableOpacity>
            <View style={[{marginVertical: 6}, styles.divider]} />
            <View style={styles.fouthContainer}>
              <View
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.photoWalkContainer}>
                  <CustomText style={styles.eventPhotoWalkText}>
                    Photowalk
                  </CustomText>
                </View>
                <View style={{marginHorizontal: 6}}>
                  <LinearGradient
                    pointerEvents="none"
                    colors={[Colors.secondaryYellow, Colors.tertiaryYellow]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={{borderRadius: 4, overflow: 'hidden'}}>
                    <CustomText style={styles.eventPhotoWalkText}>
                      {bestEventData.eventType}
                    </CustomText>
                  </LinearGradient>
                </View>
              </View>
              <Avathar maxLength={3} darkYellowColor />
            </View>

            <View>
              <View style={{marginVertical: 4}}>
                <View style={styles.semiContainer}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.imageStyles}
                      source={MediaAssets.ic_calander_open_icon}
                    />
                  </View>
                  <CustomText style={styles.notifierTimeAgo}>
                    {bestEventData?.dateAndTimeOfEvent}
                  </CustomText>
                </View>
              </View>
              <View
                style={{
                  marginVertical: 4,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.semiContainer}>
                  <View style={styles.semiSubContainer}>
                    <Image
                      style={styles.imageStyles}
                      source={MediaAssets.ic_location_icon}
                    />
                  </View>
                  <CustomText style={styles.notifierTimeAgo}>
                    {bestEventData?.locationOfEvent}
                  </CustomText>
                </View>
              </View>
            </View>

            <View style={[styles.divider]} />

            <PostActions
              item={bestEventData}
              handleAdmire={handleAdmire}
              noSaveIcon={true}
              toggleSharePostSheet={toggleSharePostSheet}
              toggleFollowAdmirations={toggleFollowAdmirations}
            />
          </View>
          {/* <View style={[ styles.divider]} /> */}

          <SharePostList
            sharePost={sharePost}
            setSharePost={setSharePost}
            toggleSharePostSheet={toggleSharePostSheet}
          />

          <AdmirationsList
            followAdmirations={followAdmirations}
            setFollowAdmirations={setFollowAdmirations}
            toggleFollowAdmirations={toggleFollowAdmirations}
          />
        </View>
    </Fragment>
  );
};

export default BestOfEvents;
