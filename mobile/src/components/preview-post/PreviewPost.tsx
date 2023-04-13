import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';
import {strings} from '@sekeron/domain';
import React, {Fragment, useState} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import MediaAssets from '../../assets';
import CommonButton from '../../common-components/common-button/CommonButton';
import CustomText from '../../common-components/custom-text/CustomText';
import SuccessDialog from '../../common-components/success-dialog/SuccessDialog';
import {routes} from '../../navigation/route-names/RouteName';
import globalStyles from '../../resources/globalStyles';
import SelectedCreatePost from '../selected-create-post/SelectedCreatePost';
import styles from './PreviewPost.Style';

const PreviewPost = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const isModalOpenHandler = value => {
    setIsModalOpened(value);
    setTimeout(() => {
      setIsModalOpened(false);
      //setIsUserDetailsPage(true);
    }, 3000);
  };
  const navigation: any = useNavigation();
  const createPostState = useSelector((state: any) => state.CreatePostRedux);
  return (
    <Fragment>
      <ScrollView>
        {createPostState.postDetails.description ||
        createPostState.postDetails.title ? (
          <View style={styles.inputContainer}>
            <Text style={styles.titleText}>
              {createPostState.postDetails.title}
            </Text>
            <Text style={styles.descriptionText}>
              {createPostState.postDetails.description}
            </Text>
          </View>
        ) : null}
        <SelectedCreatePost isScroll={false} scrollToEnd={false} />
        <View style={styles.buttonContainer}>
          <CommonButton
            title={strings.publishPost}
            onPress={() => {
              isModalOpenHandler(true);
            }}
            applyGradient={true}
            style={{width: 200}}
            disabled={false}
          />

          <CommonButton
            title={strings.backToEditPost}
            onPress={() => {
              navigation.navigate(routes.createPost);
            }}
            applyGradient={true}
            isBorderGradientEnabled={true}
            style={{width: 250}}
            disabled={false}
          />
        </View>

        <SuccessDialog
          text={
            <CustomText
              style={styles.succesText}>
              {strings.publishPostSuccessMessage}
            </CustomText>
          }
          icon={MediaAssets.ic_diamond_shape}
          shouldOpen={isModalOpened}
          isModalOpenHandler={isModalOpenHandler}
        />
      </ScrollView>
      {isModalOpened ? (
        <BlurView
          style={globalStyles.blurViewStyles}
          blurType="dark"
          blurAmount={1}
          reducedTransparencyFallbackColor="white"
        />
      ) : null}
    </Fragment>
  );
};
export default PreviewPost;
