import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from '../custom-text/CustomText';
import styles from './Menu.Style';
import {strings} from '@sekeron/domain';

const MenuOptions = (props: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuItemButton}
        onPress={() => {
          props?.setPostMenuId(null);
        }}>
        <CustomText style={styles.menuItem}>{strings.reportPost}</CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props?.setPostMenuId(null);
        }}
        style={styles.menuItemButton}>
        <CustomText style={styles.menuItem}>
          {strings.shareOutsideSekeron}
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props?.setPostMenuId(null);
        }}
        style={styles.menuItemButton}>
        <CustomText style={styles.menuItem}>
          {strings.unfollow}{' '}
          <CustomText style={styles.profileName}>
            {props?.profileName?.length >= 10
              ? props?.profileName.slice(0, 10) + '...'
              : props?.profileName}
          </CustomText>
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default MenuOptions;
