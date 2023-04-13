import {View, Image, ImageBackground} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../resources/Colors';
import CustomText from '../../../common-components/custom-text/CustomText';
import MediaAssets from '../../../assets';
import styles from './BlogsOurStory.style';

const BlogsOurStory = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={styles.ourStoryImage}
        source={{uri: 'https://picsum.photos/2800'}}>
        <LinearGradient
          style={styles.ourStoryLinearGradient}
          colors={[
            Colors.transparentColor,
            Colors.primaryThemeColor,
          ]}></LinearGradient>
      </ImageBackground>
      <View
        style={styles.ourStoryContentContainer}>
        <CustomText
          style={styles.ourStoryText}>
          Our Story
        </CustomText>
      </View>
      <View style={styles.blogTitleContainer}>
        <CustomText
          style={styles.ourStoryBlogText}>
          Technology is great for the blog article ideas. Because there’s always
          something new to write about. Here are some topics you could try.{' '}
        </CustomText>
      </View>
      <View style={styles.ourStoryFooterContainer}>
        <View
          style={styles.ourStoryFooterSubContainer}>
          <CustomText
            style={styles.ourStoryReadNowtext}>
            Read now
          </CustomText>
          <Image
            source={MediaAssets.ic_right_arrow_icon}
            style={styles.rightArrowWhiteIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default BlogsOurStory;
