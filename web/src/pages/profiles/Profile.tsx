import { IconButton, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { ProfileJson } from '@sekeron/domain'
import React from 'react'
import ImageAssets from 'src/assets'
import { MuiButton } from 'src/components/common/button/MuiButton'
import Posts from './posts/Posts'
import styles from './Profile.module.css'
import MoreVertIcon from "@mui/icons-material/MoreVert";


const Profile = () => {
    return (
        <div className={styles['profile-container']}>
            <div className={styles['cover-image-container']}>
                <img className={styles['cover-image']} src={ImageAssets.ic_default_cover_image} alt="" />
            </div>
            <Stack className={styles["profile-details"]}>
                <div className={styles['profile-avatar-container']}>
                    {/* ImageAssets.ic_avatar */}
                    <img src={ImageAssets.ic_default_profile_image} className={ProfileJson.profilePhoto ? styles['profile-photo'] : styles['default-profile-photo']} alt="" />
                </div>

                <Stack direction="column" rowGap={1} sx={{ width: "100%" }}>
                    <Stack justifyContent={"space-between"}>
                        <Stack direction="column" rowGap={1}>
                            <Typography className={styles["profile-name"]}>{ProfileJson.profileName}</Typography>
                            <Typography className={styles["user-name"]}>{ProfileJson.userName}</Typography>
                        </Stack>
                        <Stack alignItems="self-start" columnGap={2}>
                            <MuiButton className={styles["follow"]}>Follow</MuiButton>
                            <MuiButton className={styles["message"]}>Message</MuiButton>
                            <IconButton>
                                <MoreVertIcon
                                    fontSize="large"
                                    sx={{
                                        color: "white",
                                        transform: false ? "rotate(90deg)" : "",
                                        transition: "transform 0.3s ease 0s",
                                    }} />
                            </IconButton>
                        </Stack>
                    </Stack>
                    <Stack columnGap={3}>
                        <Typography className={styles["follower-count"]}><span>{ProfileJson.followers}</span> Followers</Typography>
                        <Typography className={styles["follower-count"]}><span>{ProfileJson.following}</span> Following</Typography>
                        <Typography className={styles["follower-count"]}><span>{ProfileJson.mutuals}</span> Mutual Freinds</Typography>
                    </Stack>
                    <Stack columnGap={1}>
                        {ProfileJson.skillSets.map((item) =>
                            <div className={styles["skill-container"]}>
                                {item.name}
                            </div>
                        )
                        }
                    </Stack>
                </Stack>
            </Stack>

            <div className={styles["posts-container"]}>
                {ProfileJson.posts.map((item) =>
                    <Posts isFollowing={ProfileJson.isFollowing} postData={item} profileName={ProfileJson.profileName} />
                )}
            </div>

        </div>
    )
}

export default Profile 