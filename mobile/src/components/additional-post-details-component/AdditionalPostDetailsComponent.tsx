import { CreatePostRedux, strings } from '@sekeron/domain';
import React, { Fragment, useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-element-textinput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import CustomColorPicker from '../../common-components/color-picker/ColorPicker';
import Colors from '../../resources/Colors';
import SelectedCreatePost from '../selected-create-post/SelectedCreatePost';
import styles from './AdditionalPostDetails.Style';

const AdditionalPostDetailsComponent = () => {
  const [progress, setProgress] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(Colors.senaryGreyColor);
  const [showBackgroundColorPicker, setShowBackgroundColorPicker] =
    useState(false);
  const actionDispatch = (dispatch: any) => ({
    setCreatePostState: (data: any) =>
      dispatch(CreatePostRedux.actions.setCreatePostState(data)),
  });

  const {setCreatePostState} = actionDispatch(useDispatch());
  const createPostState = useSelector((state: any) => state.CreatePostRedux);

  const setTitleOrDescription = (value, key) => {
    let postDetails = {
          ...createPostState.postDetails,
          [key]: value ,
        }
        setCreatePostState({
          key: 'postDetails',
          value: postDetails,
        });
  }
    let handleBackgroundColorChange = (e: any) => {
      setBackgroundColor(e);
    };

  return (
    <Fragment>
      <View
        style={styles.inputContainer}
        onTouchStart={() => {
          setShowBackgroundColorPicker(false);
        }}>
        <TextInput
          value={createPostState.postDetails.title}
          selectionColor={Colors.whiteColor}
          style={styles.postTitleStyle}
          inputStyle={styles.postTitleInputStyle}
          labelStyle={styles.postTitleLabelStyle}
          placeholderStyle={styles.postTitlePlaceholderStyle}
          label={strings.postTitle}
          maxLength={10}
          showIcon={false}
          onBlur={(e: any) => {}}
          onFocus={() => {}}
          iconStyle={{backgroundColor: Colors.whiteColor}}
          onChangeText={(e: any) => {
            setTitleOrDescription(e, 'title');
          }}
        />
        <TextInput
          value={createPostState.postDetails.description}
          selectionColor={Colors.whiteColor}
          style={styles.postDescriptionStyle}
          multiline={true}
          inputStyle={styles.postDescriptionInputStyle}
          labelStyle={styles.postDescriptionLabelStyle}
          placeholderStyle={styles.postDescriptionPlaceholderStyle}
          label={strings.postDescription}
          maxLength={100}
          showIcon={false}
          onBlur={(e: any) => {}}
          onFocus={() => {}}
          iconStyle={{backgroundColor: Colors.whiteColor}}
          onChangeText={(e: any) => {
            if (e.length >= createPostState.postDetails.description.length) {
              setProgress(1 + progress);
            } else {
              setProgress(progress - 1);
            }
            setTitleOrDescription(e, 'description');
          }}
        />

        <View style={styles.container}>
          <View style={[styles.progressBar, {width: `${progress}%`}]} />
        </View>
      </View>
      {showBackgroundColorPicker ? (
        <View style={styles.colorPickerContainer}>
          <CustomColorPicker
            handleColorChange={handleBackgroundColorChange}
            backgroundColor={backgroundColor}
          />
        </View>
      ) : null}
      {createPostState.postDetails.mediaContent.length > 0 ? (
        <View style={styles.backgroundColorContainer}>
          <TouchableOpacity
            style={styles.backgroundColorIcon}
            onPress={() => {
              setShowBackgroundColorPicker(true);
            }}></TouchableOpacity>
          <Text style={styles.selectBackgroundText}>{strings.selectColor}</Text>
        </View>
      ) : null}

      <SelectedCreatePost
        isScroll={true}
        scrollToEnd={false}
        backgroundColor={backgroundColor}
      />
    </Fragment>
  );
};

export default AdditionalPostDetailsComponent;

