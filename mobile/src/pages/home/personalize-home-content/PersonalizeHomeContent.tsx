import React, {useState, useRef} from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Overlay} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import MediaAssets from '../../../assets';
import CustomCommonButton from '../../../common-components/custom-common-button/CustomCommonButton';
import CustomText from '../../../common-components/custom-text/CustomText';
import Colors from '../../../resources/Colors';
import styles from './PersonalizeHomeContent.style';

const Images = [
  {
    id: '1',
    title: 'Design',
    img: 'https://picsum.photos/100',
  },
  {
    id: '2',
    title: 'Music',

    img: 'https://picsum.photos/200',
  },
  {
    id: '3',
    title: 'Dance',

    img: 'https://picsum.photos/300',
  },
  {
    id: '4',
    title: 'Fashion',

    img: 'https://picsum.photos/400',
  },
  {
    id: '5',
    title: 'Design',

    img: 'https://picsum.photos/500',
  },
  {
    id: '6',
    title: 'Music',
    img: 'https://picsum.photos/600',
  },
  {
    id: '7',
    title: 'Dance',
    img: 'https://picsum.photos/700',
  },
  {
    id: '8',
    title: 'Fashion',
    img: 'https://picsum.photos/800',
  },
  {
    id: '9',
    title: 'Design',
    img: 'https://picsum.photos/900',
  },
  {
    id: '10',
    title: 'Music',
    img: 'https://picsum.photos/1000',
  },
  {
    id: '11',
    title: 'Dance',
    img: 'https://picsum.photos/100',
  },
];

const PersonalizeHomeContent = (props: any) => {
  let listViewRef: any = useRef(null);

  const {isModalVisible, handleModalClose} = props;

  const [isScroll, setIsScroll] = useState(false);
  const [selected, setSelected] = useState([]);

  const isSelected = (name: any) => selected.indexOf(name) !== -1;

  const handleClick = (name: any) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const EndButtonHandler = () => {
    if (isScroll) {
      listViewRef.scrollToOffset({offset: 0, animated: true});
    } else {
      listViewRef.scrollToEnd({animated: true});
    }
    setIsScroll(!isScroll);
  };

  const EndReachedInFlatList = () => {
    if (isScroll) {
      listViewRef.scrollToOffset({offset: 0, animated: true});
    } else {
      listViewRef.scrollToEnd({animated: false});
    }
    setIsScroll(!isScroll);
  };

  const Cards = ({item}: any) => {
    const isItemSelected = isSelected(item.id);
    return (
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            handleClick(item.id);
          }}>
          {/* {isItemSelected ? (
            <Image style={styles.cardImagesSelected} source={{uri: item.img}} />
          ) : (
            <Image style={styles.cardImages} source={{uri: item.img}} />
          )} */}
          {isItemSelected ? (
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
          ) : (
            <ImageBackground
              imageStyle={styles.imageBackgroundStyle}
              style={styles.cardImagesLinearGradent}
              source={{uri: item.img}}>
              <LinearGradient
                style={styles.imageLinearGradentBlurEffect}
                colors={[
                  Colors.transparentColor,
                  Colors.primaryThemeColor,
                ]}></LinearGradient>
            </ImageBackground>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.selectIcon}
          onPress={() => {
            handleClick(item.id);
          }}>
          {isItemSelected ? (
            <Image
              source={MediaAssets.ic_selectcard}
              style={styles.enableSelectIcon}
            />
          ) : (
            <Image
              source={MediaAssets.ic_selectcard}
              style={styles.disableSelectIcon}
            />
          )}
        </TouchableOpacity>

        <View style={styles.titleText}>
          <CustomText
            onPress={() => {
              handleClick(item.id);
            }}
            style={styles.texts}>
            {item.title}
          </CustomText>
        </View>
      </View>
    );
  };

  return (
    <Overlay
      animationType="slide"
      isVisible={isModalVisible}
      fullScreen={false}
      onBackdropPress={handleModalClose}
      overlayStyle={styles.overlayContainer}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <CustomText style={styles.headerText}>
            Select what amuses you!
          </CustomText>

          <FlatList
            columnWrapperStyle={{justifyContent: 'space-around'}}
            showsVerticalScrollIndicator={false}
            ref={ref => {
              listViewRef = ref;
            }}
            contentContainerStyle={{
              padding: 20,
              borderRadius: 24,
            }}
            numColumns={2}
            data={Images}
            renderItem={({item}: any) => <Cards item={item} />}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={EndReachedInFlatList}
          />
          <View style={styles.scrollIconContainer}>
            <TouchableOpacity
              onPress={() => {
                EndButtonHandler();
              }}>
              {isScroll ? (
                <Image
                  source={MediaAssets.ic_scrollmodel}
                  style={styles.scrollUpIcon}
                />
              ) : (
                <Image
                  source={MediaAssets.ic_scrollmodel}
                  style={styles.scrollDownIcon}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <CustomCommonButton
              onPress={handleModalClose}
              name="Lets get started"
            />
          </View>
        </View>
      </View>
    </Overlay>
  );
};
export default PersonalizeHomeContent;
