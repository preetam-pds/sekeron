import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Fragment, useState} from 'react';
import CreatePostModal from '../../pages/create-post/create-post-modal/CreatePostModal';
import Header from '../../pages/home/header/Header';
import {routes} from '../route-names/RouteName';
import {BlurView} from '@react-native-community/blur';
import CreatePostScreen from '../../pages/create-post/create-post-screen/CreatePostScreen';
import HeaderWithBackButton from '../../common-components/header-with-back-button/HeaderWithBackButton';
import {CreatePostRedux, strings} from '@sekeron/domain';
import globalStyles from '../../resources/globalStyles';
import CameraComponent from '../../common-components/camera/Camera';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AdditionalPostDetailsComponent from '../../components/additional-post-details-component/AdditionalPostDetailsComponent';
import {useNavigation} from '@react-navigation/native';
import ReOrderPostDetails from '../../components/re-order-post-details/ReOrderPostDetails';
import PreviewPost from '../../components/preview-post/PreviewPost';
import styles from './CreatePostStackNavigator.Style';
import CancelDialog from '../../common-components/cancel-dialog/CancelDialog';
import MediaAssets from '../../assets';

const CreatePostStack = createNativeStackNavigator();

const CreatePostStackNavigator = (props: any) => {
  const {isCreatePostModalVisible, setIsCreatePostModalVisible} = props;
  const [isModalOpened, setIsModalOpened] = useState(false);

  const isModalOpenHandler = value => {
    setIsModalOpened(value);
  };

  const createPostState = useSelector((state: any) => state.CreatePostRedux);
  const navigation: any = useNavigation();
  const actionDispatch = (dispatch: any) => ({
    setCreatePostState: (data: any) =>
      dispatch(CreatePostRedux.actions.setCreatePostState(data)),
  });

  const {setCreatePostState} = actionDispatch(useDispatch());

  const handleNextButtonClick = name => {
    if (name !== routes.addAdditionalPostDetails) {
      navigation.navigate(routes.addAdditionalPostDetails);
    } else {
      navigation.navigate(routes.previewPost);
    }
  };

  const handleClearAll = () => {
    let postDetails = {
      title: '',
      description: '',
      backgroundColor: 'rgba(47, 119, 150, 0.7)',
      cardBackgroundColor: 'rgba(47, 119, 150, 0.7)',
      mediaContent: [],
      timestamp: [],
    };
    setCreatePostState({
      key: 'postDetails',
      value: postDetails,
    });
    setIsModalOpened(false);
    navigation.navigate(routes.createPost);
  };

  const getHeaderDetails = name => {
    return (
      <Fragment>
        {createPostState.postDetails.mediaContent.length > 0 ? (
          <View style={styles.headerDetailsContainer}>
            {name === routes.addAdditionalPostDetails ? (
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.reorder)}>
                <Text style={styles.clearAllOrReorderText}>
                  {strings.reorder}
                </Text>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity onPress={() => isModalOpenHandler(true)}>
              <Text style={styles.clearAllOrReorderText}>
                {strings.clearAll}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNextButtonClick(name)}>
              <Text style={styles.nextText}>{strings.next}</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </Fragment>
    );
  };

  const handleBackButtonClick = () => {
    navigation.navigate(routes.addAdditionalPostDetails);
  };

  return (
    <Fragment>
      <CreatePostStack.Navigator
        initialRouteName={routes.createPostModal}
        screenOptions={{
          headerShown: true,
        }}>
        <CreatePostStack.Screen
          name={routes.createPostModal}
          children={props => (
            <CreatePostModal
              {...props}
              isModalVisible={isCreatePostModalVisible}
              setIsModalVisible={setIsCreatePostModalVisible}
            />
          )}
          options={{
            header: () => {
              return (
                <Fragment>
                  <Header />
                  <BlurView
                    style={globalStyles.blurViewStyles}
                    blurType="dark"
                    blurAmount={1}
                    reducedTransparencyFallbackColor="white"
                  />
                </Fragment>
              );
            },
          }}
        />

        <CreatePostStack.Screen
          name={routes.createPost}
          component={CreatePostScreen}
          options={{
            header: () => {
              return (
                <Fragment>
                  <HeaderWithBackButton
                    customName={strings.createAPost}
                    otherDetails={getHeaderDetails(routes.createPost)}
                  />
                </Fragment>
              );
            },
          }}
        />

        <CreatePostStack.Screen
          name={routes.addAdditionalPostDetails}
          component={AdditionalPostDetailsComponent}
          options={{
            header: () => {
              return (
                <Fragment>
                  <HeaderWithBackButton
                    customName={strings.createAPost}
                    otherDetails={getHeaderDetails(
                      routes.addAdditionalPostDetails,
                    )}
                  />
                </Fragment>
              );
            },
          }}
        />

        <CreatePostStack.Screen
          name={routes.reorder}
          children={() => <ReOrderPostDetails />}
          options={{
            header: () => {
              return null;
            },
          }}
        />

        <CreatePostStack.Screen
          name={routes.previewPost}
          component={PreviewPost}
          options={{
            header: () => {
              return (
                <Fragment>
                  <HeaderWithBackButton
                    customName={strings.previewPost}
                    handleBackButtonClick={handleBackButtonClick}
                  />
                </Fragment>
              );
            },
          }}
        />

        <CreatePostStack.Screen
          name={routes.cameraScreen}
          component={CameraComponent}
          options={{
            header: () => {
              return <Fragment></Fragment>;
            },
          }}
        />
      </CreatePostStack.Navigator>
      <CancelDialog
        cancelTitle={strings.cancelPostCreation}
        text={
          <Text style={styles.cancelText}>{strings.youMightLoseChanges}</Text>
        }
        icon={MediaAssets.ic_diamond_shape}
        shouldOpen={isModalOpened}
        isModalOpenHandler={() => {
          isModalOpenHandler;
        }}
        cancelButtonClick={() => {
          handleClearAll();
        }}
        stayButtonClick={() => {
          setIsModalOpened(false);
        }}
      />
    </Fragment>
  );
};

export default CreatePostStackNavigator;
