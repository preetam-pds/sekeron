import {useNavigation} from '@react-navigation/native';
import {PlatformEnum} from '@sekeron/domain';
import React, {Fragment, memo, useEffect} from 'react';
import {Platform, PermissionsAndroid, Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

interface ICameraComponent {
  route?: any;
  mediaType?: string;
  navigateBack?: () => void;
  setResponseBack?: any;
  cameraOrGallery?: string;
}

const CameraComponent = (props: ICameraComponent) => {
  const {mediaType, navigateBack, setResponseBack, cameraOrGallery} =
    props?.route?.params;
  const navigation: any = useNavigation();

  useEffect(() => {
    captureImage();
  }, []);

  const requestCameraPermission = async () => {
    if (Platform.OS === PlatformEnum.android) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === PlatformEnum.android) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err: any) {
        console.warn(err);
        Alert.alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async () => {
    let options: any = {
      mediaType: mediaType,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      {
        cameraOrGallery == 'gallery'
          ? launchImageLibrary(options, (response: any) => {
              if (response.didCancel) {
                navigation.navigate(navigateBack);
                return;
              } else if (response.errorCode == 'camera_unavailable') {
                Alert.alert('Camera not available on device');
                return;
              } else if (response.errorCode == 'permission') {
                Alert.alert('Permission not satisfied');
                return;
              } else if (response.errorCode == 'others') {
                Alert.alert(response.errorMessage);
                return;
              }
              {
                setResponseBack && setResponseBack(response);
              }
              navigation.navigate(navigateBack);
            })
          : launchCamera(options, (response: any) => {
              if (response.didCancel) {
                navigation.navigate(navigateBack);
                return;
              } else if (response.errorCode == 'camera_unavailable') {
                Alert.alert('Camera not available on device');
                return;
              } else if (response.errorCode == 'permission') {
                Alert.alert('Permission not satisfied');
                return;
              } else if (response.errorCode == 'others') {
                Alert.alert(response.errorMessage);
                return;
              }
              {
                setResponseBack && setResponseBack(response);
              }
              navigation.navigate(navigateBack);
            });
      }
    }
  };

  return <Fragment></Fragment>;
};

export default memo(CameraComponent);
