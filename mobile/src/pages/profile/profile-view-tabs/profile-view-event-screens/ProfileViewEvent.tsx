import React, {Fragment, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {EventProfileJson} from '../../../../json/profileJson/eventsProfileJson';
import {CommonCreateNewNotification} from '../../../notification/common-create-new-notification/CommonCreateNewNotification';
import {CommonEventCards} from './common-event-cards/CommonEventCards';

export const ProfileViewEvent = () => {
  const [createpost, setCreatePost] = useState(false);

  const handleCreatePost = () => {
    setCreatePost(!createpost);
  };

  return (
    <Fragment>
      {createpost ? (
        <CommonCreateNewNotification
          createpost={createpost}
          handleCreatePost={handleCreatePost}
          createNewText="Your events related notifications will appear here, explore now!"
          createNewButton="Explore"
        />
      ) : (
        <ScrollView style={{minHeight:'100%'}} nestedScrollEnabled={true}>
          {EventProfileJson.length > 0 &&
            EventProfileJson?.map((item, index) => {
              return <CommonEventCards key={index} item={item} />;
            })}
        </ScrollView>
      )}
    </Fragment>
  );
};
