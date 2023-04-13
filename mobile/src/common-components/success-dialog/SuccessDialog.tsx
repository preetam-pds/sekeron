import React, { ReactElement } from 'react';
import {Modal, View, Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import styles from './SuccessDialog.Style';

interface ISuccessDialogProps {
  shouldOpen?: boolean;
  isModalOpenHandler?: any;
  icon: ImageSourcePropType;
  text: ReactElement
}

const SuccessDialog = (props: ISuccessDialogProps) => {
  const {shouldOpen, isModalOpenHandler, text, icon} = props;
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={shouldOpen}
        onRequestClose={() => isModalOpenHandler(!shouldOpen)}>
        <TouchableOpacity 
            style={{flex: 1}} 
            activeOpacity={1} 
            onPressOut={() => {isModalOpenHandler(false)}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={icon}
              style={styles.successCheckMarkIcon}
            />
            {text}
          </View>
        </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default SuccessDialog;
