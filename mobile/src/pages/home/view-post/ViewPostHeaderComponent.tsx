import {View, TouchableOpacity, Image} from 'react-native';
import React, { Fragment } from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './ViewPostHeaderComponent.styles';
import MediaAssets from '../../../assets';
import CustomText from '../../../common-components/custom-text/CustomText';

const ViewPostHeaderComponent = (props: any) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={[styles.contentContainer, styles.container]}>
      <View style={[styles.contentContainer, styles.secondaryContainer]}>
        <TouchableOpacity
          onPress={() => {
            if(props.handleBackButtonClick) {
              props.handleBackButtonClick()
            } else {
              navigation.goBack();
            }
          }}>
          <Image
            source={MediaAssets.ic_header_back_arrow}
            style={[styles.icon, styles.iconWidth]}
          />
        </TouchableOpacity>

        <CustomText
          style={styles.routeName}
          onPress={() => {
            if(props.handleBackButtonClick) {
              props.handleBackButtonClick()
            } else {
              navigation.goBack();
            }
          }}>
          {props.customName ? props.customName : props.noTitle ? null : route.name}
        </CustomText>
      </View>

      {props.isOptionsIcon ? (
        <TouchableOpacity >
          <Image
            source={MediaAssets.ic_more_options}
            style={[styles.icon, styles.iconWidth, styles.moreOptionsIcon]}
          />
        </TouchableOpacity>
      ) : null}

      {!!props.otherDetails? <Fragment>{props.otherDetails}</Fragment>: null}
    </View>
  );
};

export default ViewPostHeaderComponent;
