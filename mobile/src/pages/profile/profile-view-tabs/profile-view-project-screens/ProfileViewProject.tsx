import React, {Fragment, useState} from 'react';
import {ScrollView, View} from 'react-native';
import MediaAssets from '../../../../assets';
import {MyProfileJson} from '../../../../json/profileJson/collaboratedProfileJson';
import {MyProjectsJson} from '../../../../json/profileJson/projectsProfileJson';
import {CommonCreateNewNotification} from '../../../notification/common-create-new-notification/CommonCreateNewNotification';
import ProfileProjectCards from './project-common-cards/ProfileProjectCards';

export const ProfileViewProject = (props:any) => {
  const {
    isProjectModal,
    handleProjectModal,
    isCollaboratedModal,
    handleCollaboratedModal,
  } = props;
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
          image={MediaAssets.ic_project_notification}
          createNewText="create your
        first project or explore and collaborate now!"
          createNewButton="Create Project"
        />
      ) : (
        <Fragment>
          <View
            style={{
              flex: 1,
              backgroundColor: 'black',
              opacity: isCollaboratedModal || isProjectModal ? 0.2 : 1,
              // minHeight: '100%',
            }}>
            <View style={{flex: 2}}>
              <ProfileProjectCards
                MyProfileArrayJson={MyProjectsJson}
                title="My Projects (20)"
                isModalOpen={isProjectModal}
                handleSeeAll={handleProjectModal}
                AvatarImages={true}
              />
            </View>
            <View style={{flex: 2}}>
              <ProfileProjectCards
                MyProfileArrayJson={MyProfileJson}
                title="Collaborated (10)"
                isModalOpen={isCollaboratedModal}
                handleSeeAll={handleCollaboratedModal}
                AvatarImages={false}
              />
            </View>
          </View>
        </Fragment>
      )}
    </Fragment>
  );
};
