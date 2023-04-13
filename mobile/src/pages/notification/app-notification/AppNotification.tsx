import React from 'react';
import {ScrollView} from 'react-native';
import {Notification} from '../../../json/notificationJson';
import styles from './AppNotification.Style';
import {CommonNotification} from './notificationItem/NotificationItem';

export const AllScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {Notification.length > 0
        ? Notification?.map((item: any) => {
            return (
              <ScrollView style={styles.container} key={item.id}>
                <CommonNotification
                  postAction={item?.postAction && item.postAction}
                  dayOfAction={item.dayOfAction && item.dayOfAction}
                  multiPerson={item.multiPerson && item.multiPerson}
                  Viewed={item.Viewed && item.Viewed}
                  dayAgo={item.dayAgo && item.dayAgo}
                />
              </ScrollView>
            );
          })
        : null}
    </ScrollView>
  );
};
