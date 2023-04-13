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
import Colors from '../../../resources/Colors';
import MediaAssets from '../../../assets';
import { strings} from '@sekeron/domain';
import { ShareToData } from '../../../json/shareOrFollowJson';
import styles from './AdmirationsBottomSheet.style';

const EmptyArray = [{id: 1, noData: "You Don't Have Such Named Follower"}];

const AdmirationsList = (props: any) => {
  const {followAdmirations, setFollowAdmirations, toggleFollowAdmirations} = props;

  const [isSentOrNotState, setIsSentOrNotState] = useState<any>(ShareToData);
  const [searchValue, setSearchValue] = useState<any>(isSentOrNotState || '');

  useEffect(() => {
    setSearchValue(ShareToData)
  }, [followAdmirations])
  
  const handleFilterDataBySearch = (inputValue: any) => {
    setSearchValue(inputValue);
    const data = isSentOrNotState.filter((item: any) => {
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
          followedOrNot: !item.followedOrNot,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setSearchValue(data);
  };

  const RenderAdmirations = ({item}: any) => {
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
                  <CustomText style={styles.notifierRegularText}>
                    {item?.name?.length >= 10
                      ? item?.name.slice(0, 10) + '...'
                      : item?.name}
                  </CustomText>
                </View>
              </View>
              <CustomCommonButton
                onPress={() => {
                  handleClick(item.id);
                }}
                name={
                  item.followedOrNot ? strings.following : strings.follow
                }
                done={item?.followedOrNot}
                isHorizontalLeftCurved
              />
            </View>
          ) : (
            <CustomText style={styles.notifierEmptyText}>
              {item.noData}
            </CustomText>
          )}
        </TouchableWithoutFeedback>
      </Fragment>
    );
  };

  const AdmirationsComponent = () => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.shareContainer}>
          <CustomText style={styles.notifierRegularText}>
            Admirations
          </CustomText>
          <View style={styles.admirationNumbers}>
          <CustomText style={styles.notifierLightText}>32</CustomText>
          </View>
        </View>

        <View style={styles.postCommentInputBox}>
          <Image
            style={styles.postCommentImage}
            source={MediaAssets.ic_search_inactive}
          />
          <TextInput
            style={styles.postCommentTextInput}
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
          renderItem={({item}: any) => <RenderAdmirations item={item} />}
          extraData={isSentOrNotState}
        />
      </View>
    );
  };

  return (
    <Fragment>
      <BottomSheet
        renderItem={AdmirationsComponent}
        setModalVisible={setFollowAdmirations}
        isModalVisible={followAdmirations}
        toggleModal={toggleFollowAdmirations}
      />
    </Fragment>
  );
};

export default AdmirationsList;
