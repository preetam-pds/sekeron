import React, {Fragment, useState} from 'react';
import {TextInput} from 'react-native-element-textinput';
import Colors from '../../resources/Colors';
import CustomText from '../custom-text/CustomText';
import {styles} from './CustomTextInput.styles';

interface ICustomTextInput {
  value?: any;
  placeholder?: string;
  style?: any;
  error?: any;
  onBlur?: any;
  fieldhelpertext?: any;
  label?: string;
  onChangeText?: (event: any) => void;
  multiline?: boolean;
  maxLength?: number;
}

const CustomTextInput = (props: ICustomTextInput) => {
  const {
    value,
    placeholder,
    style,
    error,
    onBlur,
    fieldhelpertext,
    maxLength,
    multiline,
    ...rest
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocued = () => {
    setIsFocused(true);
  };

  const handleBlured = (e: any) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const getBorderColor = () => {
    if (isFocused) {
      return Colors.primaryVioletColor;
    } else if (error) {
      return Colors.reddishPinkColor;
    } else {
      return Colors.octonaryGreyColor;
    }
  };

  return (
    <Fragment>
      <TextInput
        {...rest}
        value={value}
        maxLength={maxLength}
        multiline={multiline}
        placeholderTextColor={Colors.senaryThemeColor}
        selectionColor={Colors.whiteColor}
        style={[
          styles.customTextInput,
          style,
          {
            borderColor: getBorderColor(),
          },
        ]}
        inputStyle={styles.inputTextStyle}
        labelStyle={styles.inputTextLabelStyle}
        placeholderStyle={styles.inputTextPlaceHolderStyle}
        showIcon={false}
        onBlur={handleBlured}
        onFocus={() => handleFocued()}
        iconStyle={{backgroundColor: Colors.whiteColor}}
      />
      {fieldhelpertext ? (
        <CustomText style={styles.errorText}>{fieldhelpertext}</CustomText>
      ) : null}
    </Fragment>
  );
};

export default CustomTextInput;
