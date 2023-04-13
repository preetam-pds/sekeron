import {View, TouchableOpacity, Image} from 'react-native';
import React, {Fragment} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './ViewBlogHeader.style';
import CustomText from '../../../common-components/custom-text/CustomText';
import MediaAssets from '../../../assets';
import Colors from '../../../resources/Colors';
import {Overlay} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';
import {blogsRedux, ThemeEnum} from '@sekeron/domain';

const ViewBlogHeader = (props: any) => {
  const {blurContent, handleMenuOption, isMenuOption, route, backArrow} = props;
  const navigation = useNavigation();
  // const route = useRoute();

  const blogsState = useSelector((state: any) => state.blogsRedux);

  const actionDispatch = (dispatch: any) => ({
    setBlogState: (data: any) =>
      dispatch(blogsRedux.actions.setBlogState(data)),
  });
  const {setBlogState} = actionDispatch(useDispatch());

  return (
    <Fragment>
      <View style={[styles.contentContainer, styles.container]}>
        <View style={[styles.contentContainer, styles.secondaryContainer]}>
          {backArrow ? (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={MediaAssets.ic_header_back_arrow}
                style={[styles.icon, styles.iconWidth]}
              />
            </TouchableOpacity>
          ) : null}
          <CustomText
            style={[
              styles.routeName,
              {color: blurContent ? Colors.blackPearlColor : Colors.whiteColor},
            ]}
            //   onPress={() => {
            //     navigation.goBack();
            //   }}
          >
            {props.customName ? props.customName : route.name}
          </CustomText>
        </View>

        {/* <MenuOptions /> */}
        <TouchableOpacity onPress={handleMenuOption}>
          <Image
            blurRadius={blurContent ? 70 : 0}
            source={MediaAssets.ic_more_options}
            style={[styles.icon, styles.iconWidth, styles.moreOptionsIcon]}
          />
        </TouchableOpacity>

        <Overlay
          animationType="fade"
          transparent={true}
          isVisible={isMenuOption}
          fullScreen={false}
          onBackdropPress={handleMenuOption}
          overlayStyle={styles.overLayConatiner}>
          <Fragment>
            <TouchableOpacity
              style={styles.menuItemButton}
              onPress={() => {
                handleMenuOption();
                setBlogState({
                  key: 'isDarkTheme',
                  value: !blogsState?.isDarkTheme,
                });
              }}>
              <CustomText style={styles.menuItem}>
                Switch to{' '}
                {blogsState?.isDarkTheme ? ThemeEnum.light : ThemeEnum.dark}{' '}
                mode
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItemButton}
              onPress={() => {
                handleMenuOption();
              }}>
              <CustomText style={styles.menuItem}>Add to favourites</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItemButton}
              onPress={() => {
                handleMenuOption();
              }}>
              <CustomText style={styles.menuItem}>Share blog</CustomText>
            </TouchableOpacity>
          </Fragment>
        </Overlay>
      </View>
    </Fragment>
  );
};

export default ViewBlogHeader;
