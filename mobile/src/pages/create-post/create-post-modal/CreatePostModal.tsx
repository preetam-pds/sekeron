import {View} from 'react-native';
import React, {Fragment} from 'react';
import {useNavigation} from '@react-navigation/native';
import CreatePostOrProjectModal from '../../../common-components/create-new-post-project-modal/CreateNewPostProjectModal';
import {BlurView} from '@react-native-community/blur';
import {routes} from '../../../navigation/route-names/RouteName';
import globalStyles from '../../../resources/globalStyles';

const CreatePostModal = ({isModalVisible, setIsModalVisible}) => {
  const navigation: any = useNavigation();

  const handleNewPostClick = () => {
    navigation.navigate(routes.createPost);
    setIsModalVisible(false);
  };

  return (
    <Fragment>
      <BlurView
        style={globalStyles.blurViewStyles}
        blurType="dark"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />

      <View>
        <CreatePostOrProjectModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          handleNewPostClick={() => handleNewPostClick()}
        />
      </View>
    </Fragment>
  );
};

export default CreatePostModal;
