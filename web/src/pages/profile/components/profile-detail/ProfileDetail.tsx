import React, { useState } from "react";
import { Grid, Stack, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import styles from "./ProfileDetail.module.css";
import { followDetails } from "src/core/json/OtherProfileFollowDetailJson";
import { MuiProfileMenu, MuiProfileMenuText } from "../mui-styled-components";
import ProfileShareModal from "../profile-share-modal/ProfileShareModal";
import FollowDetails from "../follow-details/FollowDetails";

type profileSharedType = {
  profileId: string;
  sharedTo: string[] | any[];
};

const ProfileDetail = () => {
  const [profileSharedTo, setProfileSharedTo] = useState<profileSharedType>({
    profileId: "10",
    sharedTo: [],
  });
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleShare = (shareTo: string | false) => {
    const updateState = {
      ...profileSharedTo,
      sharedTo: [...profileSharedTo.sharedTo, shareTo],
    };
    setProfileSharedTo(updateState);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const dialogOpen = Boolean(anchorEl);
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={9}
      lg={9}
      xl={9}
      mt={{ xs: 3, md: 0 }}
      pl={{ xs: 0, md: 1, lg: 1 }}
    >
      <Stack
        direction={"column"}
        className={styles["profile-detail-container"]}
        sx={{
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <div
          className={`${styles["follow-message-btn_container"]} ${styles["mobile"]} `}
        >
          <div className={styles["follow-button"]}> Follow </div>
          <div className={styles["message-button"]}> Message </div>
        </div>
        <span className={styles["profile-name"]}>Staccey Kibbler</span>
        <span className={styles["profile-secondary-name"]}>John kA</span>
        <span className={styles["profile-skill"]}>
          Visual Designer and Artist
        </span>
        <div className={styles["follow-details-wrapper"]}>
          {followDetails.map((element, index) => (
            <FollowDetails element={element} key={index} />
          ))}
        </div>
      </Stack>
      <div
        className={`${styles["follow-message-btn_container"]} ${styles["web"]} `}
      >
        <Stack direction="row" spacing={1} alignItems={"center"}>
          <div className={styles["follow-button"]}> Follow </div>
          <div className={styles["message-button"]}>
            <span>Message</span>
          </div>
          <IconButton onClick={handleClick}>
            <MoreVertIcon
              fontSize="large"
              sx={{
                color: "white",
                transform: dialogOpen ? "rotate(90deg)" : "",
                transition: "transform 0.3s ease 0s",
              }}
            />
          </IconButton>
          <MuiProfileMenu
            open={dialogOpen}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MuiProfileMenuText
              className={styles["profile-menu"]}
              variant="first"
              onClick={handleModalOpen}
            >
              Share Profile
            </MuiProfileMenuText>
            <MuiProfileMenuText>Report</MuiProfileMenuText>
          </MuiProfileMenu>
          <ProfileShareModal
            modalOpen={modalOpen}
            handleModalClose={handleModalClose}
            handleShare={handleShare}
            profileSharedTo={profileSharedTo}
          />
        </Stack>
      </div>
    </Grid>
  );
};

export default ProfileDetail;
