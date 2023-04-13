import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import EventDetailsHeader from './EventDetailsHeader';
import Swiper from 'react-native-swiper';
import {styles} from './EventDetailsComponent.styles';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../resources/Colors';
import Gradient from '../../../common-components/linear-gradient/LinearGradient';
import MediaAssets from '../../../assets';
import CustomText from '../../../common-components/custom-text/CustomText';
import Avathar from '../../../common-components/avathar/Avathar';
import GradientText from '../../../common-components/gradient-text/GradientText';
import AccordionCustomComponent from '../../../common-components/accordion-custom-component/AccordionCustomComponent';
import SwiperFlatList from 'react-native-swiper-flatlist';
import SharePostList from '../../home/share-post-bottom-sheet/SharePostBottomSheet';
import AdmirationsList from '../../home/admirations-bottom-sheet/AdmirationsBottomSheet';
import PostActions from '../../home/posts/post-actions/PostActions';
import CustomCommonButton from '../../../common-components/custom-common-button/CustomCommonButton';
import MoreEventsSlider from './MoreEventsSlider';
import EventRegistrationModal from '../eventRegistrationModal/EventRegistrationModal';
import {Overlay} from '@rneui/themed';
import {OverlayExample} from '../../../common-components/flash-message/FlashMessage';

/* 
  here we have 3 types of events
    1. free -> direct apply
    2. paid -> with questions and without question 
       in with questions -> questions dialog and after payment success dialog
    3. in without question -> below snackbar 
*/

