import React, {Fragment} from 'react';
import {Image, View} from 'react-native';
import {Overlay} from '@rneui/themed';
import MediaAssets from '../../assets';
import CustomCommonButton from '../custom-common-button/CustomCommonButton';
import CustomText from '../custom-text/CustomText';
import {styles} from './FlashMessage.Style';

export const OverlayExample = (props: any) => {
  const {isOpen, handleCloser, isSuccess, noImage, cancel, OverFollow} = props;

  /* here we can options 
    1. if noImage then Image will not displayed.
    2. cancel as props then cancel button.
    3. isSuccess then right icon else cross icon.
  */

  return (
    <View style={styles.container}>
      <Overlay
        animationType="slide"
        isVisible={isOpen}
        fullScreen={false}
        onBackdropPress={handleCloser}
        overlayStyle={styles.overlayContainer}>
        <View style={{alignSelf: 'center'}}>
          {noImage ? (
            <View style={{marginTop: 20}}></View>
          ) : (
            <Image
              style={styles.imageStyle}
              source={
                isSuccess
                  ? MediaAssets.ic_succesfully_applied_icon
                  : MediaAssets.ic_delete
              }
            />
          )}
          {OverFollow ? (
            <Fragment>
              <CustomText style={styles.flashMessageDarkGreyRegular}>
                Are you sure you want to
              </CustomText>
              <View
                style={styles.textFollowOrNot}>
                <CustomText style={styles.flashMessageDarkGreyRegular}>
                  unfollow
                </CustomText>
                <CustomText style={styles.flashMessageHighLighted}>
                  username
                </CustomText>
              </View>
            </Fragment>
          ) : (
            <Fragment>
              <CustomText style={styles.flashMessageRegular}>
                Congratulations ! You have succesfully applied to{' '}
              </CustomText>
              <CustomText style={styles.flashMessageHighLighted}>
                SPARKS
              </CustomText>
            </Fragment>
          )}

          <View style={styles.textContainer}>
            {cancel && (
              <View style={styles.buttonContainer}>
                <CustomCommonButton
                  greyOutlinedButton
                  onPress={() => handleCloser()}
                  name={'No'}
                />
              </View>
            )}
            <View style={styles.buttonContainer}>
              <CustomCommonButton onPress={() => handleCloser()} name={'Yes'} />
            </View>
          </View>
        </View>
      </Overlay>
    </View>
  );
};
