import React, {Fragment} from 'react';
import {View, Image, Pressable, TouchableOpacity} from 'react-native';
import MediaAssets from '../../assets';
import CustomText from '../custom-text/CustomText';
import {strings} from '@sekeron/domain';
import styles from './CreateNewPostProjectModal.Style';
import {Overlay} from '@rneui/themed';

interface IToolTipComponent {
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
  handleNewPostClick: () => void;
}

const CreatePostOrProjectModal = (props: IToolTipComponent) => {
  const {isModalVisible, setIsModalVisible, handleNewPostClick} = props;

  return (
    <Overlay
      animationType="slide"
      isVisible={isModalVisible}
      fullScreen={false}
      transparent={true}
      overlayStyle={styles.centeredView}
      onBackdropPress={() => setIsModalVisible(!isModalVisible)}>
      <View>
        <Pressable
          style={[styles.modalStyle]}
          onPress={() => setIsModalVisible(!isModalVisible)}>
          <Fragment>
            <TouchableOpacity onPress={handleNewPostClick}>
              <View style={styles.createNewPostOrProjectContainer}>
                <CustomText style={styles.createNewTextStyle}>
                  {strings.newPost}
                </CustomText>
                <Image
                  style={styles.createNewImageStyle}
                  source={MediaAssets.ic_create_new_postIcon}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.createNewPostOrProjectContainer}>
                <CustomText style={styles.createNewTextStyle}>
                  {strings.newProject}
                </CustomText>
                <Image
                  style={styles.createNewImageStyle}
                  source={MediaAssets.ic_create_new_projectIcon}
                />
              </View>
            </TouchableOpacity>
          </Fragment>
        </Pressable>
      </View>
    </Overlay>
  );
};

export default CreatePostOrProjectModal;
