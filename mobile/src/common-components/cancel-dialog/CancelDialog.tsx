import { strings } from '@sekeron/domain';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {Overlay} from '@rneui/themed';
import CommonButton from '../common-button/CommonButton';
import styles from './CancelDialog.Style';

const CancelDialog = props => {

  const {shouldOpen, isModalOpenHandler, text, cancelTitle, cancelButtonClick, stayButtonClick, cancelButtonTitle} = props;

  return (
      <Overlay
        fullScreen={true}
        overlayStyle={styles.overlayStyle}
        isVisible={shouldOpen}
        onBackdropPress={() => isModalOpenHandler(!shouldOpen)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style= {styles.cancelTitle}>{cancelTitle}</Text>
              {text}
              <View style={styles.buttonContainer}>
                    <CommonButton
                        title={cancelButtonTitle ? cancelButtonTitle: strings.cancel}
                        onPress={() => {cancelButtonClick()}}
                        showBorder={true}
                        applyGradient={false}
                        isBorderGradientEnabled={false}
                        style={{width: 130}}
                        disabled={false}
                    />
                    <CommonButton
                        title={strings.stay}
                        onPress={() => {stayButtonClick()}}
                        applyGradient={true}
                        isBorderGradientEnabled={false}
                        style={{width: 130}}
                        disabled={false}
                    />
              </View>
            </View>
          </View>
      </Overlay>
  );
};

export default CancelDialog;
