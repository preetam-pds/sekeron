import React, {Fragment} from 'react';
import {Image, View} from 'react-native';
import CustomCommonButton from '../../../common-components/custom-common-button/CustomCommonButton';
import CustomText from '../../../common-components/custom-text/CustomText';
import styles from './CommonCreateNewNotification.style';

interface ICommonCreateNewNotification {
  image?: any;
  createNewText: string;
  createNewButton?: string;
  createExploreButton?: string;
  createpost: boolean;
  handleCreatePost: () => void;
}

export const CommonCreateNewNotification = (
  props: ICommonCreateNewNotification,
) => {
  const {
    image,
    createNewText,
    createNewButton,
    createExploreButton,
    handleCreatePost,
    createpost,
  } = props;

  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.secondaryContainer}>
          {image && <Image style={styles.createNewNotificatonImage} source={image} />}
          <View style={styles.tertiaryContainer}>
            <CustomText style={styles.createNewNotifcationText}>
              {createNewText}
            </CustomText>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSpacing}>
            {createNewButton ? (
              <CustomCommonButton
                name={createNewButton}
                onPress={handleCreatePost}
                fontSize="sm"
                rounded="2xl"
              />
            ) : null}
          </View>
          {createExploreButton ? (
            <View style={styles.buttonSpacing}>
              <CustomCommonButton
                name={createExploreButton}
                fontSize="sm"
                rounded="2xl"
                onPress={handleCreatePost}
              />
            </View>
          ) : null}
        </View>
      </View>
    </Fragment>
  );
};
