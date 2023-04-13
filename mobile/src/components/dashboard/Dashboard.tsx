import {useNavigation} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MediaAssets from '../../assets';
import {routes} from '../../navigation/route-names/RouteName';

const DashBoardComponent = () => {
  const navigation: any = useNavigation();

  const handleOnPress = name => {
    navigation.navigate(name);
  };
  const RenderCard = (props: any) => {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          backgroundColor: '#101113',
          width: '40%',
          height: '100%',
          borderRadius: 24,
        }}>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Comfortaa-Bold',
              fontSize: 24,
            }}>
            {props.count}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#17171c',
            padding: 10,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Comfortaa-Bold',
              color: '#a8aebc',
            }}>
            {props.name}
          </Text>
          <Image
            style={{
              height: 10,
              width: 10,
              resizeMode: 'contain',
              marginLeft: 5,
              marginTop: 5,
            }}
            source={MediaAssets.ic_right_arrow}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const RenderExploreCard = (props: any) => {
    return (
      <Fragment>
        <TouchableOpacity
          onPress={()=> props.routeTo && navigation.navigate(props.routeTo)}
          style={{
            backgroundColor: '#17171c',
            width: '85%',
            padding: 20,
            borderRadius: 24,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 20,
            flexDirection: 'row',
          }}>
          <View>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Comfortaa-Bold',
                  fontSize: 16,
                }}>
                {props.title}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: '#a8aebc',
                  fontFamily: 'Comfortaa-Bold',
                  fontSize: 14,
                }}>
                There’s a lot happening around you! Lets explore.
              </Text>
            </View>
          </View>
          <View style={{marginHorizontal: 4}}>
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                marginLeft: 5,
              }}
              source={MediaAssets.ic_right_arrow}
            />
          </View>
        </TouchableOpacity>
      </Fragment>
    );
  };

  return (
    <ScrollView contentContainerStyle={{paddingBottom: '25%'}}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          height: '45%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <RenderCard
            name="My Projects"
            onPress={() => handleOnPress('MyProjects')}
            count="9"
          />
          <RenderCard
            onPress={() => handleOnPress('MyCollaborations')}
            name="My Collaborations"
            count="7"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <RenderCard
            onPress={() => handleOnPress('MyEvents')}
            name="My Events"
            count="10"
          />
          <RenderCard
            onPress={() => handleOnPress('MyCalendar')}
            name="My Calendar"
            count="6"
          />
        </View>
      </View>
      <View style={{alignSelf: 'center'}}>
        <RenderExploreCard title="Explore Events" routeTo={routes.events} />
        <RenderExploreCard title="Explore Projects" />
        <RenderExploreCard title="Explore Blogs" routeTo={routes.blogs} />
      </View>
    </ScrollView>
  );
};

export default DashBoardComponent;
