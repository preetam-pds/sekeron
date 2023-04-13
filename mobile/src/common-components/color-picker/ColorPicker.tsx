import React, {useEffect} from 'react';
import {SharedValue} from 'react-native-reanimated';
import ColorPicker, {
  HueSlider,
  SaturationSlider,
} from '../../components/reanimated-color-picker';
import SplashScreen from 'react-native-splash-screen';
import {View} from 'react-native';
import styles from './ColorPicker.Styles';
import CustomText from '../custom-text/CustomText';
import Colors from '../../resources/Colors';
import {strings} from '@sekeron/domain';

interface porpsType {
  color: SharedValue<string>;
  onSelectColor: (param: {hex: string}) => void;
  handleColorChange: any;
  backgroundColor: any;
  oldBackgroundColor: any;
}

export default function CustomColorPicker({
  onSelectColor,
  color,
  handleColorChange,
  backgroundColor,
  oldBackgroundColor,
}: porpsType) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <ColorPicker
        value={color?.value}
        thumbSize={25}
        thumbShape="rect"
        onChange={e => {
          handleColorChange(e.hex);
        }}
        backgroundColor={backgroundColor}
        style={styles.colorPicker}>
        <HueSlider style={styles.sliderStyle} />
        <SaturationSlider style={styles.sliderStyle} />
      </ColorPicker>
      <View style={styles.selectedColorContainer}>
        <View
          style={[
            styles.selectedSecondaryColorContainer,
            styles.newTextContainer,
          ]}>
          <CustomText style={styles.text}>{strings.new}</CustomText>
        </View>
        <View
          style={[
            {backgroundColor: backgroundColor},
            styles.selectedColor,
          ]}></View>
        <View
          style={[
            styles.selectedColor,
            {
              backgroundColor: Colors.primaryThemeColor,
            },
          ]}></View>

        <View
          style={[
            styles.selectedSecondaryColorContainer,
            styles.oldTextContainer,
          ]}>
          <CustomText style={styles.text}>{strings.old}</CustomText>
        </View>
      </View>
    </View>
  );
}
