import {
  View,
  Image,
  ImageBackground,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './ProfileView.style';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../resources/Colors';
import CustomText from '../../../common-components/custom-text/CustomText';
import {BlurView} from '@react-native-community/blur';
import CustomCommonButton from '../../../common-components/custom-common-button/CustomCommonButton';
import {useSelector} from 'react-redux';
import {OverlayExample} from '../../../common-components/flash-message/FlashMessage';

const skills = [
  'Pionist',
  'Guitarist',
  'Visual Designer',
  'Actor',
  'Bass Guitarist',
  'Dancer',
  'Actors',
];

const filteredSkills = skills.slice(0, 3);

const ProfileView = (props: any) => {
  const {blurContent, route, collapseSkills, handleCollapseSkills} = props;
  const profileState = useSelector((state: any) => state.ProfileRedux);

  const [followOrUnFollow, setFollowOrUnFollow] = useState(false);

  const handleFollowOrNot = () => {
    setFollowOrUnFollow(!followOrUnFollow);
  };
  return (
    <Animated.View style={[styles.header]}>
      {blurContent && (
        <BlurView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: -30,
            right: 0,
            height: '100%',
            width: '100%',
          }}
          blurType="dark" // Values = dark, light, xlight .
          blurAmount={40}
          reducedTransparencyFallbackColor="blue"
        />
      )}
      <View style={{position: 'relative'}}>
        <ImageBackground
          imageStyle={styles.imageBackgroundStyle}
          style={styles.cardImagesLinearGradent}
          source={{uri: 'https://picsum.photos/1100'}}
          blurRadius={blurContent ? 20 : 0}>
          <LinearGradient
            style={styles.imageLinearGradentBlurEffect}
            colors={[
              Colors.transparentColor,
              Colors.primaryThemeColor,
            ]}></LinearGradient>
        </ImageBackground>

        <View style={styles.profileAvator}>
          <View style={styles.profileAvatorSubContainer}>
            <View>
              <Image
                style={[
                  styles.avatorImageSecondary,
                  {
                    borderColor: blurContent
                      ? Colors.transparentColor
                      : Colors.primaryThemeColor,
                    borderRadius: 50,
                    borderWidth: 4,
                  },
                ]}
                source={{
                  uri: 'https://picsum.photos/2600',
                }}
                blurRadius={blurContent ? 20 : 0}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <CustomText
                style={[
                  {color: Colors.lightVioletColor},
                  blurContent && styles.bluredText,
                ]}>
                24K+
              </CustomText>
              <CustomText
                style={[
                  {color: Colors.secondaryGreyColor},
                  blurContent && styles.bluredText,
                ]}>
                Followers
              </CustomText>
            </View>
            <View style={{alignItems: 'center'}}>
              <CustomText
                style={[
                  {color: Colors.lightVioletColor},
                  blurContent && styles.bluredText,
                ]}>
                2K+
              </CustomText>
              <CustomText
                style={[
                  {color: Colors.secondaryGreyColor},
                  blurContent && styles.bluredText,
                ]}>
                Following
              </CustomText>
            </View>
            {route &&
            route?.params?.profileId !== profileState?.loginId &&
            route?.params?.profileId !== undefined ? (
              <View style={{alignItems: 'center'}}>
                <CustomText
                  style={[
                    {color: Colors.lightVioletColor},
                    blurContent && styles.bluredText,
                  ]}>
                  24k
                </CustomText>
                <CustomText
                  style={[
                    {color: Colors.secondaryGreyColor},
                    blurContent && styles.bluredText,
                  ]}>
                  Mutuals
                </CustomText>
              </View>
            ) : null}
          </View>
        </View>
      </View>
      <View style={styles.profileViewName}>
        <View>
          <CustomText
            style={[styles.profileName, blurContent && styles.bluredText]}>
            Stacey Kibbler
          </CustomText>
          {collapseSkills ? (
            <TouchableOpacity
              onPress={handleCollapseSkills}
              style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {filteredSkills?.length >= 3 &&
                filteredSkills?.map((item, index) => {
                  return (
                    <View key={item}>
                      <CustomText
                        style={[
                          styles.skillsChip,
                          blurContent && styles.bluredText,
                        ]}>
                        {index < 3 && item}
                      </CustomText>
                    </View>
                  );
                })}
              <View>
                <CustomText
                  style={[styles.skillsChip, blurContent && styles.bluredText]}>
                  +{skills?.length - 3}
                </CustomText>
              </View>
            </TouchableOpacity>
          ) : (
            <View
              // onPress={handleCollapseSkills}
              style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {skills?.length >= 3 &&
                skills?.map((item, index) => {
                  return (
                    <View key={item}>
                      <CustomText
                        style={[
                          styles.skillsChip,
                          blurContent && styles.bluredText,
                        ]}>
                        {item}
                      </CustomText>
                    </View>
                  );
                })}
            </View>
          )}
        </View>
      </View>
      {route &&
      route?.params?.profileId !== profileState?.loginId &&
      route?.params?.profileId !== undefined ? (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <CustomCommonButton
            name="Follow"
            islessRadius
            onPress={handleFollowOrNot}
          />
          <CustomCommonButton name="Message" DarkGreyButton />
        </View>
      ) : null}
      <OverlayExample
        isOpen={followOrUnFollow}
        cancel
        noImage
        
        handleCloser={handleFollowOrNot}
        OverFollow={true}
      />
    </Animated.View>
  );
};

export default ProfileView;
