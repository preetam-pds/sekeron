import { strings } from '@sekeron/domain';
import React from 'react';
import {Image, View} from 'react-native';
import MediaAssets from '../../../../../assets';
import Avathar from '../../../../../common-components/avathar/Avathar';
import CustomText from '../../../../../common-components/custom-text/CustomText';
import Colors from '../../../../../resources/Colors';
import styles from './CommonEventCards.style';

export const CommonEventCards = (props: any) => {
  const {item} = props;

  return (
    <View style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.secondaryContainer}>
          <View style={styles.thirdContainer}>
            <Image
              style={styles.avatorSingleImage}
              source={{uri: item.eventImage}}
            />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textMessages}>
              <CustomText style={styles.notifierRegularText}>
                {item?.eventTitle}
              </CustomText>
              <CustomText style={styles.notifierLightText}>
                {item?.hostedBy}
              </CustomText>
            </View>

            <View
              style={styles.fouthContainer}>
              <View style={styles.photoWalkContainer}>
                <CustomText style={styles.eventPhotoWalkText}>
                  Photowalk
                </CustomText>
              </View>
              <Avathar maxLength={3} greyColor />
            </View>
          </View>
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
                {item?.dateAndTimeOfEvent}
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
                {item?.locationOfEvent}
              </CustomText>
            </View>
            <View
              style={styles.profileEventStatus}>
              <View
                style={styles.profileEventsubStatus}>
                <Image
                  style={styles.imageStyles}
                  source={
                    item?.status == strings.upcoming
                      ? MediaAssets.ic_status_up_coming_icon
                      : item?.status == strings.completed
                      ? MediaAssets.ic_status_complete_icon
                      : MediaAssets.ic_status_on_going_icon
                  }
                />
              </View>
              <CustomText
                style={{
                  color:
                    item?.status == strings.upcoming
                      ? Colors.primaryBlueColor
                      : item?.status == strings.completed
                      ? Colors.monoChromaticGreenColor
                      : Colors.reddishPinkColor,
                  padding: 3,
                }}>
                {item?.status}
              </CustomText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
