import {Image, TouchableOpacity, View} from 'react-native';
import React, {Fragment} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {strings} from '@sekeron/domain';
import styles from './ProfileProjectCards.style';
import CustomText from '../../../../../common-components/custom-text/CustomText';
import Avathar from '../../../../../common-components/avathar/Avathar';
import MediaAssets from '../../../../../assets';
import ProfileProjectModal from '../profile-project-modal/ProfileProjectModal';
import {BlurView} from '@react-native-community/blur';

const ProfileProjectCards = (props: any) => {
  const {title, handleSeeAll, AvatarImages, MyProfileArrayJson, isModalOpen} =
    props;
  return (
    <Fragment>
      <View style={{flex: 1}}>
        <View>
          <View
            style={[
              styles.alignmentContainer,
              styles.profileProjectCardsContainer,
            ]}>
            <CustomText style={[styles.headerTextSize, styles.textColor]}>
              {title}
            </CustomText>
            <TouchableOpacity>
              <CustomText
                onPress={handleSeeAll}
                style={[styles.seeAllText, styles.headerTextSize]}>
                {strings.seeAll}
              </CustomText>
            </TouchableOpacity>
          </View>
          <SwiperFlatList
            nestedScrollEnabled={true}
            showPagination
            removeClippedSubviews={false}
            contentContainerStyle={styles.contentContainerStyle}
            paginationStyle={styles.paginationStyle}
            paginationStyleItemInactive={[
              styles.paginationDotStyle,
              styles.inactivePaginationStyle,
            ]}
            paginationStyleItemActive={[
              styles.paginationDotStyle,
              styles.activePaginationStyle,
            ]}
            data={MyProfileArrayJson}
            renderItem={({item}) => {
              return (
                <Fragment>
                  <View style={[styles.container]}>
                    <View>
                      <View style={styles.subContainer}>
                        <Image
                          style={styles.projectImage}
                          source={{
                            uri: item.img,
                          }}
                        />
                      </View>
                      <Fragment>
                        <View
                          style={[
                            styles.eventTypeContainer,
                            styles.contentContainer,
                          ]}>
                          <View style={styles.projectOuterImage}>
                            <Image
                              style={styles.projectImageInner}
                              source={
                                item?.projectStatus !== 'Completed'
                                  ? MediaAssets.ic_status_on_going_icon
                                  : MediaAssets.ic_status_complete_icon
                              }
                            />
                          </View>
                          <CustomText
                            style={[
                              styles.textSize,
                              item?.projectStatus !== 'Completed'
                                ? styles.statusOngoingColor
                                : styles.statusCompletedColor,
                            ]}>
                            {item?.projectStatus}
                          </CustomText>
                        </View>
                      </Fragment>
                    </View>

                    <Fragment>
                      <View style={[styles.eventNameContainer]}>
                        <CustomText
                          style={[styles.eventName, styles.textColor]}>
                          {item?.projectName}
                        </CustomText>
                      </View>
                      {AvatarImages ? (
                        <View style={styles.avatharContainer}>
                          <Avathar maxLength={4} />
                        </View>
                      ) : (
                        <View style={styles.profileSingleAvator}>
                          <View style={{height: 20, width: 20}}>
                            <Image
                              style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 10,
                                resizeMode: 'cover',
                              }}
                              source={{
                                uri: 'https://images.pexels.com/photos/12850797/pexels-photo-12850797.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
                              }}
                            />
                          </View>
                          <CustomText
                            style={[styles.profileName, styles.textSize]}>
                            {item?.profileName?.length >= 10
                              ? item?.profileName.slice(0, 10) + '...'
                              : item?.profileName}
                          </CustomText>
                          <TouchableOpacity>
                            <CustomText
                              style={[styles.followText, styles.textSize]}>
                              {strings.follow}
                            </CustomText>
                          </TouchableOpacity>
                        </View>
                      )}
                    </Fragment>
                  </View>
                </Fragment>
              );
            }}
          />
          <View style={styles.divider} />
        </View>
      </View>
      <ProfileProjectModal
        title={title}
        isModalVisible={isModalOpen}
        handleModalClose={handleSeeAll}
        AvatarImages={AvatarImages}
      />
    </Fragment>
  );
};

export default ProfileProjectCards;
