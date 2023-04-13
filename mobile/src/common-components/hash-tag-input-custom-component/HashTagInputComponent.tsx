import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  Image,
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './HashTagInputComponent.styles';
import {HashtagProps} from 'react-native-element-textinput/lib/typescript/HashtagInput/model';
import MediaAssets from '../../assets';
import CustomText from '../custom-text/CustomText';
import Colors from '../../resources/Colors';

const ic_close = MediaAssets.ic_delete;

const defaultProps = {
  style: {},
  value: '',
  showIcon: true,
};

const HashtagInputComponent: HashtagProps | any = props => {
  const {
    fontFamily,
    style,
    inputStyle,
    iconStyle,
    labelStyle,
    placeholderStyle = {
      fontSize: 16,
      color: Colors.secondaryCementColor,
      marginLeft: 26,
      fontFamily: 'Comfortaa-Light',
    },
    textErrorStyle,
    label,
    placeholderTextColor = Colors.secondaryCementColor,
    placeholder = '',
    showIcon,
    textError,
    focusColor,
    data = [],
    hashtagStyle,
    hashtagTextStyle,
    onFocus,
    onBlur,
    onChangeText = (_value: string) => {},
    renderLeftIcon,
    renderRightIcon,
    onChangeValue = (_value: string[]) => {},
    renderHashtagItem,
    setFieldValue,
  } = props;

  const [text, setText] = useState<any>('');
  const [hashtag, setHashtag] = useState<string[] | any>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onChange = (text: string) => {
    // if(hashtag?.length<6){
    setText(text);
    onChangeText(text);
    // }
  };

  const _renderRightIcon = () => {
    if (showIcon) {
      if (renderRightIcon) {
        return renderRightIcon();
      }
      if (text.length > 0) {
        return (
          <TouchableOpacity onPress={() => onChange('')}>
            <Image source={ic_close} style={[styles.icon, iconStyle]} />
          </TouchableOpacity>
        );
      } else {
        return null;
      }
    }
    return null;
  };

  const font = useCallback(() => {
    if (fontFamily) {
      return {
        fontFamily: fontFamily,
      };
    } else {
      return {};
    }
  }, [fontFamily]);

  const onFocusCustom = (e: any) => {
    setIsFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const onBlurCustom = (e: any) => {
    setIsFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const onRemoveItem = useCallback(
    (index: number) => {
      if (hashtag) {
        if (props.editable === undefined || props.editable) {
          let array = [...hashtag];
          array.splice(index, 1);
          setHashtag(array);
          onChangeValue(array);
          setFieldValue('skills', array);
        }
      }
    },
    [hashtag, onChangeValue, props.editable],
  );

  useEffect(() => {
    if (data) {
      setHashtag(data);
    } else {
      setHashtag(null);
    }
  }, [data]);

  const onSubmitEdit = () => {
    if (hashtag && text.length > 0) {
      hashtag.push(text);
      setText('');
      onChangeValue(hashtag);
    }
  };

  const _renderItemSelected = useCallback(() => {
    if (hashtag && hashtag.length > 0) {
      return (
        <View style={styles.wrapSelectItem}>
          {hashtag?.map((e, index) => {
            if (renderHashtagItem) {
              return (
                <TouchableOpacity key={index}>
                  {renderHashtagItem(e, () => {
                    onRemoveItem(index);
                  })}
                </TouchableOpacity>
              );
            }
            return (
              <TouchableOpacity
                key={index}
                style={[styles.selectedItem, hashtagStyle]}
                onPress={() => {
                  onRemoveItem(index);
                }}>
                <Text
                  style={[styles.selectedTextItem, hashtagTextStyle, font()]}>
                  {e}
                </Text>
                <View>
                  <CustomText
                    style={[styles.selectedTextItem, hashtagTextStyle, font()]}>
                    <View>
                      <Image
                        source={ic_close}
                        style={{width: 18, height: 18, alignItems: 'center'}}
                      />
                    </View>
                  </CustomText>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }
    return null;
  }, [
    font,
    hashtag,
    hashtagStyle,
    hashtagTextStyle,
    onRemoveItem,
    renderHashtagItem,
  ]);

  const colorFocus = useMemo(() => {
    if (isFocus && focusColor) {
      return {
        borderBottomColor: focusColor,
        borderTopColor: focusColor,
        borderLeftColor: focusColor,
        borderRightColor: focusColor,
      };
    } else {
      return {};
    }
  }, [focusColor, isFocus]);

  const styleLable: StyleProp<TextStyle> = useMemo(() => {
    if (isFocus || (text.length > 0 && label)) {
      const style: any = labelStyle;
      return {
        top: 25,
        left: 20,
        color: isFocus ? Colors.denaryGreyColor : null,
        backgroundColor: isFocus ? Colors.primaryThemeColor : null,
        postion: 'absolute',
        zIndex: 12,
        width: 155,
        textAlign: 'center',
        fontSize: 12,
        ...style,
      };
    } else {
      const style: any = placeholderStyle;
      return {
        position: 'absolute',
        ...style,
      };
    }
  }, [isFocus, text.length, label, focusColor, labelStyle, placeholderStyle]);

  return (
    <Fragment>
      <View style={[styles.container, style, colorFocus]}>
        <View style={styles.textInput}>
          {renderLeftIcon?.()}
          <View style={styles.wrapInput}>
            {isFocus && label ? (
              <CustomText style={[styles.label, styleLable]}>
                {label}
              </CustomText>
            ) : null}
            <TextInput
              {...props}
              // value={value}
              editable={!(hashtag?.length >= 6)}
              style={[
                styles.input,
                inputStyle,
                font(),
                {
                  borderColor: isFocus
                    ? Colors.primaryVioletColor
                    : textError
                    ? Colors.reddishPinkColor
                    : Colors.octonaryGreyColor,
                },
              ]}
              value={text}
              placeholder={!isFocus || !label ? placeholder : ''}
              placeholderTextColor={placeholderTextColor}
              onChangeText={onChange}
              onFocus={onFocusCustom}
              onBlur={onBlurCustom}
              onSubmitEditing={onSubmitEdit}
            />
          </View>
          {false ? _renderRightIcon() : null}
        </View>
      </View>
      {_renderItemSelected()}
      {textError ? (
        <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
          <Image
            source={MediaAssets.ic_caution}
            style={{width: 15, height: 15, marginHorizontal: 4, marginTop: 4}}
          />
          <CustomText style={[styles.textError, textErrorStyle]}>
            {textError}
          </CustomText>
        </View>
      ) : null}
    </Fragment>
  );
};

HashtagInputComponent.defaultProps = defaultProps;

export default HashtagInputComponent;
