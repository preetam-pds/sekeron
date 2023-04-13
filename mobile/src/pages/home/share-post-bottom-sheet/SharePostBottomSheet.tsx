import {
  View,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  TextInput,
} from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';
import CustomCommonButton from '../../../common-components/custom-common-button/CustomCommonButton';
import CustomText from '../../../common-components/custom-text/CustomText';
import BottomSheet from '../../../common-components/bottom-sheet/BottomSheet';
import styles from './SharePostBottomSheet.style';
import Colors from '../../../resources/Colors';
import MediaAssets from '../../../assets';
import {ShareToData} from '../../../json/shareOrFollowJson';
import {strings} from '@sekeron/domain';

const EmptyArray = [{id: 1, noData: "You Don't Have Such Named Follower"}];

const SharePostList = (props: any) => {
  const {sharePost, setSharePost, toggleSharePostSheet} = props;

  const [sentOrNotValue, setSentOrNotValue] = useState<any>(ShareToData);
  const [searchValue, setSearchValue] = useState<any>(sentOrNotValue);

  useEffect(() => {
    setSearchValue(ShareToData);
  }, [sharePost]);

  const handleFilterDataBySearch = (inputValue: any) => {
    setSearchValue(inputValue);
    const data = sentOrNotValue.filter((item: any) => {
      if (
        item?.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        item?.profileId.toLowerCase().includes(inputValue.toLowerCase())
      ) {
        return item;
      }
    });
    setSearchValue(data);
  };

  const handleClick = (name: any) => {
    const data = searchValue.map(item => {
      if (item.id === name) {
        return {
          ...item,
          sentOrNot: !item.sentOrNot,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setSearchValue(data);
  };

  const RenderSharePost = ({item}: any) => {
    return (
      <Fragment>
        <TouchableWithoutFeedback>
          {searchValue?.length > 0 ? (
            <View style={styles.container}>
              <View style={styles.secondaryContainer}>
                <Image
                  style={styles.avatarImagePrimary}
                  source={{
                    uri: item?.imageURI,
                  }}
                />

                <View style={styles.textContainer}>
                  <CustomText style={styles.profileNameRegular}>
                    {item?.name?.length >= 10
                      ? item?.name.slice(0, 10) + '...'
                      : item?.name}
                  </CustomText>
                  <CustomText style={styles.profileNameLightText}>
                    {item?.profileId}
                  </CustomText>
                </View>
              </View>
              <CustomCommonButton
                onPress={() => {
                  handleClick(item.id);
                }}
                name={item.sentOrNot ? strings.sent : strings.send}
                done={item?.sentOrNot}
                isHorizontalLeftCurved
              />
            </View>
          ) : (
            <CustomText style={styles.emptyProfileName}>
              {item.noData}
            </CustomText>
          )}
        </TouchableWithoutFeedback>
      </Fragment>
    );
  };

  const SharePostComponent = () => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.shareContainer}>
          <Image
            style={styles.SharePostImage}
            source={{uri: 'https://randomuser.me/api/portraits/men/41.jpg'}}
          />
          <TextInput
            style={styles.SharePostMessage}
            placeholderTextColor={Colors.secondaryGreyColor}
            placeholder={'Write a message….'}
          />
        </View>

        <View style={styles.SharePostSearchInput}>
          <Image
            style={styles.SharePostSearchImage}
            source={MediaAssets.ic_search_inactive}
          />
          <TextInput
            style={styles.SharePostTextInput}
            placeholderTextColor={Colors.secondaryGreyColor}
            placeholder={'Search'}
            value={searchValue}
            onChangeText={value => handleFilterDataBySearch(value)}
          />
        </View>
        <FlatList
          data={searchValue?.length > 0 ? searchValue : EmptyArray}
          keyExtractor={(item): any => item.id}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          keyboardShouldPersistTaps={'handled'}
          renderItem={({item}: any) => <RenderSharePost item={item} />}
          extraData={sentOrNotValue}
        />
      </View>
    );
  };

  return (
    <Fragment>
      <BottomSheet
        renderItem={SharePostComponent}
        setModalVisible={setSharePost}
        isModalVisible={sharePost}
        toggleModal={toggleSharePostSheet}
      />
    </Fragment>
  );
};

export default SharePostList;
