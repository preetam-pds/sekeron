import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

const Gradient = (props:any) => {
  return (
    <LinearGradient
      colors={props.colors}
      start={props.start}
      end={props.start}
      style={props?.style}>
      {props?.gradient()}
    </LinearGradient>
  );
}

export default Gradient