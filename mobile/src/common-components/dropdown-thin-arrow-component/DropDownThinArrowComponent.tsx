import React, {forwardRef, useImperativeHandle} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import {isExist} from 'react-native-select-dropdown/src/helpers/isExist';
import Input from 'react-native-select-dropdown/src/components/Input';
import DropdownOverlay from 'react-native-select-dropdown/src/components/DropdownOverlay';
import DropdownModal from 'react-native-select-dropdown/src/components/DropdownModal';
import DropdownWindow from 'react-native-select-dropdown/src/components/DropdownWindow';
import {useSelectDropdown} from 'react-native-select-dropdown/src/hooks/useSelectDropdown';
import {useLayoutDropdown} from 'react-native-select-dropdown/src/hooks/useLayoutDropdown';
import {useRefs} from 'react-native-select-dropdown/src/hooks/useRefs';
import styles from './DropDownThinArrowComponent.style';
import CustomText from '../custom-text/CustomText';

const DropDownThinArrowComponent = (
  {
    data /* array */,
    onSelect /* function  */,
    defaultButtonText /* String */,
    buttonTextAfterSelection /* function */,
    rowTextForSelection /* function */,
    defaultValue /* any */,
    defaultValueByIndex /* integer */,
    disabled /* boolean */,
    disableAutoScroll /* boolean */,
    disabledIndexs /* array of disabled Row index */,
    onFocus /* function  */,
    onBlur /* function  */,
    onScrollEndReached /* function  */,
    /////////////////////////////
    buttonStyle /* style object for button */,
    buttonTextStyle /* style object for button text */,
    renderCustomizedButtonChild /* function returns React component for customized button */,
    /////////////////////////////
    renderDropdownIcon,
    dropdownIconPosition,
    statusBarTranslucent,
    dropdownStyle,
    dropdownOverlayColor /* string */,
    /////////////////////////////
    rowStyle /* style object for row */,
    rowTextStyle /* style object for row text */,
    selectedRowStyle /* style object for selected row */,
    selectedRowTextStyle /* style object for selected row text */,
    renderCustomizedRowChild /* function returns React component for customized row */,
    /////////////////////////////
    search /* boolean */,
    searchInputStyle /* style object for search input */,
    searchInputTxtColor /* text color for search input */,
    searchInputTxtStyle /* text style for search input */,
    searchPlaceHolder /* placeholder text for search input */,
    searchPlaceHolderColor /* text color for search input placeholder */,
    renderSearchInputLeftIcon /* function returns React component for search input icon */,
    renderSearchInputRightIcon /* function returns React component for search input icon */,
    onChangeSearchInputText /* function callback when the search input text changes, this will automatically disable the dropdown's interna search to be implemented manually outside the component  */,
    handleScroll,
    isVisibleOutside,
  },
  ref,
) => {
  const disabledInternalSearch = !!onChangeSearchInputText;
  /* ******************* hooks ******************* */
  const {dropdownButtonRef, dropDownFlatlistRef} = useRefs();
  const {
    dataArr, //
    selectedItem,
    selectedIndex,
    selectItem,
    reset,
    searchTxt,
    setSearchTxt,
  } = useSelectDropdown(
    data,
    defaultValueByIndex,
    defaultValue,
    disabledInternalSearch,
  );

  const {
    isVisible, //
    setIsVisible,
    buttonLayout,
    onDropdownButtonLayout,
    getItemLayout,
    dropdownWindowStyle,
  } = useLayoutDropdown(data, dropdownStyle, rowStyle, search);
  useImperativeHandle(ref, () => ({
    reset: () => {
      reset();
    },
    openDropdown: () => {
      openDropdown();
    },
    closeDropdown: () => {
      closeDropdown();
    },
    selectIndex: index => {
      selectItem(index);
    },
  }));
  /* ******************* Methods ******************* */
  const openDropdown = () => {
    dropdownButtonRef.current.measure((fx, fy, w, h, px, py) => {
      onDropdownButtonLayout(w, h, px, py);
      setIsVisible(true);
      handleScroll(true);
      onFocus && onFocus();
    });
  };
  const closeDropdown = () => {
    setIsVisible(false);
    handleScroll(false);
    setSearchTxt('');
    onBlur && onBlur();
  };
  const onLayout = () => {
    if (disableAutoScroll) {
      return;
    }
    if (selectedIndex >= 3 && dropDownFlatlistRef) {
      dropDownFlatlistRef.current.scrollToOffset({
        offset:
          rowStyle && rowStyle.height
            ? rowStyle.height * selectedIndex
            : 50 * selectedIndex,
        animated: true,
      });
    }
  };
  const onSelectItem = (item, index) => {
    closeDropdown();
    onSelect && onSelect(item, index);
    selectItem(index);
  };
  /* ******************** Render Methods ******************** */
  const renderSearchView = () => {
    return (
      search && (
        <Input
          searchViewWidth={buttonLayout.w}
          value={searchTxt}
          valueColor={searchInputTxtColor}
          placeholder={searchPlaceHolder}
          placeholderTextColor={searchPlaceHolderColor}
          onChangeText={txt => {
            setSearchTxt(txt);
            disabledInternalSearch && onChangeSearchInputText(txt);
          }}
          inputStyle={searchInputStyle}
          inputTextStyle={searchInputTxtStyle}
          renderLeft={renderSearchInputLeftIcon}
          renderRight={renderSearchInputRightIcon}
        />
      )
    );
  };
  const renderFlatlistItem = ({item, index}) => {
    const isSelected = index == selectedIndex;
    return (
      isExist(item) && (
        <TouchableOpacity
          disabled={disabledIndexs?.includes(index)}
          activeOpacity={1}
          style={{
            ...styles.dropdownRow,
            ...rowStyle,
            ...(isSelected && selectedRowStyle),
          }}
          onPress={() => onSelectItem(item, index)}>
          {renderCustomizedRowChild ? (
            <View style={styles.dropdownCustomizedRowParent}>
              {renderCustomizedRowChild(item, index, isSelected)}
            </View>
          ) : (
            <CustomText
              numberOfLines={1}
              allowFontScaling={false}
              style={{
                ...styles.dropdownRowText,
                ...rowTextStyle,
                ...(isSelected && selectedRowTextStyle),
              }}>
              {rowTextForSelection
                ? rowTextForSelection(item, index)
                : item.toString()}
            </CustomText>
          )}
        </TouchableOpacity>
      )
    );
  };
  const renderDropdown = () => {
    return (
      isVisible &&
      isVisibleOutside && (
        <DropdownModal
          statusBarTranslucent={statusBarTranslucent}
          visible={isVisible && isVisibleOutside}
          onScroll={() => handleScroll(false)}>
          <DropdownOverlay
            onPress={closeDropdown}
            onScroll={() => handleScroll(false)}
            backgroundColor={dropdownOverlayColor}
          />
          <DropdownWindow
            layoutStyle={dropdownWindowStyle}
            onScroll={() => handleScroll(false)}>
            <FlatList
              data={dataArr}
              keyExtractor={(item, index) => index.toString()}
              ref={dropDownFlatlistRef}
              renderItem={renderFlatlistItem}
              getItemLayout={getItemLayout}
              onLayout={onLayout}
              ListHeaderComponent={renderSearchView()}
              stickyHeaderIndices={search && [0]}
              keyboardShouldPersistTaps="always"
              onEndReached={() => onScrollEndReached && onScrollEndReached()}
              onEndReachedThreshold={0.5}
            />
          </DropdownWindow>
        </DropdownModal>
      )
    );
  };
  ///////////////////////////////////////////////////////
  return (
    <TouchableOpacity
      activeOpacity={1}
      ref={dropdownButtonRef}
      disabled={disabled}
      onPress={() => {
        openDropdown();
      }}
      style={{
        ...styles.dropdownButton,
        ...(dropdownIconPosition == 'left' ? styles.row : styles.rowRevese),
        ...buttonStyle,
      }}>
      {renderDropdown()}
      {renderDropdownIcon && renderDropdownIcon(isVisibleOutside)}
      {renderCustomizedButtonChild ? (
        <View style={styles.dropdownCustomizedButtonParent}>
          {renderCustomizedButtonChild(selectedItem, selectedIndex)}
        </View>
      ) : (
        <CustomText
          numberOfLines={1}
          allowFontScaling={false}
          style={{...styles.dropdownButtonText, ...buttonTextStyle}}>
          {/* {isExist(selectedItem)
            ? buttonTextAfterSelection
              ? buttonTextAfterSelection(selectedItem, selectedIndex)
              : selectedItem.toString()
            : defaultButtonText || 'select an option.'} */}
          {defaultButtonText}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

export default forwardRef((props: any, ref) =>
  DropDownThinArrowComponent(props, ref),
);
