import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MediaAssets from '../../assets';
import {styles} from './AccordionCustomComponent.styles';
import CustomText from '../custom-text/CustomText';

const AccordionCustomComponent = (props: any) => {
  const {title, tilteStyle} = props;
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity
        style={[styles.row]}
        {...props}
        onPress={() => handlePress()}>
        <CustomText style={[tilteStyle?tilteStyle:styles.accordiontext]}>
          {title}
        </CustomText>
        <Image
          style={[
            styles.accordionDropDownImage,
            {transform: expanded ? [{rotateX: '180deg'}] : [{rotateX: '0deg'}]},
          ]}
          source={
            !expanded
              ? MediaAssets.ic_grey_dropdown_icon
              : MediaAssets.ic_dropdown
          }
        />
      </TouchableOpacity>
      {expanded ? (
        <View style={styles.childrenStyle}>{props.children}</View>
      ) : null}
    </View>
  );
};

export default AccordionCustomComponent;
