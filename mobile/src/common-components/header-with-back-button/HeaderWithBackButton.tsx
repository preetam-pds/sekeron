import {View, TouchableOpacity, Image} from 'react-native';
import React, { Fragment } from 'react';
import MediaAssets from '../../assets';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './HeaderWithBackButton.Style';
import CustomText from '../custom-text/CustomText';

const HeaderWithBackButton = (props: any) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={[styles.contentContainer, styles.container]}>
      <View style={[styles.contentContainer, styles.secondaryContainer]}>
        {props.disbableBackButton ? null :  
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
}

        <CustomText
          style={styles.routeName}
          onPress={() => {
          if(!props.disbableBackButton) {
            if(props.handleBackButtonClick) {
              props.handleBackButtonClick()
            } else {
              navigation.goBack();
            }

          }
          }}>
          {props.customName ? props.customName : route.name}
        </CustomText>
      </View>

      {props.isViewPost ? (
        <TouchableOpacity>
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

export default HeaderWithBackButton;
