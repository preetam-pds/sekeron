import { Platform } from "react-native";
export const getMajorVersionIOS = (): number => {

    return parseInt(Platform.Version.toString(), 10);
  }