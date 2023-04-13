import {strings} from '@sekeron/domain';
import React, {Fragment} from 'react';
import {View, FlatList, Image, TouchableOpacity, Modal} from 'react-native';
import MediaAssets from '../../../../../assets';
import Avathar from '../../../../../common-components/avathar/Avathar';
import CustomText from '../../../../../common-components/custom-text/CustomText';
import styles from './ProfileProjectModal.style';

const Images = [
  {
    id: '1',
    projectName: 'Adventures of anna h..',
    img: 'https://picsum.photos/100',
    profileName: 'Gary Hoffman',
    projectStatus: 'Completed',
  },
  {
    id: '2',
    projectName: 'Newyear celeb mode.. ',
    projectStatus: 'Ongoing',
    profileName: 'Gary Hoffman',
    img: 'https://picsum.photos/200',
  },
  {
    id: '3',
    projectName: 'Mute the Saint',
    projectStatus: 'Completed',
    profileName: 'Gary Hoffman',
    img: 'https://picsum.photos/300',
  },
  {
    id: '4',
    projectName: 'Fashion',
    projectStatus: 'Ongoing',
    profileName: 'Gary Hoffman',
    img: 'https://picsum.photos/400',
  },
  {
    id: '5',
    projectName: 'Design',
    projectStatus: 'Completed',
    profileName: 'Gary Hoffman',
    img: 'https://picsum.photos/500',
  },
  {
    id: '6',
    projectName: 'Cityscapes 2.0 NewYear',
    projectStatus: 'Ongoing',
    profileName: 'Gary Hoffman',
    img: 'https://picsum.photos/600',
  },
  {
    id: '7',
    projectName: 'Mute the Saint',
    projectStatus: 'Ongoing',
    profileName: 'Gary Hoffman',
    img: 'https://picsum.photos/700',
  },
  {
    id: '8',
    projectName: 'Fashion',
    projectStatus: 'Ongoing',
    profileName: 'Gary Hoffman',
    img: 'https://picsum.photos/800',
  },
  {
    id: '9',
    projectName: 'Design',
    projectStatus: 'Completed',
    profileName: 'Gary Hoffman',
    img: 'https://picsum.photos/900',
  },
  {
    id: '10',
    projectName: 'Cityscapes 2.0 NewYear',
    projectStatus: 'Completed',
    profileName: 'Gary Hoffman',
    img: 'https://picsum.photos/1000',
  },
  {
    id: '11',
    projectName: 'Mute the Saint',
    projectStatus: 'Completed',
    profileName: 'Gary Hoffman',
    img: 'https://picsum.photos/100',
  },
];

const ProfileProjectModal = (props: any) => {
  const {title, isModalVisible, handleModalClose, AvatarImages} = props;

  const Cards = ({item}: any) => {
    return (
      <View>
        <TouchableOpacity>
          <View style={[styles.container]}>
            <View>
              <View style={styles.subContainer}>
                <Image
                  style={styles.projectImage}
                  source={{
                    uri: item.img,
                  }}
                />
              </View>
              <Fragment>
                <View
                  style={[styles.eventTypeContainer, styles.contentContainer]}>
                  <View style={styles.profileProjectImage}>
                    <Image
                      style={styles.imageStyles}
                      source={
                        item?.projectStatus !== 'Completed'
                          ? MediaAssets.ic_status_on_going_icon
                          : MediaAssets.ic_status_complete_icon
                      }
                    />
                  </View>
                  <CustomText
                    style={[
                      styles.textSize,
                      item?.projectStatus !== 'Completed'
                        ? styles.statusOngoingColor
                        : styles.statusCompletedColor,
                    ]}>
                    {item?.projectStatus}
                  </CustomText>
                </View>
              </Fragment>
            </View>

            <View
              style={styles.profileProjectContainer}>
              <View style={[styles.profileProjectSubContainer]}>
                <CustomText style={[styles.eventName, styles.textColor]}>
                  {item?.projectName}
                </CustomText>
              </View>
              {AvatarImages ? (
                <View style={styles.avatharContainer}>
                  <Avathar maxLength={4} />
                </View>
              ) : (
                <View
                  style={styles.profileProjectSecondContainer}>
                  <View style={styles.profileDetailsImage}>
                    <Image
                      style={styles.profileDetailsInnerImage}
                      source={{
                        uri: 'https://images.pexels.com/photos/12850797/pexels-photo-12850797.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
                      }}
                    />
                  </View>
                  <CustomText style={[styles.profileName, styles.textSize]}>
                    {item?.profileName?.length >= 10
                      ? item?.profileName.slice(0, 10) + '...'
                      : item?.profileName}
                  </CustomText>
                  <TouchableOpacity>
                    <CustomText style={[styles.followText, styles.textSize]}>
                      {strings.follow}
                    </CustomText>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Modal
      animationType="slide"
      visible={isModalVisible}
      onRequestClose={handleModalClose}
      transparent={true}
      style={styles.modalContainer}>
      <TouchableOpacity onPress={handleModalClose} style={styles.centeredView}>
        <View style={styles.modalView}>
          <CustomText onPress={handleModalClose} style={styles.headerText}>
            {title}
          </CustomText>

          <FlatList
            columnWrapperStyle={{justifyContent: 'space-between'}}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={Images}
            renderItem={({item}: any) => <Cards item={item} />}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
export default ProfileProjectModal;
