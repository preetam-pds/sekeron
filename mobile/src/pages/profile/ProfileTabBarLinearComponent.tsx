import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../resources/Colors';

const ProfileTabBarLinearComponent = ({routes, tabIndex, blurView}) => {
  let current = routes[tabIndex]?.title;

  return (
    <View>
      {blurView ? null : (
        <View>
          {routes?.length > 3 ? (
            <View>
              {current === 'Post' && (
                <LinearGradient
                  colors={[
                    Colors.secondaryVioletColor,
                    Colors.primaryVioletColor,
                    Colors.primaryVioletColor,
                    Colors.primaryVioletColor,
                  ]}
                  start={{x: 0, y: 0.75}}
                  end={{x: 1, y: 0.25}}
                  style={{
                    height: 1,
                    width: '100%',
                  }}></LinearGradient>
              )}
              {current === 'Project' && (
                <LinearGradient
                  colors={[
                    Colors.primaryVioletColor,
                    Colors.secondaryVioletColor,
                    Colors.primaryVioletColor,
                    Colors.primaryVioletColor,
                  ]}
                  start={{x: 0, y: 0.75}}
                  end={{x: 1, y: 0.25}}
                  style={{
                    height: 1,
                    width: '100%',
                  }}></LinearGradient>
              )}
              {current === 'Event' && (
                <LinearGradient
                  colors={[
                    Colors.primaryVioletColor,
                    Colors.primaryVioletColor,
                    Colors.secondaryVioletColor,
                    Colors.primaryVioletColor,
                  ]}
                  start={{x: 0, y: 0.75}}
                  end={{x: 1, y: 0.25}}
                  style={{
                    height: 1,
                    width: '100%',
                  }}></LinearGradient>
              )}
              {current === 'About' && (
                <LinearGradient
                  colors={[
                    Colors.primaryVioletColor,
                    Colors.primaryVioletColor,
                    Colors.primaryVioletColor,
                    Colors.secondaryVioletColor,
                  ]}
                  start={{x: 0, y: 0.75}}
                  end={{x: 1, y: 0.25}}
                  style={{
                    height: 1,
                    width: '100%',
                  }}></LinearGradient>
              )}
            </View>
          ) : (
            <View>
              {current === 'Post' && (
                <LinearGradient
                  colors={[
                    Colors.secondaryVioletColor,
                    Colors.primaryVioletColor,
                    Colors.primaryVioletColor,
                  ]}
                  start={{x: 0, y: 0.75}}
                  end={{x: 1, y: 0.25}}
                  style={{
                    height: 1,
                    width: '100%',
                  }}></LinearGradient>
              )}
              {current === 'Project' && (
                <LinearGradient
                  colors={[
                    Colors.primaryVioletColor,
                    Colors.secondaryVioletColor,
                    Colors.primaryVioletColor,
                  ]}
                  start={{x: 0, y: 0.75}}
                  end={{x: 1, y: 0.25}}
                  style={{
                    height: 1,
                    width: '100%',
                  }}></LinearGradient>
              )}
              {current === 'Event' && (
                <LinearGradient
                  colors={[
                    Colors.primaryVioletColor,
                    Colors.primaryVioletColor,
                    Colors.secondaryVioletColor,
                  ]}
                  start={{x: 0, y: 0.75}}
                  end={{x: 1, y: 0.25}}
                  style={{
                    height: 1,
                    width: '100%',
                  }}></LinearGradient>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default ProfileTabBarLinearComponent;
