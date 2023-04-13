import React, {memo, useEffect, useRef, useState} from 'react';
import {
  View,
  Dimensions,
  Animated,
  ActivityIndicator,
  Platform,
  StatusBar,
  PanResponder,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';
import CustomText from '../../common-components/custom-text/CustomText';
import Colors from '../../resources/Colors';
import ProfileHeader from '../profile/profile-header/ProfileHeader';
import {styles} from './EventComponent.styles';
import EventCalendar from './eventScreen/EventCalendar';
import BestOfEvents from './bestOfEvents/BestOfEvents';
import {
  BestOfEventsJson,
  competitionJson,
  workshopJson,
} from '../../json/eventsJson/eventsJson';
import MediaAssets from '../../assets';
import BottomSheet from '../../common-components/bottom-sheet/BottomSheet';
import EventFilterComponent from './eventScreen/EventFilterComponent';
import {PlatformEnum} from '@sekeron/domain';

const AnimatedIndicator = Animated.createAnimatedComponent(ActivityIndicator);
const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;
const tabBarHeight = 50;
// const headerHeight = 170;
const headerHeight = Platform.OS == PlatformEnum.ios ? 155 : 170;

const SafeStatusBar: any = Platform.select({
  ios: 44,
  android: StatusBar.currentHeight,
});

const PullToRefreshDist = 150;

const EventsComponent = () => {
  /**
   * stats
   */
  const [tabIndex, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'tab1_post', title: 'Best of Events'},
    {key: 'tab2_project', title: 'Workshops'},
    {key: 'tab3_event', title: 'Competitions'},
    // {key: 'tab4_about', title: 'About'},
  ]);
  const [canScroll, setCanScroll] = useState(true);
  const [applyFilter, setApplyFilter] = useState(false);

  const [bestEventsData] = useState(BestOfEventsJson);
  const [workshopData] = useState(workshopJson);
  const [competitionData] = useState(competitionJson);

  const [isMenuOption, setIsMenuOption] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [isMonthSelectionVisible, setMonthSelectionVisible] = useState(false);
  const [isYearSelectionVisible, setYearSelectionVisible] = useState(false);

  const handleMonthSelectionVisibleScroll = value => {
    setMonthSelectionVisible(value);
  };

  const handleYearSelectionVisibleScroll = value => {
    setYearSelectionVisible(value);
  };

  const handleFilterModal = () => {
    setApplyFilter(!applyFilter);
  };

  const handleMenuOption = () => {
    setIsMenuOption(!isMenuOption);
  };

  /**
   * ref
   */
  const scrollY: any = useRef(new Animated.Value(0)).current;
  const headerScrollY: any = useRef(new Animated.Value(0)).current;
  // for capturing header scroll on Android
  const headerMoveScrollY: any = useRef(new Animated.Value(0)).current;
  const listRefArr: any = useRef([]);
  const listOffset: any = useRef({});
  const isListGliding: any = useRef(false);
  const headerScrollStart: any = useRef(0);
  const _tabIndex: any = useRef(0);
  const refreshStatusRef: any = useRef(false);

  /**
   * PanResponder for header
   */
  const headerPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onStartShouldSetPanResponder: (evt, gestureState) => {
        headerScrollY.stopAnimation();
        syncScrollOffset();
        return false;
      },

      onMoveShouldSetPanResponder: (evt, gestureState) => {
        headerScrollY.stopAnimation();
        return Math.abs(gestureState.dy) > 5;
      },
      onPanResponderEnd: (evt, gestureState) => {
        handlePanReleaseOrEnd(evt, gestureState);
      },
      onPanResponderMove: (evt, gestureState) => {
        const curListRef = listRefArr.current.find(
          ref => ref.key === routes[_tabIndex.current].key,
        );
        const headerScrollOffset = -gestureState.dy + headerScrollStart.current;
        if (curListRef.value) {
          // scroll up
          if (headerScrollOffset > 0) {
            curListRef.value.scrollToOffset({
              offset: headerScrollOffset,
              animated: false,
            });
            // start pull down
          } else {
            if (Platform.OS === PlatformEnum.ios) {
              curListRef.value.scrollToOffset({
                offset: headerScrollOffset / 3,
                animated: false,
              });
            } else if (Platform.OS === 'android') {
              if (!refreshStatusRef.current) {
                headerMoveScrollY.setValue(headerScrollOffset / 1.5);
              }
            }
          }
        }
      },
      onShouldBlockNativeResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        headerScrollStart.current = scrollY._value;
      },
    }),
  ).current;

  /**
   * PanResponder for list in tab scene
   */
  const listPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        headerScrollY.stopAnimation();
        return false;
      },
      onShouldBlockNativeResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        headerScrollY.stopAnimation();
      },
    }),
  ).current;

  /**
   * effect
   */
  useEffect(() => {
    scrollY.addListener(({value}) => {
      const curRoute = routes[tabIndex].key;
      listOffset.current[curRoute] = value;
    });

    headerScrollY.addListener(({value}) => {
      listRefArr.current.forEach(item => {
        if (item.key !== routes[tabIndex].key) {
          return;
        }
        if (value > headerHeight || value < 0) {
          headerScrollY.stopAnimation();
          syncScrollOffset();
        }
        if (item.value && value <= headerHeight) {
          item.value.scrollToOffset({
            offset: value,
            animated: false,
          });
        }
      });
    });
    return () => {
      scrollY.removeAllListeners();
      headerScrollY.removeAllListeners();
    };
  }, [routes, tabIndex]);

  /**
   *  helper functions
   */
  const syncScrollOffset = () => {
    const curRouteKey = routes[_tabIndex.current].key;

    listRefArr.current.forEach((item: any) => {
      if (item.key !== curRouteKey) {
        if (scrollY._value < headerHeight && scrollY._value >= 0) {
          if (item.value) {
            item.value.scrollToOffset({
              offset: scrollY._value,
              animated: false,
            });
            listOffset.current[item.key] = scrollY._value;
          }
        } else if (scrollY._value >= headerHeight) {
          if (
            listOffset.current[item.key] < headerHeight ||
            listOffset.current[item.key] == null
          ) {
            if (item.value) {
              item.value.scrollToOffset({
                offset: headerHeight,
                animated: false,
              });
              listOffset.current[item.key] = headerHeight;
            }
          }
        }
      }
    });
  };

  const startRefreshAction = () => {
    if (Platform.OS === PlatformEnum.ios) {
      listRefArr.current.forEach(listRef => {
        listRef.value.scrollToOffset({
          offset: -50,
          animated: true,
        });
      });
      refresh().finally(() => {
        syncScrollOffset();
        // do not bounce back if user scroll to another position
        if (scrollY._value < 0) {
          listRefArr.current.forEach(listRef => {
            listRef.value.scrollToOffset({
              offset: 0,
              animated: true,
            });
          });
        }
      });
    } else if (Platform.OS === 'android') {
      Animated.timing(headerMoveScrollY, {
        toValue: -150,
        duration: 300,
        useNativeDriver: true,
      }).start();
      refresh().finally(() => {
        Animated.timing(headerMoveScrollY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    }
  };

  const handlePanReleaseOrEnd = (evt, gestureState) => {
    // console.log('handlePanReleaseOrEnd', scrollY._value);
    syncScrollOffset();
    headerScrollY.setValue(scrollY._value);
    if (Platform.OS === PlatformEnum.ios) {
      if (scrollY._value < 0) {
        if (scrollY._value < -PullToRefreshDist && !refreshStatusRef.current) {
          startRefreshAction();
        } else {
          // should bounce back
          listRefArr.current.forEach(listRef => {
            listRef.value.scrollToOffset({
              offset: 0,
              animated: true,
            });
          });
        }
      } else {
        if (Math.abs(gestureState.vy) < 0.2) {
          return;
        }
        Animated.decay(headerScrollY, {
          velocity: -gestureState.vy,
          useNativeDriver: true,
        }).start(() => {
          syncScrollOffset();
        });
      }
    } else if (Platform.OS === 'android') {
      if (
        headerMoveScrollY._value < 0 &&
        headerMoveScrollY._value / 1.5 < -PullToRefreshDist
      ) {
        startRefreshAction();
      } else {
        Animated.timing(headerMoveScrollY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  const onMomentumScrollBegin = () => {
    isListGliding.current = true;
  };

  const onMomentumScrollEnd = () => {
    isListGliding.current = false;
    syncScrollOffset();
    // console.log('onMomentumScrollEnd');
  };

  const onScrollEndDrag = e => {
    syncScrollOffset();

    const offsetY = e.nativeEvent.contentOffset.y;
    // console.log('onScrollEndDrag', offsetY);
    // iOS only
    if (Platform.OS === PlatformEnum.ios) {
      if (offsetY < -PullToRefreshDist && !refreshStatusRef.current) {
        startRefreshAction();
      }
    }

    // check pull to refresh
  };

  const refresh = async () => {
    console.log('-- start refresh');
    refreshStatusRef.current = true;
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('done');
      }, 2000);
    }).then(value => {
      console.log('-- refresh done!');
      refreshStatusRef.current = false;
    });
  };

  /**
   * render Helper
   */
  const renderHeader = () => {
    const y = scrollY.interpolate({
      inputRange: [0, headerHeight],
      outputRange: [0, -headerHeight],
      extrapolateRight: 'clamp',
      // extrapolate: 'clamp',
    });
    return (
      <Animated.View
        {...headerPanResponder.panHandlers}
        style={[styles.header, {transform: [{translateY: y}]}]}>
        <View style={{width: '100%', height: tabBarHeight}}>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={{marginBottom: 10}}>
              <ProfileHeader
                isMenuOption={isMenuOption}
                customName={'Events'}
                backArrow={true}
                handleMenuOption={handleMenuOption}
              />
            </View>
            <EventCalendar
              isMonthSelectionVisible={isMonthSelectionVisible}
              isYearSelectionVisible={isYearSelectionVisible}
              handleMonthSelectionVisibleScroll={
                handleMonthSelectionVisibleScroll
              }
              handleYearSelectionVisibleScroll={
                handleYearSelectionVisibleScroll
              }
            />
            {
              <TouchableOpacity
                onPress={handleFilterModal}
                style={styles.filterIconContainer}>
                <Image
                  source={MediaAssets.ic_filter_icon}
                  style={styles.filterImage}
                />
              </TouchableOpacity>
            }
          </View>
        </View>
      </Animated.View>
    );
  };

  const render_Post_Tab1 = ({item, index}) => {
    const attachments: any = item.attachments;
    return (
      <View style={{flex: 1}}>
        <BestOfEvents item={item} attachments={attachments} />
      </View>
    );
  };

  const render_Post_Tab2 = ({item, index}) => {
    const attachments: any = item.attachments;
    return (
      <View style={{flex: 1}}>
        <BestOfEvents item={item} attachments={attachments} />
      </View>
    );
  };

  const render_Post_Tab3 = ({item, index}) => {
    const attachments: any = item.attachments;
    return (
      <View style={{flex: 1}}>
        <BestOfEvents item={item} attachments={attachments} />
      </View>
    );
  };

  const renderLabel = ({route, focused}) => {
    return (
      <View style={{flex: 1, width: '100%', overflow: 'hidden'}}>
        <CustomText
          style={[
            styles.label,
            {
              // flex: 1,
              marginVertical: 15,
              marginLeft: 25,
              backgroundColor: focused
                ? Colors.whiteColor
                : Colors.primaryThemeColor,
              color: focused ? Colors.primaryThemeColor : Colors.whiteColor,
              padding: 9,
              // paddingHorizontal:18,
              borderRadius: 12,
              overflow: 'hidden',
              textAlign: 'center',
              // elevation: !focused ? 0.2 : 1,
              fontFamily: 'Comfortaa-Light',
            },
          ]}>
          {route.title}
        </CustomText>
      </View>
    );
  };

  const handleLoadMore = async route => {
    if (!isLoading) {
      setIsLoading(true);

      // bestEventsData
      const updatedBestEventData: any =
        bestEventsData?.length < 8 &&
        bestEventsData?.map(item => {
          return {...item, id: item.id + 4};
        });

      // workshopData
      const updatedWorkShopData: any =
        workshopData?.length < 8 &&
        workshopData?.map(item => {
          return {...item, id: item.id + 4};
        });

      // competitionData
      const updatedCompetitionData: any =
        competitionData?.length < 6 &&
        competitionData?.map(item => {
          return {...item, id: item.id + 4};
        });

      // make API request for more data and update the state
      // when the request is complete, set isLoading back to false
      if (bestEventsData?.length < 8 && route?.key === 'tab1_post') {
        await setTimeout(() => {
          setIsLoading(false);
          bestEventsData?.push(...updatedBestEventData);
        }, 5000);
      } else if (workshopData?.length < 8 && route?.key === 'tab2_project') {
        await setTimeout(() => {
          setIsLoading(false);
          workshopData?.push(...updatedWorkShopData);
        }, 5000);
      } else if (competitionData?.length < 6 && route?.key === 'tab3_event') {
        await setTimeout(() => {
          setIsLoading(false);
          competitionData?.push(...updatedCompetitionData);
        }, 5000);
      } else {
        setIsLoading(false);
      }
    }
  };

  const renderFooter = route => {
    return isLoading && route.key === routes[tabIndex].key ? (
      <ActivityIndicator size="large" animating />
    ) : null;
  };

  const renderScene = ({route}) => {
    const focused: any = route.key === routes[tabIndex].key;
    let numCols;
    let data;
    let renderItem;
    switch (route.key) {
      case 'tab1_post':
        numCols = 1;
        data = bestEventsData;
        renderItem = render_Post_Tab1;
        break;
      case 'tab2_project':
        numCols = 1;
        data = workshopData;
        renderItem = render_Post_Tab2;
        break;
      case 'tab3_event':
        numCols = 1;
        data = competitionData;
        renderItem = render_Post_Tab3;
        break;

      default:
        return null;
    }
    return (
      <Animated.FlatList
        scrollToOverflowEnabled={true}
        scrollEnabled={canScroll}
        {...listPanResponder.panHandlers}
        numColumns={numCols}
        ref={ref => {
          if (ref) {
            const found = listRefArr.current.find(e => e.key === route.key);
            if (!found) {
              listRefArr.current.push({
                key: route.key,
                value: ref,
              });
            }
          }
        }}
        scrollEventThrottle={16}
        onScroll={
          focused
            ? Animated.event(
                [
                  {
                    nativeEvent: {contentOffset: {y: scrollY}},
                  },
                ],
                {
                  useNativeDriver: true,
                  listener: event => {
                    isMonthSelectionVisible &&
                      handleMonthSelectionVisibleScroll(false);
                    isYearSelectionVisible &&
                      handleYearSelectionVisibleScroll(false);
                  },
                },
              )
            : null
        }
        onMomentumScrollBegin={onMomentumScrollBegin}
        onScrollEndDrag={onScrollEndDrag}
        onMomentumScrollEnd={onMomentumScrollEnd}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        ListHeaderComponent={() => <View style={{height: 10}} />}
        contentContainerStyle={{
          paddingTop: headerHeight + tabBarHeight,
          paddingHorizontal: 5,
          minHeight: windowHeight - SafeStatusBar + headerHeight,
          minWidth: '100%',
        }}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => handleLoadMore(route)}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => renderFooter(route)}
      />
    );
  };

  const renderTabBar = props => {
    const y = scrollY.interpolate({
      inputRange: [0, headerHeight],
      outputRange: [headerHeight, 0],
      // extrapolate: 'clamp',
      extrapolateRight: 'clamp',
    });
    return (
      <Animated.View
        style={{
          top: 0,
          zIndex: 1,
          position: 'absolute',
          transform: [{translateY: y}],
          // width: '100%',
          width: windowWidth,
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TabBar
            {...props}
            screenOptions={{
              tabBarItemStyle: {width: 'auto'},
            }}
            onTabPress={({route, preventDefault}) => {
              if (isListGliding.current) {
                preventDefault();
              }
            }}
            style={styles.tab}
            labelStyle={{width: 0}} // set custom width value for label
            tabStyle={{width: '95%', padding: 0, margin: 10}}
            // dragEnabled={true}
            renderLabel={renderLabel}
            indicatorStyle={styles.indicator}
          />
        </ScrollView>
      </Animated.View>
    );
  };

  const renderTabView = () => {
    return (
      <TabView
        swipeEnabled={false}
        onSwipeStart={() => setCanScroll(false)}
        onSwipeEnd={() => {
          setCanScroll(true);
        }}
        onIndexChange={id => {
          _tabIndex.current = id;
          setIndex(id);
        }}
        navigationState={{index: tabIndex, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        initialLayout={{
          height: 0,
          width: windowWidth,
        }}
        lazy={false}
      />
    );
  };

  const renderCustomRefresh = () => {
    // headerMoveScrollY
    return Platform.select({
      ios: (
        <AnimatedIndicator
          style={{
            top: -50,
            position: 'absolute',
            alignSelf: 'center',
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-100, 0],
                  outputRange: [120, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
          animating
        />
      ),
      android: (
        <Animated.View
          style={[
            styles.spinnerLoaderAndroid,
            {
              transform: [
                {
                  translateY: headerMoveScrollY.interpolate({
                    inputRange: [-300, 0],
                    outputRange: [150, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}>
          <ActivityIndicator animating />
        </Animated.View>
      ),
    });
  };

  const renderFilter = () => {
    return (
      <View>
        <BottomSheet
          renderItem={
            <EventFilterComponent handleFilterModal={handleFilterModal} />
          }
          componentOrObject={true}
          setModalVisible={setApplyFilter}
          isModalVisible={applyFilter}
          toggleModal={handleFilterModal}
          backgroundColor={Colors.secondaryThemeColor}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderTabView()}
      {renderHeader()}
      {renderCustomRefresh()}
      {renderFilter()}
    </View>
  );
};

export default memo(EventsComponent);
