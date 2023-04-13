import React from 'react';
import { TextInput, View} from 'react-native';
import CustomText from '../custom-text/CustomText';
import inputStyles from './Input.Style';

interface ITextInputProps {
  // IsStyleChanged: boolean;
  // placeHolderLabel: string;
  // style: {};
  // onChangeText: any;
  // setValue: any;
  // value: string;
  // onBlur:any
}

const Input = (props: any) => {
  return (
    <View>
      {props?.value ? (
        <CustomText style={inputStyles.input}>{props.placeHolderLabel}</CustomText>
      ) : null}
      <TextInput
        placeholder={props.placeHolderLabel}
        autoCapitalize="words"
        value={props?.value}
        style={props.style}
        onChangeText={e => {
          props?.setValue(e);
          props?.onChangeText(e);
        }}
        onBlur={props?.onBlur}
      />
    </View>
  );
};
export default Input;
