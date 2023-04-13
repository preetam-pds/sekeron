import {strings} from '@sekeron/domain';
import React, {Fragment, useState} from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import MediaAssets from '../../../../assets';
import Avathar from '../../../../common-components/avathar/Avathar';
import CustomText from '../../../../common-components/custom-text/CustomText';
import {styles} from './MyFavouritesProject.styles';

const Images = [
  {
    id: '1',
    projectName: 'Adventures of anna h..',
    img: 'https://picsum.photos/100',
    projectStatus: 'Completed',
    profileName: 'Gary Hoffman',
    isSaved: true,
  },
  {
    id: '2',
    projectName: 'Newyear celeb mode.. ',
    projectStatus: 'Ongoing',
    img: 'https://picsum.photos/200',
    profileName: 'Gary Hoffman',
    isSaved: true,
  },
  {
    id: '3',
    projectName: 'Mute the Saint',
    projectStatus: 'Completed',
    img: 'https://picsum.photos/300',
    profileName: 'Gary Hoffman',
    isSaved: true,
  },
  {
    id: '4',
    projectName: 'Fashion',
    projectStatus: 'Ongoing',
    img: 'https://picsum.photos/400',
    profileName: 'Gary Hoffman',
    isSaved: true,
  },
  {
    id: '5',
    projectName: 'Design',
    projectStatus: 'Completed',
    img: 'https://picsum.photos/500',
    profileName: 'Gary Hoffman',
    isSaved: true,
  },
  {
    id: '6',
    projectName: 'Cityscapes 2.0 NewYear',
    projectStatus: 'Ongoing',
    img: 'https://picsum.photos/600',
    profileName: 'Gary Hoffman',
    isSaved: true,
  },
  {
    id: '7',
    projectName: 'Mute the Saint',
    projectStatus: 'Ongoing',
    img: 'https://picsum.photos/700',
    profileName: 'Gary Hoffman',
    isSaved: true,
  },
  {
    id: '8',
    projectName: 'Fashion',
    projectStatus: 'Ongoing',
    img: 'https://picsum.photos/800',
    profileName: 'Gary Hoffman',
    isSaved: true,
  },
  {
    id: '9',
    projectName: 'Design',
    projectStatus: 'Completed',
    img: 'https://picsum.photos/900',
    profileName: 'Gary Hoffman',
    isSaved: true,
  },
  {
    id: '10',
    projectName: 'Cityscapes 2.0 NewYear',
    projectStatus: 'Completed',
    img: 'https://picsum.photos/1000',
    profileName: 'Gary Hoffman',
    isSaved: true,
  },
  {
    id: '11',
    projectName: 'Mute the Saint',
    projectStatus: 'Completed',
    img: 'https://picsum.photos/100',
    profileName: 'Gary Hoffman',
    isSaved: true,
  },
];

const MyFavouritesProject = (props: any) => {
  const {AvatarImages} = props;

  const [favouriteProjects, setFavouriteProjects] = useState(Images);

  const handleSave = (name: any) => {
    const data = favouriteProjects?.map(item => {
      if (item.id === name) {
        return {
          ...item,
          isSaved: !item.isSaved,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setFavouriteProjects(data);
  };
  
  const Cards = ({item}: any) => {
    return (
      <View>
          <View style={[styles.container]}>
            <View>
              <View style={{width: 170, height: 190}}>
                <Image
                  style={styles.projectImage}
                  source={{
                    uri: item.img,
                  }}
                />
              </View>
              <Fragment>
                <View
                  style={[styles.favouriteTypeContainer, styles.contentContainer]}>
                  <View style={styles.favouriteSubConatiner}>
                    <Image
                      style={styles.innerImageWidth}
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
              <Fragment>
                <TouchableOpacity
                  onPress={() => {
                    handleSave(item.id);
                  }}
                  style={styles.favouriteIcon}>
                  {item?.isSaved ? (
                    <Image
                      source={MediaAssets.ic_save_active}
                      style={[styles.Icon, styles.saveIcon]}
                    />
                  ) : (
                    <Image
                      source={MediaAssets.ic_save}
                      style={[styles.Icon, styles.saveIcon]}
                    />
                  )}
                </TouchableOpacity>
              </Fragment>
            </View>

            <View
              style={styles.projectViewContainer}>
              <View style={[styles.favouriteNameContainer]}>
                <CustomText style={[styles.favouriteName, styles.textColor]}>
                  {item?.projectName}
                </CustomText>
              </View>
              {AvatarImages ? (
                <View style={styles.avatharContainer}>
                  <Avathar maxLength={4} />
                </View>
              ) : (
                <View
                  style={styles.imageOuterContainer}>
                  <View style={styles.imageInnerWidth}>
                    <Image
                      style={styles.imageCoverStyle}
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
      </View>
    );
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>

        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={favouriteProjects}
          renderItem={({item}: any) => <Cards item={item} />}
        />
      </View>
    </View>
  );
};
export default MyFavouritesProject;
