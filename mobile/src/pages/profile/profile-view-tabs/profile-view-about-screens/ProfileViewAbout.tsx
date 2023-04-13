import {strings} from '@sekeron/domain';
import React, {Fragment, useState} from 'react';
import {Image, Linking, TouchableOpacity, View} from 'react-native';
import MediaAssets from '../../../../assets';
import CustomText from '../../../../common-components/custom-text/CustomText';
import {CommonCreateNewNotification} from '../../../notification/common-create-new-notification/CommonCreateNewNotification';
import {styles} from './ProfileViewAbout.style';

const EducationalInfo = [
  {id: 1, eduImage: MediaAssets.ic_graduation_cap_icon, eduName: 'School'},
  {id: 2, eduImage: MediaAssets.ic_video_play, eduName: 'College'},
  {id: 3, eduImage: MediaAssets.ic_suitcase_icon, eduName: 'Work'},
];

const locationInfo = [
  {id: 1, eduImage: MediaAssets.ic_city_icon, eduName: 'City'},
  {id: 2, eduImage: MediaAssets.ic_flag_icon, eduName: 'Country'},
];

const socialMediaLinks = [
  {
    id: 1,
    eduImage: MediaAssets.ic_instagram_icon,
    eduName: 'instagram_url.link',
  },
  {id: 2, eduImage: MediaAssets.ic_facebook_icon, eduName: 'facebook_url.link'},
  {
    id: 3,
    eduImage: MediaAssets.ic_pinterest_circular_icon,
    eduName: 'pinterest_url.link',
  },
  {id: 4, eduImage: MediaAssets.ic_youtube_icon, eduName: 'youtube_url.link'},
];

export const ProfileViewAbout = () => {
  const [createpost, setCreatePost] = useState(false);
  const [moreOrNot, setMoreOrNot] = useState(false);
  const handleCreatePost = () => {
    setCreatePost(!createpost);
  };
  const postDescription =
    'About the user and any link if given by the user and if there is more it goes like About the user and any link if given by the user and if there is more it goesAbout the user and any link if given by the user and if there is more it goes like About the user and any link if like';

  return (
    <Fragment>
      {createpost ? (
        <CommonCreateNewNotification
          createpost={createpost}
          handleCreatePost={handleCreatePost}
          createNewText="Your events related notifications will appear here, explore now!"
          createNewButton="About me"
        />
      ) : (
        <View style={{flex: 1}}>
          <View>
            <CustomText style={styles.aboutHeaders}>Bio</CustomText>
            <CustomText style={[styles.destination, styles.letterSpacing]}>
              Visual Designer and Artist
            </CustomText>
            <View>
              {postDescription.length > 120 ? (
                moreOrNot ? (
                  <TouchableOpacity onPress={() => setMoreOrNot(!moreOrNot)}>
                    <CustomText style={styles.destination}>
                      {`${postDescription}...`}
                      <CustomText style={styles.destinationBold}>
                        {strings.readLess}
                      </CustomText>
                    </CustomText>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setMoreOrNot(!moreOrNot)}>
                    <CustomText style={styles.destination}>
                      {`${postDescription.slice(0, 120)}... `}
                      <CustomText style={styles.destinationBold}>
                        {strings.readMore}
                      </CustomText>
                    </CustomText>
                  </TouchableOpacity>
                )
              ) : (
                <CustomText style={styles.destination}>
                  {postDescription}
                </CustomText>
              )}
            </View>
          </View>
          <TouchableOpacity
            style={{marginVertical: 10}}
            onPress={() => Linking.openURL('http://google.com')}>
            <CustomText style={styles.websiteLinkHeader}>
              Website link
            </CustomText>
          </TouchableOpacity>
          {/* Skills */}
          <View>
            <View>
              <CustomText style={styles.aboutHeaders}>Skills</CustomText>
            </View>
            <View style={styles.skillsChipContainer}>
              <CustomText style={styles.skillsChip}>Artist</CustomText>
              <CustomText style={styles.skillsChip}>Painter</CustomText>
              <CustomText style={styles.skillsChip}>Guitar</CustomText>
              <CustomText style={styles.skillsChip}>Visual Designer</CustomText>
              <CustomText style={styles.skillsChip}>Dancer</CustomText>
            </View>
          </View>
          {/* Educational Info */}
          <View>
            <View>
              <CustomText style={styles.aboutHeaders}>
                Educational Info
              </CustomText>
            </View>
            <View>
              {EducationalInfo.length > 0 &&
                EducationalInfo?.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={styles.informationDetailsContainer}>
                      <View style={styles.informationDetailsSubContainer}>
                        <Image
                          style={styles.imageStyles}
                          source={item.eduImage}
                        />
                      </View>
                      <CustomText style={styles.otherDetails}>
                        {item.eduName}
                      </CustomText>
                    </View>
                  );
                })}
            </View>
          </View>
          {/* location */}
          <View>
            <View>
              <CustomText style={styles.aboutHeaders}>Location</CustomText>
            </View>
            <View>
              {locationInfo.length > 0 &&
                locationInfo?.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={styles.informationDetailsContainer}>
                      <View style={styles.informationDetailsSubContainer}>
                        <Image
                          style={styles.imageStyles}
                          source={item.eduImage}
                        />
                      </View>
                      <CustomText style={styles.otherDetails}>
                        {item.eduName}
                      </CustomText>
                    </View>
                  );
                })}
            </View>
          </View>
          {/* social media */}
          <View>
            <View>
              <CustomText style={styles.aboutHeaders}>
                Social Media Links
              </CustomText>
            </View>
            <View>
              {socialMediaLinks.length > 0 &&
                socialMediaLinks?.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={styles.informationDetailsContainer}>
                      <View style={styles.informationDetailsSubContainer}>
                        <Image
                          style={styles.imageStyles}
                          source={item.eduImage}
                        />
                      </View>
                      <CustomText style={styles.otherDetails}>
                        {item.eduName}
                      </CustomText>
                    </View>
                  );
                })}
            </View>
          </View>
        </View>
      )}
    </Fragment>
  );
};
