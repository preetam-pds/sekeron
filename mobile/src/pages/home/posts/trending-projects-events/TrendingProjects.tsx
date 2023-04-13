import {Image, TouchableOpacity, View} from 'react-native';
import React, {Fragment} from 'react';
import CustomText from '../../../../common-components/custom-text/CustomText';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Avathar from '../../../../common-components/avathar/Avathar';
import {EventTypeEnum, strings} from '@sekeron/domain';
import styles from './TrendingProjects.Style';

const TrendingProjects = (props: any) => {
  const {item, events, trendingProjects} = props;

  return (
    <Fragment>
      {item?.trendingProjects || item?.events ? (
        <View>
          <View
            style={[
              styles.alignmentContainer,
              styles.trendingProjectsContainer,
              styles.contentContainer,
            ]}>
            {item?.trendingProjects ? (
              <CustomText style={[styles.headerTextSize, styles.textColor]}>
                {strings.trendingProjects}
              </CustomText>
            ) : null}
            {item?.events ? (
              <CustomText style={[styles.headerTextSize, styles.textColor]}>
                {strings.upcomingEvents}
              </CustomText>
            ) : null}
            <TouchableOpacity>
              <CustomText
                style={[
                  styles.seeAllText,
                  styles.headerTextSize,
                ]}>
                {strings.seeAll}
              </CustomText>
            </TouchableOpacity>
          </View>
          <SwiperFlatList
            showPagination
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
            data={item?.trendingProjects || item?.events}
            renderItem={({item}) => {
              return (
                <Fragment>
                  <View style={styles.container}>
                    <View>
                      <Image
                        style={styles.projectImage}
                        source={{
                          uri: 'https://images.pexels.com/photos/12850797/pexels-photo-12850797.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
                        }}
                      />
                      {events?.length > 0 ? (
                        <Fragment>
                          <View
                            style={[
                              styles.eventTypeContainer,
                              styles.contentContainer,
                            ]}>
                            <CustomText
                              style={[styles.eventType, styles.textSize]}>
                              {item?.eventType}
                            </CustomText>
                          </View>
                          {item?.eventType === EventTypeEnum.paid ? (
                            <View
                              style={[
                                styles.registerNowContainer,
                                styles.contentContainer,
                              ]}>
                              <CustomText style={styles.registerNowText}>
                                {strings.registerNow}
                              </CustomText>
                            </View>
                          ) : null}
                        </Fragment>
                      ) : null}
                    </View>

                    {events?.length > 0 ? (
                      <Fragment>
                        <View
                          style={[
                            styles.eventNameContainer,
                            styles.contentContainer,
                          ]}>
                          <CustomText
                            style={[styles.eventName, styles.textColor]}>
                            {item?.eventName}
                          </CustomText>
                          <CustomText
                            style={[styles.eventDate, styles.textSize]}>
                            {item?.eventDate}
                          </CustomText>
                        </View>
                        <View style={styles.avatharContainer}>
                          <Avathar maxLength={3} />
                        </View>
                      </Fragment>
                    ) : null}

                    {trendingProjects?.length > 0 ? (
                      <Fragment>
                        <CustomText
                          style={[
                            styles.trendingProjectsName,
                            styles.textColor,
                          ]}>
                          {item?.projectName}
                        </CustomText>
                        <View
                          style={[
                            styles.trendingProjectsSecondaryContainer,
                            styles.contentContainer,
                          ]}>
                          <Image
                            style={styles.profileImage}
                            source={{
                              uri: 'https://images.pexels.com/photos/12850797/pexels-photo-12850797.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
                            }}
                          />
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
                      </Fragment>
                    ) : null}
                  </View>
                </Fragment>
              );
            }}
          />
          <View style={styles.divider} />
        </View>
      ) : null}
    </Fragment>
  );
};

export default TrendingProjects;
