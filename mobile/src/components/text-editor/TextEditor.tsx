import React, {Fragment, useEffect, useRef, useState} from 'react';
import {View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {RichEditor} from '../react-native-pell-rich-editor';
import MediaAssets from '../../assets/index';
import CustomColorPicker from '../../common-components/color-picker/ColorPicker';
import styles from './TextEditor.Style';
import ToolBar from './toolbar/ToolBar';
import CustomText from '../../common-components/custom-text/CustomText';
import {strings} from '@sekeron/domain';
import Colors from '../../resources/Colors';

export default function TextEditor({handleEditedText}: any) {
  const richText: any = useRef();
  const oldBackgroundColor: any = useRef();
  const [html, setHtml] = useState('');
  const [showTextColorPicker, setShowTextColorPicker] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(
    Colors.tertiaryThemeColor,
  );
  const [textColor, setTextColor] = useState('');
  const [showBackgroundColorPicker, setShowBackgroundColorPicker] =
    useState(false);
  const [height, setHeight] = useState(200);

  useEffect(() => {
    richText?.current?.setForeColor(Colors.whiteColor);
    oldBackgroundColor.current = backgroundColor;
  }, []);

  const htmlContent = `<html><head><meta name="viewport" content="user-scalable=1.0,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"></head><body><div id='html-element' style="background:${backgroundColor};color:${
    Colors.whiteColor
  }; width:100%; word-wrap: break-word;min-Height:${
    height > 300 ? height : 300
  }">${html} </div></body>
</html>`;

  const handleTextEditor = (descriptionText: string) => {
    setHtml(descriptionText);
    setShowBackgroundColorPicker(false);
  };

  const handleTextColorChange = (e: string) => {
    setTextColor(e);
    richText?.current?.setForeColor(e);
  };
  const handleBackgroundColorChange = (e: string) => {
    setBackgroundColor(e);
  };

  return (
    <Fragment>
      <View style={styles.textEditorContainer}>
        {showTextColorPicker || showBackgroundColorPicker ? (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setShowBackgroundColorPicker(false);
              setShowTextColorPicker(false);
            }}
            style={styles.overlayContainer}
          />
        ) : null}
        {showBackgroundColorPicker ? (
          <View
            style={[styles.colorPickerContainer, styles.backgroundColorPicker]}>
            <CustomColorPicker
              handleColorChange={handleBackgroundColorChange}
              oldBackgroundColor={oldBackgroundColor.current}
              backgroundColor={backgroundColor}
            />
          </View>
        ) : showTextColorPicker ? (
          <View style={[styles.colorPickerContainer, styles.textColorPicker]}>
            <CustomColorPicker
              handleColorChange={handleTextColorChange}
              oldBackgroundColor={oldBackgroundColor.current}
              backgroundColor={textColor}
            />
          </View>
        ) : null}

        <View style={styles.textEditorSecondaryContainer}>
          <View>
            <TouchableOpacity
              onPress={() => {
                setShowBackgroundColorPicker(true);
              }}
              style={styles.backgroundColorPickerBtn}>
              <Image
                source={MediaAssets.ic_color_picker}
                style={styles.colorPickerIcon}
              />
            </TouchableOpacity>

            <ScrollView nestedScrollEnabled={true}>
              <RichEditor
                ref={richText}
                editorStyle={{
                  backgroundColor: backgroundColor,
                  color: Colors.whiteColor,
                }}
                onHeightChange={(height: any) => {
                  setHeight(height);
                }}
                autoCapitalize="on"
                onChange={handleTextEditor}
                placeholder="Type here"
                nestedScrollEnabled={true}
                androidHardwareAccelerationDisabled={true}
                style={styles.textEditorStyle}
              />
            </ScrollView>
          </View>
        </View>
        <TouchableOpacity onPress={() => handleEditedText(htmlContent, height)}>
          <CustomText style={styles.done}>{strings.done}</CustomText>
        </TouchableOpacity>
        <ToolBar
          richText={richText}
          setShowBackgroundColorPicker={setShowBackgroundColorPicker}
          setShowTextColorPicker={setShowTextColorPicker}
          showTextColorPicker={showTextColorPicker}
        />
      </View>
    </Fragment>
  );
}
