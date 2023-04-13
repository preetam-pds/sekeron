import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {constants, strings} from '@sekeron/domain';
import styles from '../TextEditor.Style';
import MediaAssets from '../../../assets';
import {
  alignmentStyles,
  fontName,
  fontSize,
} from '../../../json/TextEditorConfigJson';

const ToolBar = ({
  richText,
  setShowBackgroundColorPicker,
  setShowTextColorPicker,
  showTextColorPicker,
}: any) => {
  const [isFontSizeDropdown, setisFontSizeDropdown] = useState(false);
  const [isFontNameDropdown, setisFontNameDropdown] = useState(false);
  const [isAlignmentDropdown, setisAlignmentDropdown] = useState(false);
  const [textFontSize, setTextFontSize] = useState(fontSize[2]);
  const [textFontName, setTextFontName] = useState(fontName[0]);
  const [isBoldClicked, setIsBoldCLicked] = useState(false);
  const [isItalicsClicked, setIsItalicsCLicked] = useState(false);
  const [isUnderlineClicked, setIsUnderlineCLicked] = useState(false);

  const handleFontSize = useCallback((fontSize: string) => {
    setTextFontSize(fontSize);
    richText.current?.setFontSize(fontSize);
    setisFontSizeDropdown(false);
  }, []);

  const handleFontName = useCallback((fontName: string) => {
    setTextFontName(fontName);
    richText?.current?.setFontName(fontName);
    setisFontNameDropdown(false);
  }, []);

  const handleEditor = useCallback((item: string) => {
    setisAlignmentDropdown(false);
    richText.current?.sendAction(item, 'result');
  }, []);

  const onPressToolBarButton = (
    isAlignmentDropdown: boolean,
    isFontSizeDropdown: boolean,
    isFontNameDropdown: boolean,
  ) => {
    setisAlignmentDropdown(isAlignmentDropdown);
    setisFontNameDropdown(isFontNameDropdown);
    setisFontSizeDropdown(isFontSizeDropdown);
  };

  const onPressAlignmentButton = () => {
    onPressToolBarButton(true, false, false);
    if (isAlignmentDropdown) {
      setisAlignmentDropdown(false);
    }
  };
  const onPressFontSizeButton = () => {
    onPressToolBarButton(false, true, false);
    if (isFontSizeDropdown) {
      setisFontSizeDropdown(false);
    }
  };
  const onPressFontNameButton = () => {
    onPressToolBarButton(false, false, true);
    if (isFontNameDropdown) {
      setisFontNameDropdown(false);
    }
  };
  const onPressTextColorPicker = () => {
    setShowTextColorPicker(true);
    setShowBackgroundColorPicker(false);
    if (showTextColorPicker) {
      setShowTextColorPicker(false);
    }
  };

  return (
    <View
      style={styles.toolBarContainer}
      onStartShouldSetResponder={() => {
        setShowBackgroundColorPicker(false);
        setShowTextColorPicker(false);
      }}>
      <Text style={styles.textOptions}>{strings.textOptions}</Text>
      <View style={styles.toolBarOptionsContainer}>
        <TouchableOpacity
          onPress={() => {
            onPressTextColorPicker();
          }}>
          <Image
            source={MediaAssets.ic_color_picker}
            style={styles.colorPickerIcon}
          />
        </TouchableOpacity>
        <View style={styles.dropDownContainer}>
          <TouchableOpacity
            onPress={() => {
              onPressFontSizeButton();
            }}
            style={[styles.dropDown, styles.fontSizeDropDown]}>
            <Text style={styles.textStyle}>{textFontSize}</Text>
          </TouchableOpacity>
          {isFontSizeDropdown ? (
            <ScrollView
              style={styles.scrollViewContainer}
              onStartShouldSetResponder={() => {
                setShowBackgroundColorPicker(false);
                setShowTextColorPicker(false);
              }}
              nestedScrollEnabled={true}>
              {fontSize.map((item: any, index: any) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      handleFontSize(item);
                    }}
                    style={[styles.dropDown, styles.fontSizeDropDown]}
                    key={String(index)}>
                    <Text style={styles.textStyle} key={String(index)}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          ) : null}
        </View>

        <View style={styles.dropDownContainer}>
          <TouchableOpacity
            onPress={() => {
              onPressFontNameButton();
            }}
            style={[styles.dropDown, styles.fontNameDropDown]}>
            <Text style={styles.textStyle}>{textFontName}</Text>
          </TouchableOpacity>
          {isFontNameDropdown ? (
            <ScrollView
              style={styles.scrollViewContainer}
              nestedScrollEnabled={true}>
              {fontName.map((item: any, index: any) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      handleFontName(item);
                    }}
                    style={[styles.dropDown, styles.fontNameDropDown]}
                    key={String(index)}>
                    <Text
                      style={[styles.textStyle, styles.fontName]}
                      key={String(index)}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          ) : null}
        </View>

        <View style={styles.textStyleOptions}>
          <TouchableOpacity
            onPress={() => {
              handleEditor(constants.redo);
            }}>
            <Image source={MediaAssets.ic_redo} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handleEditor(constants.undo);
            }}>
            <Image
              source={MediaAssets.ic_undo}
              style={[styles.iconMargin, styles.icon]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handleEditor(constants.bold);
              setIsBoldCLicked(true);
              if (isBoldClicked) {
                setIsBoldCLicked(false);
              }
            }}>
            <Image
              source={MediaAssets.ic_bold}
              style={[
                styles.iconMargin,
                styles.icon,
                isBoldClicked ? styles.activeIcon : null,
              ]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handleEditor(constants.italic);
              setIsItalicsCLicked(true);
              if (isItalicsClicked) {
                setIsItalicsCLicked(false);
              }
            }}>
            <Image
              source={MediaAssets.ic_italic}
              style={[
                styles.iconMargin,
                styles.icon,
                isItalicsClicked ? styles.activeIcon : null,
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleEditor(constants.underline);
              setIsUnderlineCLicked(true);
              if (isUnderlineClicked) {
                setIsUnderlineCLicked(false);
              }
            }}>
            <Image
              source={MediaAssets.ic_underline}
              style={[
                styles.iconMargin,
                styles.icon,
                isUnderlineClicked ? styles.activeIcon : null,
              ]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.dropDownContainer}>
          <TouchableOpacity
            onPress={() => {
              onPressAlignmentButton();
            }}
            style={[styles.dropDown, styles.alignmentDropDown]}>
            <Image source={MediaAssets.ic_left_align} style={styles.icon} />
          </TouchableOpacity>
          {isAlignmentDropdown ? (
            <ScrollView
              style={styles.scrollViewContainer}
              nestedScrollEnabled={true}>
              {alignmentStyles.map((item: any, index: any) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      handleEditor(item.align);
                    }}
                    style={[styles.dropDown, styles.alignmentDropDown]}
                    key={String(index)}>
                    <Image source={item.image} style={styles.icon} />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default ToolBar;
