import {View, Image, TextInput as Input} from 'react-native';
import React, {Fragment} from 'react';
import {TextInput} from 'react-native-element-textinput';
import InputStyle from './InputField.Style';
import MediaAssets from '../../assets';
import Colors from '../../resources/Colors';
import CustomText from '../custom-text/CustomText';

const InputField = (inputProps: any) => {
  const {checkValidInput} = inputProps;
  return (
    <Fragment>
      {inputProps?.isPhoneNumberTextnput ? (
        <TextInput
          keyboardType="number-pad"
          showIcon={false}
          editable={inputProps?.editable}
          maxLength={inputProps.maxLength}
          value={inputProps.value}
          inputStyle={inputProps.inputStyle}
          onBlur={(e: any) => inputProps.onBlur(e)}
          onChangeText={(e: any) => inputProps.onChangeText(e)}
        />
      ) : null}
      {inputProps?.isEmailTextnput || inputProps?.isNameTextnput ? (
        <View style={InputStyle.inputContainer}>
          <View style={InputStyle.inputSecondaryContainer}>
            <TextInput
              value={inputProps.value}
              selectionColor={Colors.whiteColor}
              style={inputProps?.style}
              inputStyle={inputProps?.inputStyle}
              labelStyle={inputProps?.labelStyle}
              placeholderStyle={inputProps?.placeholderStyle}
              textErrorStyle={inputProps?.textErrorStyle}
              label={inputProps?.label}
              maxLength={inputProps?.maxLength}
              showIcon={false}
              keyboardType="email-address"
              onBlur={(e: any) => inputProps.onBlur()}
              onFocus={() => inputProps.onFocus()}
              iconStyle={{backgroundColor: Colors.whiteColor}}
              onChangeText={(e: any) => inputProps.handleChange(e)}
            />
          </View>
          {!checkValidInput ? (
            <View style={InputStyle.validationContainer}>
              <Image
                source={MediaAssets.ic_caution}
                style={InputStyle.errorMsg}
              />
              <CustomText style={InputStyle.validationErrorText}>
                {inputProps.errorMsg}
              </CustomText>
            </View>
          ) : null}
        </View>
      ) : null}

      {inputProps.isSkillTagsInput ? (
        <Fragment>
          <Input
            placeholder={inputProps.placeholder}
            placeholderTextColor={Colors.secondaryGreyColor}
            style={inputProps?.style}
            editable={inputProps?.editable}
            value={inputProps?.value}
            onFocus={() => inputProps.onFocus()}
            onChangeText={(value: any) => {
              inputProps.onChangeText(value);
            }}
            onBlur={() => inputProps.onBlur()}
          />
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default InputField;
