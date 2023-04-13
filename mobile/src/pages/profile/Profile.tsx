import {BlurView} from '@react-native-community/blur';
import {PlatformEnum} from '@sekeron/domain';
import React, {useState, useEffect, useRef, memo} from 'react';
import {
  View,
  Dimensions,
  Animated,
  PanResponder,
  Platform,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {useSelector} from 'react-redux';
import CustomText from '../../common-components/custom-text/CustomText';
import {EventProfileJson} from '../../json/profileJson/eventsProfileJson';
import {ProfilePost} from '../../json/profileJson/profilePostjson';
import Colors from '../../resources/Colors';
import ProfileHeader from './profile-header/ProfileHeader';
import {ProfileViewAbout} from './profile-view-tabs/profile-view-about-screens/ProfileViewAbout';
import {CommonEventCards} from './profile-view-tabs/profile-view-event-screens/common-event-cards/CommonEventCards';
import PostProfile from './profile-view-tabs/profile-view-post-screens/ProfileViewPost';
import {ProfileViewProject} from './profile-view-tabs/profile-view-project-screens/ProfileViewProject';
import ProfileView from './profile-view/ProfileView';
import {styles} from './Profile.styles';
import ProfileTabBarLinearComponent from './ProfileTabBarLinearComponent';

const AnimatedIndicator = Animated.createAnimatedComponent(ActivityIndicator);
const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width - 60;
const tabBarHeight = 48;
// const headerHeight = 350;
const SafeStatusBar: any = Platform.select({
  ios: 44,
  android: StatusBar.currentHeight,
});

const PullToRefreshDist = 150;

const Profile = ({route}) => {
  const profileState = useSelector((state: any) => state.ProfileRedux);
  const [collapseSkills, setCollapseSkills] = useState(false);

  const handleCollapseSkills = () => {
    setCollapseSkills(!collapseSkills);
  };

  const headerHeight =
    // self profile
    route &&
    route?.params?.profileId !== profileState?.loginId &&
    route?.params?.profileId !== undefined
      ? Platform.OS == 'ios'
        ? 375
        : 405
      : Platform.OS == 'ios'
      ? 340
      : 350;

  /**
   * stats
   */
  const [tabIndex, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {key: 'tab1_post', title: 'Post'},
    {key: 'tab2_project', title: 'Project'},
    {key: 'tab3_event', title: 'Event'},
    {key: 'tab4_about', title: 'About'},
  ]);
  const [canScroll, setCanScroll] = useState(true);

  const [postData] = useState(ProfilePost);
  const [projectData] = useState(Array(1));
  const [evevtData] = useState(EventProfileJson);
  const [aboutData] = useState(Array(1));

  const [isProjectModal, setIsProjectModal] = useState(false);
  const [isCollaboratedModal, setIsCollaboratedModal] = useState(false);
  const [isMenuOption, setIsMenuOption] = useState(false);

  useEffect(() => {
    if (
      route &&
      route?.params?.profileId !== profileState?.loginId &&
      route?.params?.profileId !== undefined
    ) {
      setRoutes([
        {key: 'tab1_post', title: 'Post'},
        {key: 'tab2_project', title: 'Project'},
        {key: 'tab3_event', title: 'Event'},
      ]);
    } else {
      setRoutes([
        {key: 'tab1_post', title: 'Post'},
        {key: 'tab2_project', title: 'Project'},
        {key: 'tab3_event', title: 'Event'},
        {key: 'tab4_about', title: 'About'},
      ]);
    }
  }, []);

  const handleProjectModal = () => {
    setIsProjectModal(!isProjectModal);
  };

  const handleCollaboratedModal = () => {
    setIsCollaboratedModal(!isCollaboratedModal);
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
        const curListRef: any = listRefArr.current.find(
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
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View style={{marginBottom: 10}}>
            <ProfileHeader
              isOptionsIcon={true}
              blurContent={isProjectModal || isCollaboratedModal}
              isMenuOption={isMenuOption}
              route={route}
              handleMenuOption={handleMenuOption}
            />
          </View>
          <ProfileView
            blurContent={isProjectModal || isCollaboratedModal}
            route={route}
            collapseSkills={collapseSkills}
            handleCollapseSkills={handleCollapseSkills}
          />
        </View>
      </Animated.View>
    );
  };

  const render_Post_Tab1 = ({item, index}) => {
    const attachments: any = item.attachments;
    const postItem = item;
    return (
      <View key={index} style={{flex: 1}}>
        <PostProfile
          item={item}
          attachments={attachments}
          postItem={postItem}
        />
      </View>
    );
  };

  const render_Project_Tab2 = ({item, index}) => {
    return (
      <View key={index} style={{flex: 1}}>
        {isProjectModal ||
          (isCollaboratedModal && (
            <BlurView
              style={styles.blurContainer}
              blurType="dark" // Values = dark, light, xlight .
              blurAmount={10}
              reducedTransparencyFallbackColor="blue"
            />
          ))}
        <ProfileViewProject
          isProjectModal={isProjectModal}
          handleProjectModal={handleProjectModal}
          isCollaboratedModal={isCollaboratedModal}
          handleCollaboratedModal={handleCollaboratedModal}
        />
      </View>
    );
  };

  const render_Event_Tab3 = ({item, index}) => {
    return (
      <View style={{flex: 1}}>
        <CommonEventCards key={index} item={item} />
      </View>
    );
  };

  const render_About_Tab4 = ({item, index}) => {
    return (
      <View style={{flex: 1}}>
        <ProfileViewAbout key={index} />
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
              // padding: 12,
              elevation: isProjectModal || isCollaboratedModal ? 0.2 : 1,
              textAlign: 'center',
              overflow: 'hidden',
              width: route?.length >= 3 ? '100%' : 70,
              color:
                isProjectModal || isCollaboratedModal
                  ? Colors.quaternaryThemeColor
                  : focused
                  ? Colors.whiteColor
                  : Colors.secondaryGreyColor,
            },
            {
              borderBottomColor:
                isProjectModal || isCollaboratedModal
                  ? Colors.quaternaryThemeColor
                  : !focused
                  ? Colors.secondaryDarkBlueColor
                  : Colors.secondaryVioletColor,
              elevation: !focused ? 0.2 : 1,
            },
          ]}>
          {route.title}
        </CustomText>
      </View>
    );
  };

  const renderScene = ({route}) => {
    const focused = route.key === routes[tabIndex].key;
    let numCols;
    let data;
    let renderItem;
    switch (route.key) {
      case 'tab1_post':
        numCols = 1;
        data = postData;
        renderItem = render_Post_Tab1;
        break;
      case 'tab2_project':
        numCols = 1;
        data = projectData;
        renderItem = render_Project_Tab2;
        break;
      case 'tab3_event':
        numCols = 1;
        data = evevtData;
        renderItem = render_Event_Tab3;
        break;
      case 'tab4_about':
        numCols = 1;
        data = aboutData;
        renderItem = render_About_Tab4;
        break;
      default:
        return null;
    }
    return (
      <Animated.FlatList
        scrollToOverflowEnabled={true}
        // scrollEnabled={canScroll}
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
                {useNativeDriver: true},
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
          paddingHorizontal: 10,
          minHeight: windowHeight - SafeStatusBar + headerHeight,
          minWidth: '100%',
        }}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
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
          width: '100%',
        }}>
        {isProjectModal ||
          (isCollaboratedModal && (
            <BlurView
              style={styles.blurContainer}
              blurType="dark" // Values = dark, light, xlight .
              blurAmount={10}
              reducedTransparencyFallbackColor="blue"
            />
          ))}
        <TabBar
          {...props}
          onTabPress={({route, preventDefault}) => {
            if (isListGliding.current) {
              preventDefault();
            }
          }}
          style={styles.tab}
          renderLabel={renderLabel}
          indicatorStyle={styles.indicator}
        />
        <ProfileTabBarLinearComponent
          routes={routes}
          tabIndex={tabIndex}
          blurView={isProjectModal || isCollaboratedModal}
        />
      </Animated.View>
    );
  };

  const renderTabView = () => {
    return (
      <TabView
        swipeEnabled={false}
        onSwipeStart={() => setCanScroll(false)}
        onSwipeEnd={() => setCanScroll(true)}
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

  return (
    <View style={styles.container}>
      {renderTabView()}
      {renderHeader()}
      {renderCustomRefresh()}
    </View>
  );
};

export default memo(Profile);
