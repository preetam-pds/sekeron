import React, {Fragment} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../resources/Colors';
import MaskedView from '@react-native-masked-view/masked-view';
import CustomText from '../custom-text/CustomText';

const GradientText = props => {
  return (
    <Fragment>
      <MaskedView maskElement={<CustomText {...props} />}>
        <LinearGradient
          colors={
            props.colors
              ? props.colors
              : [Colors.primaryBlueColor, Colors.lightGreenColorShade]
          }
          start={props.start ? props.start : {x: 0, y: 0.75}}
          end={props.end ? props.end : {x: 1, y: 0.25}}>
          <CustomText {...props} style={[props.style, {opacity: 0}]} />
        </LinearGradient>
      </MaskedView>
    </Fragment>
  );
};
export default GradientText;