const EventDetailsComponent = (props: any) => {
  const [bestEventData, setBestEventData] = useState<any>(
    props?.route?.params?.item,
  );
  const [sharePost, setSharePost] = useState(false);
  const [payAndAttend, setPayAndAttend] = useState(false);
  const [applyToEvent, setApplyToEvent] = useState(false);
  const [payAndAttendSuccess, setPayAndAttendSuccess] = useState(false);
  const [shareEventOutside, setShareEventOutside] = useState(false);
  const [followAdmirations, setFollowAdmirations] = useState(false);

  const toggleSharePostSheet = () => {
    setSharePost(!sharePost);
  };

  const toggleFollowAdmirations = () => {
    setFollowAdmirations(!followAdmirations);
  };

  const handleAdmire = (number: any) => {
    if (props?.route?.params?.item.id === number) {
      setBestEventData({
        ...bestEventData,
        isLiked: !bestEventData.isLiked,
      });
    } else {
      setBestEventData({...bestEventData});
    }
  };

  const handleShareEventOutside = () => {
    setShareEventOutside(!shareEventOutside);
  };

  const handleAttendTheEvent = () => {
    setApplyToEvent(true);
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
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderOnlineOrOffline = (item: any) => {
    return (
      <View>
        <GradientText
          colors={['#f6bf7b', '#ea4566']}
          style={{padding: 4, fontFamily: 'Comfortaa-Bold', fontSize: 12}}>
          ONLINE
        </GradientText>
      </View>
    );
  };

  // open que dialog
  const handlePayAndAttendWithQue = () => {
    setPayAndAttend(true);
  };

  // close que and open succees dialog
  const handlePayAndAttendSuccessOpen = () => {
    setPayAndAttend(false);
    setPayAndAttendSuccess(true);
  };

  const handlePayAndAttendWithoutQueOpen = () => {
    setPayAndAttend(true);
    setApplyToEvent(true);
  };

  const handlePayAndAttendWithoutQueClose = () => {
    setPayAndAttend(false);
  };

  const handlePayAndAttendSuccessClose = () => {
    setApplyToEvent(true);
    setPayAndAttendSuccess(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <EventDetailsHeader
          customName={'Spring Poster Design Contest.'}
          shareEventOutside={shareEventOutside}
          handleShareEventOutside={handleShareEventOutside}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.postImageContainer]}>
          <Swiper
            loop={false}
            style={styles.swiperStyle}
            showsButtons={false}
            //   autoplay={true}
            //   autoplayTimeout={5}
            buttonWrapperStyle={styles.buttonWrapperStyle}
            paginationStyle={styles.paginationStyle}
            dot={<View style={styles.dotStyle} />}
            activeDot={<View style={styles.activeDotStyle} />}>
            {props?.route?.params?.attachments?.map((item: any) => {
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
                          Colors.darkBlueMagentaColor,
                          Colors.darkBlueMagentaColor,
                        ]}
                        start={{x: 0, y: 0.15}}
                        end={{x: 0.5, y: 0.75}}
                        style={[styles.eventIconContainer]}
                        gradient={() => renderOnlineOrOffline(item)}
                      />
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

        <View style={styles.captionContainer}>
          <View>
            <CustomText style={styles.postCaption}>
              {bestEventData.caption}
            </CustomText>

            <View style={styles.eventshostByData}>
              <CustomText style={styles.hostedBy}>
                {bestEventData.hostedBy}
              </CustomText>
              <CustomText style={styles.hostDays}>
                {bestEventData.days}
              </CustomText>
            </View>
          </View>
        </View>
        <View style={[styles.eventVerticalSpace, styles.divider]} />

        <View style={styles.captionContainer}>
          <View style={styles.fouthContainer}>
            <View style={styles.fifthContainer}>
              <View style={styles.photoWalkContainer}>
                <CustomText style={styles.eventPhotoWalkText}>
                  Photowalk
                </CustomText>
              </View>
              <View style={styles.eventsHorizontalSpace}>
                <LinearGradient
                  pointerEvents="none"
                  colors={[Colors.secondaryYellow, Colors.tertiaryYellow]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={{borderRadius: 4, overflow: 'hidden'}}>
                  <CustomText style={styles.eventPhotoWalkText}>
                    {!applyToEvent
                      ? props?.route?.params?.bestEventData?.eventType
                      : 'APPLIED'}
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
            <View style={styles.sixthContainer}>
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
        </View>

        <View style={[styles.divider]} />

        <AccordionCustomComponent
          style={styles.descriptionContainer}
          tilteStyle={{fontSize: 16, color: Colors.whiteColor}}
          title={'Description'}>
          <View style={styles.descriptionSecondContainer}>
            <View>
              <CustomText style={styles.hostTextStyle}>
                SPARKS
                <CustomText style={styles.normalTextStyle}>
                  is an event event About the event About the event About the is
                  an event event About the event About the event About theis an
                  event event About the event About the event About theis an
                  event event About the event About the event About theis an
                  event event About the event About the event About theis.
                </CustomText>
              </CustomText>
            </View>
            <View style={{marginVertical: 4}}>
              <CustomText style={styles.headingStyle}>Heading 1</CustomText>
              <CustomText style={styles.boldtextStyle}>
                In event event About the event About the event About theis an
                event event About the event About the event About theis an event
                event About the event About the event About theis an event event
                About the event About the event About theis an event event About
                the event
              </CustomText>
            </View>

            <View style={{marginVertical: 4}}>
              <CustomText style={[styles.boldtextStyle, {fontSize: 16}]}>
                Links
              </CustomText>
              <CustomText style={styles.linkTextStyle}>
                https://www.google.com/search?q=movie+ where+love+is
              </CustomText>
              <CustomText style={styles.linkTextStyle}>
                https://www.google.com/search?q=movie+ where+love+is
              </CustomText>
            </View>
          </View>
        </AccordionCustomComponent>

        <View style={[styles.divider]} />

        <CustomText style={styles.sessionStyle}>Sessions</CustomText>

        <View>
          <SwiperFlatList
            showPagination={false}
            paginationStyleItemInactive={styles.dotStyle}
            paginationStyleItemActive={styles.activeDotStyle}
            data={props?.route?.params?.attachments}
            renderItem={({item}) => {
              return (
                <Fragment key={item.post}>
                  <View style={{flexDirection: 'column', marginHorizontal: 10}}>
                    <ImageBackground
                      source={{uri: item.post}}
                      resizeMode="cover"
                      style={[
                        styles.backgroundImage,
                        styles.sessionImages,
                      ]}></ImageBackground>
                    <CustomText style={styles.sessionSomeTitle}>
                      Title
                    </CustomText>
                  </View>
                </Fragment>
              );
            }}
          />
        </View>

        <View>
          <View style={[styles.divider]} />

          <PostActions
            item={bestEventData}
            handleAdmire={handleAdmire}
            noSaveIcon={true}
            toggleSharePostSheet={toggleSharePostSheet}
            toggleFollowAdmirations={toggleFollowAdmirations}
          />
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
        <View style={styles.attendContainer}>
          {props?.route?.params?.bestEventData?.eventType !== 'FREE' ? (
            <View>
              <CustomText style={styles.amountOfEvent}>Rs. 499</CustomText>
              <CustomCommonButton
                disabled={applyToEvent}
                onPress={
                  props?.route?.params?.bestEventData?.questionType !== true
                    ? handlePayAndAttendWithoutQueOpen
                    : handlePayAndAttendWithQue
                }
                name={!applyToEvent ? 'Pay & Attend' : 'Paid'}
              />
            </View>
          ) : (
            <CustomCommonButton
              disabled={applyToEvent}
              onPress={() => handleAttendTheEvent()}
              name={!applyToEvent ? 'Attend' : 'Applied'}
            />
          )}
        </View>
        <View
          style={{
            marginVertical: 5,
            backgroundColor: Colors.primaryThemeColor,
          }}>
          <MoreEventsSlider />
        </View>
      </ScrollView>
      {payAndAttend &&
        props?.route?.params?.bestEventData?.questionType !== true && (
          <Overlay
            animationType="slide"
            isVisible={
              payAndAttend &&
              props?.route?.params?.bestEventData?.questionType !== true
            }
            fullScreen={false}
            onBackdropPress={handlePayAndAttendWithoutQueClose}
            overlayStyle={styles.freeApplyOverLay}>
            <View style={styles.successFullyAppiledButtomstyle}>
              <Image
                source={MediaAssets.ic_succesfully_applied_icon}
                style={styles.successFullyImage}
              />
              <View style={{width: '80%'}}>
                <CustomText style={styles.successFullyText}>
                  You have applied for this event on August 12th for Rs. 499.
                </CustomText>
              </View>
            </View>
          </Overlay>
        )}
      <EventRegistrationModal
        isOpen={
          payAndAttend && props?.route?.params?.bestEventData?.questionType
        }
        handleCloser={() => handlePayAndAttendWithoutQueClose()}
        handleSuccessFullyApplied={() => handlePayAndAttendSuccessOpen()}
      />
      <OverlayExample
        isSuccess
        isOpen={payAndAttendSuccess}
        handleCloser={() => handlePayAndAttendSuccessClose()}
      />
    </View>
  );
};

export default EventDetailsComponent;
