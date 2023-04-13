import {View, TouchableOpacity, Image} from 'react-native';
import React, {Fragment} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomText from '../../../common-components/custom-text/CustomText';
import MediaAssets from '../../../assets';
import Colors from '../../../resources/Colors';
import styles from './EditProfileHeader.styles';
import {strings} from '@sekeron/domain';
import {useFormikContext} from 'formik';

const ProfileEditHeader = (props: any) => {
  const {blurContent, handlePressedSubmit} = props;
  const {handleSubmit} = useFormikContext<any>();

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
            handleSubmit();
            handlePressedSubmit();
          }}
          style={styles.container}>
          <CustomText type="Submit" style={styles.submitButton}>
            {strings.saveChanges}
          </CustomText>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default ProfileEditHeader;
