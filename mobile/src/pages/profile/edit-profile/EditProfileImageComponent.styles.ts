import { StyleSheet } from "react-native";
import Colors from "../../../resources/Colors";

export const styles = StyleSheet.create({
    container: {height: 210},
    coverImage: {
      width: '100%',
      height: 150,
      margin: 4,
      borderRadius: 10,
      borderWidth: 4,
    },
    imageStyle: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 2,
      position: 'relative',
      resizeMode: 'cover',
    },
    coverEditImage: {
      width: 15,
      height: 15,
      position: 'relative',
      resizeMode: 'cover',
    },
    coverOuterImage: {
      borderRadius: 20,
      borderWidth: 1,
      padding: 3,
      borderColor: Colors.whiteColor,
      backgroundColor: Colors.primaryVioletColor,
    },
    positionRelative: {
      position: 'relative',
    },
    coverImageStyles: {position: 'absolute', bottom: 120, right: 10},
    coverInnerImage: {position: 'absolute', bottom: -50, right: '35%'},
    profileMainImage: {position: 'absolute', bottom: -40, right: '36%'},
  });