import React, {Fragment, useState} from 'react';
import MediaAssets from '../../../assets';
import {OverlayExample} from '../../../common-components/flash-message/FlashMessage';
import {CommonCreateNewNotification} from '../common-create-new-notification/CommonCreateNewNotification';

export function PostScreen() {
  const [createpost, setCreatePost] = useState(false);

  const handleCreatePost = () => {
    setCreatePost(!createpost);
  };

  return (
    <Fragment>
      <CommonCreateNewNotification
        createpost={createpost}
        handleCreatePost={handleCreatePost}
        image={MediaAssets.ic_post_notification}
        createNewText="Your post related notifications will appear here, create your
              first post or explore now!"
        createNewButton="Create Post"
        createExploreButton="Explore"
      />
      {createpost ? (
        <OverlayExample
          isSuccess
          isOpen={createpost}
          handleCloser={handleCreatePost}
        />
      ) : null}
    </Fragment>
  );
}
