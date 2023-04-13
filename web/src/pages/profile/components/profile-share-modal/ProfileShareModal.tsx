import * as React from 'react';
import { Box, Stack, IconButton, Avatar } from "@mui/material";
import styles from "./ProfileShareModal.module.css";
import {
  MuiProfileShareToModal,
  MuiIconContainer,
  MuiModalSearchContainer,
  MuiModalSearchField,
  MuiNameText,
  MuiProfileNameText,
  MuiTextArea,
} from "../mui-styled-components";
import ImageAssets from "../../../../assets";
import { friends } from "src/core/json/FriendsJson";
import FriendShareButton from '../friend-share-button/FriendShareButton'

interface Props {
  modalOpen: boolean;
  profileSharedTo: { profileId: string; sharedTo: string[] | any[] };
  handleModalClose: () => void;
  handleShare: (shareTo : string | false) => void;
}

const ProfileShareModal = (props: Props) => {

  const { modalOpen, handleModalClose, handleShare, profileSharedTo } = props;

  return (
    <MuiProfileShareToModal open={modalOpen} onClose={handleModalClose}>
      <Box className={styles["modal-details"]}>
        <MuiIconContainer>
          <IconButton onClick={handleModalClose}>
            <img
              src={ImageAssets.ic_close_icon}
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </IconButton>
        </MuiIconContainer>
        <Stack pt={4} ml={4} spacing={2} direction="column">
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Avatar src={ImageAssets.ic_avatar} />
            <MuiTextArea placeholder="Write a message"></MuiTextArea>
          </Stack>
          <Stack my={4}>
            <MuiModalSearchContainer>
              <img src={ImageAssets.ic_search_icon} alt="" />
              <MuiModalSearchField placeholder="Search" />
            </MuiModalSearchContainer>
          </Stack>
          <Stack m={0} p={0} sx={{ maxHeight: "40vh", overflowY: "scroll",flexDirection:'column' }}>
            {friends.map((friend, index) => (
              <Stack
                key={index}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mt={3}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
                  <Avatar
                    src={friend.src}
                    sx={{
                      width: { xs: "50px", md: "60px", lg: "84px" },
                      height: { xs: "50px", md: "60px", lg: "84px" },
                    }}
                  />
                  <div>
                    <MuiNameText>{friend.profileName}</MuiNameText>
                    <MuiProfileNameText>{friend.Name}</MuiProfileNameText>
                  </div>
                </Stack>
                <FriendShareButton handleShare={handleShare} profileSharedTo={profileSharedTo} friendId={friend.userId}/>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Box>
    </MuiProfileShareToModal>
  );
};

export default ProfileShareModal;
