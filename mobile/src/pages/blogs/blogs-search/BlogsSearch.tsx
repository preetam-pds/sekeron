import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../../../resources/Colors';
import MediaAssets from '../../../assets';
import styles from './BlogsSearch.style';
import CustomText from '../../../common-components/custom-text/CustomText';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/route-names/RouteName';

const BlogsSearch = (props: any) => {
  const {route} = props;
  const navigation: any = useNavigation();

  const searchList = [
    {
      id: 1,
      name: 'Filming',
    },
    {
      id: 2,
      name: 'Photography',
    },
    {
      id: 3,
      name: 'Design',
    },
    {
      id: 4,
      name: 'Fashion',
    },
    {
      id: 5,
      name: 'Music',
    },
    {
      id: 6,
      name: 'Dance',
    },
  ];

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setSearchValue(route?.params?.searchValue);
  }, []);

  const handleFilterDataBySearch = inputValue => {
    setSearchValue(inputValue);
  };

  const handleSearchBar = name => {
    setSearchValue(name);
    navigation.navigate(routes.blogs, {searchValue: name});
    // setTimeout(() =>
    // , 1000);
  };
  const handleEndEdit = () => {
    navigation.navigate(routes.blogs, {searchValue: searchValue});
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.blogsContainer}>
        <View style={styles.blogsInputBoxContainer}>
          <Image
            style={styles.blogsSerachIcon}
            source={MediaAssets.ic_search_inactive}
          />
          <TextInput
            value={searchValue}
            onChangeText={handleFilterDataBySearch}
            style={styles.blogsSerachTextInput}
            placeholderTextColor={Colors.secondaryGreyColor}
            placeholder={'Search'}
            autoFocus={true}
            onEndEditing={handleEndEdit}
          />
        </View>
        <View style={styles.selectCategoryContainer}>
          <CustomText style={styles.selectCategory}>Select Category</CustomText>
          <View style={styles.selectCategoryItem}>
            {searchList?.length > 0 &&
              searchList?.map((item: any) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => handleSearchBar(item.name)}>
                    <CustomText style={styles.selectCategoryText}>
                      {item.name}
                    </CustomText>
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BlogsSearch;
