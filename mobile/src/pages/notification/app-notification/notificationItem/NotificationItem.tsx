import React from 'react';
import {Image, View} from 'react-native';
import CustomText from '../../../../common-components/custom-text/CustomText';
import styles from './NotificationItem.style';

export const CommonNotification = (props: any) => {
  const {multiPerson, postAction, dayOfAction , dayAgo} = props;

  return (
    <View style={{paddingHorizontal: 10}}>
      {dayOfAction ? (
        <CustomText style={styles(props).NotifiedON}>{dayOfAction}</CustomText>
      ) : null}
      <View style={styles(props).container}>
        <View style={styles(props).secondaryContainer}>
          <View style={styles(props).thirdContainer}>
            {multiPerson ? (
              <View>
                <Image
                  style={styles(props).avatarImagePrimary}
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                  }}
                />
                <Image
                  style={styles(props).avatorImageSecondary}
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/44.jpg',
                  }}
                />
              </View>
            ) : (
              <Image
                style={styles(props).avatorSingleImage}
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/43.jpg',
                }}
              />
            )}
          </View>
          <View style={styles(props).textContainer}>
            <View style={styles(props).textMessages}>
              <CustomText style={styles(props).notifierRegularText}>
                Stacey Kibler, neha, Gary hoffman{' '}
                <CustomText style={styles(props).notifierLightText}>
                  and{' '}
                </CustomText>
                <CustomText style={styles(props).notifierRegularText}>
                  32 others{' '}
                </CustomText>
                <CustomText style={styles(props).notifierLightText}>
                  commented on your{' '}
                </CustomText>
                <CustomText style={styles(props).notifierLightText}>
                  post{' '}
                </CustomText>
                <CustomText style={styles(props).notifierRegularText}>
                  Cityscapes 2.0
                </CustomText>
              </CustomText>
            </View>
            <View style={styles(props).semiContainer}>
              <CustomText style={styles(props).notifierTimeAgo}>
                {dayAgo}
              </CustomText>
              <View style={{padding: 5}}>
                {postAction ? (
                  <Image
                    style={styles(props).notifiedImage}
                    source={{
                      uri: 'https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg',
                    }}
                  />
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
