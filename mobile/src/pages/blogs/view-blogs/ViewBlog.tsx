import {
  View,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import ViewBlogHeader from './ViewBlogHeader';
import MediaAssets from '../../../assets';
import CustomText from '../../../common-components/custom-text/CustomText';
import {styles} from './ViewBlog.style';
import {useSelector} from 'react-redux';
import Colors from '../../../resources/Colors';

const listItem = [
  // here we need to send the value as numbers
  {value: 1, name: 'Welcome'},
  {value: 2, name: 'About'},
  {value: 3, name: 'Resources'},
  {value: 4, name: 'Conclusion'},
];

const ViewBlog = props => {
  const {route} = props;
  const [isMenuOption, setMenuOption] = useState(false);
  const [isReadOption, setReadOption] = useState(false);
  const blogsState = useSelector((state: any) => state.blogsRedux);

  const [dataSourceCords] = useState([] as number[]);
  const [scrollToIndex] = useState(0);
  const [ref, setRef] = useState<ScrollView>(); // create ref

  const handleMenuOption = () => {
    setMenuOption(!isMenuOption);
  };

  const handleReadOption = () => {
    setReadOption(!isReadOption);
  };

  const scrollHandler = (key: number) => {
    if (dataSourceCords.length > scrollToIndex) {
      ref?.scrollTo({
        x: 0,
        y: dataSourceCords[key], //we get the offset value from array based on key
        animated: true,
      });
    }
  };

  return (
    <Fragment>
      <View style={styles.headerContainer}>
        <ViewBlogHeader
          isMenuOption={isMenuOption}
          customName={route?.params?.blogsDetails?.blogHeader}
          backArrow={true}
          handleMenuOption={handleMenuOption}
          isOptionsIcon={true}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={ref => {
          setRef(ref as any); //set the ref
        }}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: blogsState?.isDarkTheme
                ? Colors.primaryThemeColor
                : Colors.whiteColor,
            },
          ]}>
          <View style={styles.secondaryContainer}>
            <ImageBackground
              imageStyle={styles.blogMainImage}
              source={{
                uri: route?.params?.blogsDetails?.blogImage,
              }}></ImageBackground>
            <View style={styles.forthContainer}>
              <CustomText
                style={[
                  styles.blogName,
                ]}>
                {route?.params?.blogsDetails?.blogHeader}
              </CustomText>
              <TouchableOpacity onPress={handleReadOption}>
                <Image
                  style={styles.blogMoreImage}
                  source={
                    !isReadOption
                      ? MediaAssets.ic_more_option_black_icon
                      : MediaAssets.ic_up_arrow_icon
                  }
                />
              </TouchableOpacity>
            </View>
            {isReadOption ? (
              <View style={styles.blogMoreContainer}>
                <View style={[styles.blogMoreSecondContainer]}>
                  {listItem?.length > 0 &&
                    listItem?.map(item => {
                      return (
                        <View key={item.value}>
                          <TouchableOpacity
                            onPress={() => scrollHandler(item.value)} //call the function
                          >
                            <CustomText style={[styles.blogLabelText]}>
                              {item.name}
                            </CustomText>
                          </TouchableOpacity>
                        </View>
                      );
                    })}
                </View>
              </View>
            ) : null}
          </View>
        </View>
        {/* sub Header conatiner */}
        <View
          style={{
            backgroundColor: blogsState?.isDarkTheme
              ? Colors.primaryThemeColor
              : Colors.whiteColor,
          }}>
          <View style={styles.blogSubHeadingContainer}>
            <CustomText
              style={[
                styles.blogSubHeadingText,
                {
                  color: !blogsState?.isDarkTheme
                    ? Colors.primaryThemeColor
                    : Colors.whiteColor,
                },
              ]}>
              “SUB HEADING dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an.”
            </CustomText>
          </View>

          <View style={styles.ViewAlignContainer}>
            <CustomText
              style={[
                styles.blogLabelText,
                styles.blogLabelHeightAndAlign,
                {
                  color: !blogsState?.isDarkTheme
                    ? Colors.primaryThemeColor
                    : Colors.nonaryThemeColor,
                },
              ]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </CustomText>
          </View>
          <View
            key={1} //keys will be needed for function
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              dataSourceCords[1] = layout.y; // we store this offset values in an array
            }}
            style={styles.ViewAlignContainer}>
            <CustomText
              style={[
                styles.subHeader,
                {
                  color: !blogsState?.isDarkTheme
                    ? Colors.primaryThemeColor
                    : Colors.whiteColor,
                },
              ]}>
              Welcome
            </CustomText>
          </View>
          <View style={styles.ViewAlignContainer}>
            <CustomText
              style={[
                styles.blogLabelText,
                styles.blogLabelHeightAndAlign,
                {
                  color: !blogsState?.isDarkTheme
                    ? Colors.primaryThemeColor
                    : Colors.nonaryThemeColor,
                },
              ]}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </CustomText>
          </View>
          <View style={styles.inBetweenImage}>
            <ImageBackground
              imageStyle={styles.blogAboutImage}
              source={{uri: 'https://picsum.photos/2000'}}></ImageBackground>
          </View>
          <View
            key={2} //keys will be needed for function
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              dataSourceCords[2] = layout.y; // we store this offset values in an array
            }}
            style={styles.ViewAlignContainer}>
            <CustomText
              id="About"
              style={[
                styles.subHeader,
                {
                  color: !blogsState?.isDarkTheme
                    ? Colors.primaryThemeColor
                    : Colors.whiteColor,
                },
              ]}>
              About
            </CustomText>
          </View>
          <View style={styles.ViewAlignContainer}>
            <CustomText
              style={[
                styles.blogLabelText,
                styles.blogLabelHeightAndAlign,
                {
                  color: !blogsState?.isDarkTheme
                    ? Colors.primaryThemeColor
                    : Colors.nonaryThemeColor,
                },
              ]}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the.
            </CustomText>
          </View>
          {/* Resources */}
          <View
            key={3} //keys will be needed for function
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              dataSourceCords[3] = layout.y; // we store this offset values in an array
            }}
            style={styles.ViewAlignContainer}>
            <CustomText
              id="Resources"
              style={[
                styles.subHeader,
                {
                  color: !blogsState?.isDarkTheme
                    ? Colors.primaryThemeColor
                    : Colors.whiteColor,
                },
              ]}>
              Resources
            </CustomText>
          </View>
          <View style={styles.ViewAlignContainer}>
            <CustomText
              style={[
                styles.blogLabelText,
                styles.blogLabelHeightAndAlign,
                {
                  color: !blogsState?.isDarkTheme
                    ? Colors.primaryThemeColor
                    : Colors.nonaryThemeColor,
                },
              ]}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the. Contrary to popular belief, Lorem
              Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from 45 BC, making it over 2000 years
              old.
            </CustomText>
          </View>
          {/* Conclusion */}
          <View
            key={4} //keys will be needed for function
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              dataSourceCords[4] = layout.y; // we store this offset values in an array
            }}
            style={styles.ViewAlignContainer}>
            <CustomText
              id="Conclusion"
              style={[
                styles.subHeader,
                {
                  color: !blogsState?.isDarkTheme
                    ? Colors.primaryThemeColor
                    : Colors.whiteColor,
                },
              ]}>
              Conclusion
            </CustomText>
          </View>
          <View style={styles.ViewAlignContainer}>
            <CustomText
              style={[
                styles.blogLabelText,
                styles.blogLabelHeightAndAlign,
                {
                  color: !blogsState?.isDarkTheme
                    ? Colors.primaryThemeColor
                    : Colors.nonaryThemeColor,
                },
              ]}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the.
            </CustomText>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default ViewBlog;
