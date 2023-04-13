import {countryCodeJson} from '@sekeron/domain';
import React from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../resources/Colors';
import styles from './BottomSheet.Style';

const BottomSheet = (props: any) => {
  return (
    <View style={styles.flexView}>
      <Modal
        onBackdropPress={() => {
          props?.setModalVisible(false);
        }}
        onBackButtonPress={() => {
          props?.setModalVisible(false);
        }}
        isVisible={props?.isModalVisible}
        swipeDirection="down"
        onSwipeComplete={props.toggleModal}
        // animationIn="bounceInUp"
        // animationOut="bounceOutDown"
        animationInTiming={200}
        animationOutTiming={200}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}>
        <View
          style={[
            styles.modalContent,
            {
              backgroundColor: props.backgroundColor
                ? props.backgroundColor
                : Colors.blackColorShade,
            },
          ]}>
          <View style={[styles.contentAlignment]}>
            <View style={styles.barIcon} />
            {props?.componentOrObject ? props?.renderItem : props?.renderItem()}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BottomSheet;
