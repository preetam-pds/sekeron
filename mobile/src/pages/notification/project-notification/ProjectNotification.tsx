import React, {Fragment, useState} from 'react';
import MediaAssets from '../../../assets';
import {CommonCreateNewNotification} from '../common-create-new-notification/CommonCreateNewNotification';

export function ProjectScreen() {
  const [createpost, setCreatePost] = useState(false);

  const handleCreatePost = () => {
    setCreatePost(!createpost);
  };
  return (
    <Fragment>
      <CommonCreateNewNotification
        createpost={createpost}
        handleCreatePost={handleCreatePost}
        image={MediaAssets.ic_project_notification}
        createNewText="Your project related notifications will appear here, create your
        first project or explore and collaborate now!"
        createNewButton="Create Project"
        createExploreButton="Explore"
      />
    </Fragment>
  );
}
