import {Text, StyleSheet} from 'react-native';
import React from 'react';

const CustomText = (props: any) => {
  return (
    <Text
      {...props}
      style={[
        props?.style?.fontFamily ? null : styles.defaultStyle,
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'Comfortaa-Regular',
  },
});

export default CustomText;
