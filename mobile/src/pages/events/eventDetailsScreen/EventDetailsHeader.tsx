import {View, TouchableOpacity, Image, Platform} from 'react-native';
import React, {Fragment} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomText from '../../../common-components/custom-text/CustomText';
import MediaAssets from '../../../assets';
import Colors from '../../../resources/Colors';
import styles from './EventDetailsHeader.styles';
import {Overlay} from '@rneui/themed';
import {PlatformEnum} from '@sekeron/domain';

const EventDetailsHeader = (props: any) => {
  const {blurContent, shareEventOutside, handleShareEventOutside} = props;

  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Fragment>
      <View style={[styles.contentContainer, styles.container]}>
        <View style={[styles.contentContainer, styles.secondaryContainer]}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={MediaAssets.ic_header_back_arrow}
              style={[styles.icon, styles.iconWidth]}
            />
          </TouchableOpacity>
          <CustomText
            style={[
              styles.routeName,
              {color: blurContent ? Colors.blackPearlColor : Colors.whiteColor},
            ]}
            onPress={() => {
              navigation.goBack();
            }}>
            {props.customName ? props.customName : route.name}
          </CustomText>
        </View>

        <TouchableOpacity
          onPress={() => {
            handleShareEventOutside();
          }}
          style={styles.container}>
          <Image
            blurRadius={blurContent ? 70 : 0}
            source={MediaAssets.ic_more_options}
            style={[styles.icon, styles.iconWidth, styles.moreOptionsIcon]}
          />
        </TouchableOpacity>
      </View>
      <Overlay
        animationType="fade"
        transparent={true}
        isVisible={shareEventOutside}
        fullScreen={false}
        onBackdropPress={handleShareEventOutside}
        overlayStyle={{
          backgroundColor: Colors.tertiaryGreyColor,
          width: 200,
          height: 54,
          position: 'absolute',
          top: Platform.OS === PlatformEnum.ios ? 80 : 40,
          right: 10,
          overflow: 'hidden',
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}>
        <Fragment>
          <TouchableOpacity
            style={styles.menuItemButton}
            onPress={() => {
              handleShareEventOutside();
            }}>
            <CustomText style={styles.menuItem}>
              Share outside Sekeron
            </CustomText>
          </TouchableOpacity>
        </Fragment>
      </Overlay>
    </Fragment>
  );
};

export default EventDetailsHeader;
