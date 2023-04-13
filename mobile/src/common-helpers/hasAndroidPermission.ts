import {PermissionsAndroid, Platform, Alert} from 'react-native';
import {strings} from '@sekeron/domain';
export async function hasAndroidPermission() {
  const permission =
    Platform.Version >= 33
      ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
      : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }
  const granted = await PermissionsAndroid.request(permission);

  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  } else {
    Alert.alert(strings.permissionsDenied, strings.permissionsDenied);
    return false;
  }
}
