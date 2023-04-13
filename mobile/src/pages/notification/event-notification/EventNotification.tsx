import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import MediaAssets from '../../../assets';
import {routes} from '../../../navigation/route-names/RouteName';
import {CommonCreateNewNotification} from '../common-create-new-notification/CommonCreateNewNotification';

export function EventScreen() {
  const [createpost, setCreatePost] = useState(false);
  const navigation: any = useNavigation();

  const handleCreatePost = () => {
    navigation.navigate(routes.events);
    setCreatePost(!createpost);
    
  };

  return (
    <CommonCreateNewNotification
      createpost={createpost}
      handleCreatePost={handleCreatePost}
      image={MediaAssets.ic_event_notification}
      createNewText="Your events related notifications will appear here, explore now!"
      createNewButton="Explore"
    />
  );
}
