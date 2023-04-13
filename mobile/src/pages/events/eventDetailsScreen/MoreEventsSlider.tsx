import {Image, TouchableOpacity, View} from 'react-native';
import React, {Fragment} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {EventTypeEnum, strings} from '@sekeron/domain';
import CustomText from '../../../common-components/custom-text/CustomText';
import Avathar from '../../../common-components/avathar/Avathar';
import styles from './MoreEventsSlider.style';
import GradientText from '../../../common-components/gradient-text/GradientText';
import Colors from '../../../resources/Colors';
import {MoreEventsJson} from '../../../json/eventsJson/eventsJson';

const MoreEventsSlider = (props: any) => {

  return (
    <Fragment>
        <View
          style={[
            styles.alignmentContainer,
            styles.trendingProjectsContainer,
            styles.contentContainer,
          ]}>
          <CustomText style={[styles.headerTextSize, styles.textColor]}>
            More Like this
          </CustomText>
          <TouchableOpacity>
            <CustomText style={[styles.seeAllText, styles.headerTextSize]}>
              {strings.seeAll}
            </CustomText>
          </TouchableOpacity>
        </View>
        <SwiperFlatList
          showPagination
          nestedScrollEnabled={true}
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
          data={MoreEventsJson}
          renderItem={({item}) => {
            return (
              <Fragment>
                <View style={styles.container}>
                    <Image
                      style={styles.projectImage}
                      source={{
                        uri: item?.attachments[0]?.post,
                      }}
                    />
                    <Fragment>
                      <View
                        style={[
                          styles.eventTypeContainer,
                          styles.contentContainer,
                        ]}>
                        <GradientText
                          colors={[Colors.primaryYellow, Colors.tertiaryYellow]}
                          style={[styles.eventType]}>
                          {item?.eventType}
                        </GradientText>
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

                  <View style={[styles.eventNameContainer]}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 6,
                        marginVertical: 4,
                      }}>
                      <CustomText style={[styles.eventName, styles.textColor]}>
                        {item?.caption?.length >= 15
                          ? item?.caption.slice(0, 15) + '...'
                          : item?.caption}
                      </CustomText>
                      <CustomText style={[styles.eventDate, styles.textSize]}>
                        09 Jan
                      </CustomText>
                    </View>
                    <View
                      style={{
                        alignItems: 'flex-start',
                        marginHorizontal: 6,
                        marginVertical: 4,
                        left: 10,
                      }}>
                      <Avathar maxLength={4} />
                    </View>
                  </View>
                </View>
              </Fragment>
            );
          }}
        />
        <View style={styles.divider} />
    </Fragment>
  );
};

export default MoreEventsSlider;
