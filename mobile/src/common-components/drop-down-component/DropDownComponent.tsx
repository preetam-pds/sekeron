import {strings} from '@sekeron/domain';
import {useField} from 'formik';
import React from 'react';
import {View, Image} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import MediaAssets from '../../assets';
import Colors from '../../resources/Colors';
import CustomText from '../custom-text/CustomText';
import {styles} from './DropDownComponent.styles';

const DropdownScreen = (props: any) => {
  const {name, options,error, fieldhelpertext} = props;
  const [field, meta, helpers] = useField(name);

  return (
    <View>
      <Dropdown
        style={[
          styles.placeHolder,
          styles.secondaryContainer,
          styles.dropDownStyle,
          field.value
            ? styles.validInput
            : error
            ? styles.errorInput
            : styles.emptyInput,
        ]}
        containerStyle={styles.dropDownContainer}
        placeholderStyle={[
          styles.dropDownPlaceHolderStyle,
          field.value ? styles.dropDownSelectedText : styles.dropDownText,
        ]}
        selectedTextStyle={styles.dropDownSelectedTextStyle}
        inputSearchStyle={styles.dropDowninputSearchStyle}
        iconStyle={styles.dropDowniconStyle}
        itemTextStyle={styles.itemTextStyle}
        activeColor={Colors.secondaryGreyColor} // move to color file
        itemContainerStyle={styles.itemContainerStyle}
        data={options}
        maxHeight={300}
        labelField="label"
        valueField="value"
        keyboardAvoiding
        placeholder={strings.selectGender}
        // value={props.value}
        // onChange={(item: any) => {
        //   setDropdown(item);
        // }}
        value={field.value}
        onChange={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        renderRightIcon={() => (
          <Image source={MediaAssets.ic_dropdown} style={styles.dropDownIcon} />
        )}
      />
      {fieldhelpertext ? (
        <CustomText style={styles.errorText}>
          {error}
        </CustomText>
      ) : null}
    </View>
  );
};

export default DropdownScreen;
