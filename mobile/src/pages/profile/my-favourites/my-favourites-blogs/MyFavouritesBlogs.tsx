import {strings} from '@sekeron/domain';
import React, {Fragment, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MediaAssets from '../../../../assets';
import Avathar from '../../../../common-components/avathar/Avathar';
import CustomText from '../../../../common-components/custom-text/CustomText';
import Colors from '../../../../resources/Colors';
import {styles} from './MyFavouritesBlogs.styles';

const Images = [
  {
    id: '1',
    projectName: 'Adventures of anna h..',
    img: 'https://picsum.photos/100',
    projectStatus: 'Art Culture',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isSaved: true,
  },
  {
    id: '2',
    projectName: 'Newyear celeb mode.. ',
    projectStatus: 'Decor',
    img: 'https://picsum.photos/200',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isSaved: true,
  },
  {
    id: '3',
    projectName: 'Mute the Saint',
    projectStatus: 'Art Culture',
    img: 'https://picsum.photos/300',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isSaved: true,
  },
  {
    id: '4',
    projectName: 'Fashion',
    projectStatus: 'Decor',
    img: 'https://picsum.photos/400',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isSaved: true,
  },
  {
    id: '5',
    projectName: 'Design',
    projectStatus: 'Art Culture',
    img: 'https://picsum.photos/500',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isSaved: true,
  },
  {
    id: '6',
    projectName: 'Cityscapes 2.0 NewYear',
    projectStatus: 'Decor',
    img: 'https://picsum.photos/600',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isSaved: true,
  },
  {
    id: '7',
    projectName: 'Mute the Saint',
    projectStatus: 'Decor',
    img: 'https://picsum.photos/700',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isSaved: true,
  },
  {
    id: '8',
    projectName: 'Fashion',
    projectStatus: 'Decor',
    img: 'https://picsum.photos/800',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isSaved: true,
  },
  {
    id: '9',
    projectName: 'Design',
    projectStatus: 'Art Culture',
    img: 'https://picsum.photos/900',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isSaved: true,
  },
  {
    id: '10',
    projectName: 'Cityscapes 2.0 NewYear',
    projectStatus: 'Art Culture',
    img: 'https://picsum.photos/1000',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isSaved: true,
  },
  {
    id: '11',
    projectName: 'Mute the Saint',
    projectStatus: 'Art Culture',
    img: 'https://picsum.photos/100',
    blogDescription: '25 most mesmerizing facts about Painting’s',
    isSaved: true,
  },
];

const MyFavouritesBlogs = (props: any) => {
  const {AvatarImages} = props;

  const [favouriteBlogs, setFavouriteBlogs] = useState(Images);

  const handleSave = (name: any) => {
    const data = favouriteBlogs?.map(item => {
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
    setFavouriteBlogs(data);
  };

  const Cards = ({item}: any) => {
    return (
      <View>
          <View style={[styles.container, {padding: 4, marginVertical: 8}]}>
            <View>
              {/* <View style={{width: 170, height: 130}}>
                <Image
                  style={styles.projectImage}
                  source={{
                    uri: item.img,
                  }}
                />
              </View> */}
              <ImageBackground
                imageStyle={styles.imageBackgroundStyle}
                style={styles.cardImagesLinearGradentSelected}
                source={{uri: item.img}}>
                <LinearGradient
                  style={styles.imageLinearGradentBlurEffect}
                  colors={[
                    Colors.transparentColor,
                    Colors.primaryThemeColor,
                  ]}></LinearGradient>
              </ImageBackground>
              <Fragment>
                <View
                  style={[styles.eventTypeContainer, styles.contentContainer]}>
                  <CustomText style={[styles.textSize]}>
                    {item?.projectStatus}
                  </CustomText>
                </View>
              </Fragment>
              <Fragment>
                <TouchableOpacity
                  onPress={() => handleSave(item.id)}
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
              style={{
                alignItems: 'flex-start',
                backgroundColor: Colors.primaryThemeColor,
                width: 170,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}>
              <View style={[styles.eventNameContainer]}>
                <CustomText style={[styles.eventName, styles.textColor]}>
                  {item?.blogDescription}
                </CustomText>
              </View>
              {AvatarImages ? (
                <View style={styles.avatharContainer}>
                  <Avathar maxLength={4} />
                </View>
              ) : (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.senaryGreyColor,
                      width: 170,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      alignSelf: 'center',
                    }}>
                    <CustomText style={[styles.followText]}>
                      READ NOW
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
        {/* <CustomText onPress={handleModalClose} style={styles.headerText}>
            {title}
          </CustomText> */}

        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            {
              //   padding: 20,
              //   borderRadius: 24,
            }
          }
          numColumns={2}
          data={favouriteBlogs}
          renderItem={({item}: any) => <Cards item={item} />}
        />
      </View>
    </View>
  );
};
export default MyFavouritesBlogs;
