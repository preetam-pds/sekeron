import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography, AvatarProps } from "@mui/material";
import styles from "./MuiAvatar.module.css";
import { strings } from "@sekeron/domain";

interface IImageAvatars { 
  imageUrl: string;
  id: number;
}

interface CustomAvatarProps extends AvatarProps {
  numberOfAvatars: number;
  imageAvatars: IImageAvatars[];
  variant: "square" | "circular" | "rounded";
  sx: object;
  ClassName?: any
}

const CustomAvatar = (props: CustomAvatarProps) => {
  return (
    <Stack spacing={1}>
      {props?.imageAvatars?.map((item, index) => {
        return (
          <>
            {index + 1 <= props.numberOfAvatars ? (
              <Avatar
                src={item.imageUrl}
                key={index}
                alt=""
                className={
                  props?.imageAvatars?.length > 1
                    ? styles["avatar"]
                    : styles["single-avatar"]
                }
                variant={props.variant}
                sx={props.sx}
              />
            ) : null}
            {index + 1 === props.numberOfAvatars &&
              props?.imageAvatars?.length > props.numberOfAvatars ? (
              <Typography className={props?.className ? props?.className : styles["avatar-typography"]}>{`+${props?.imageAvatars?.length - props.numberOfAvatars
                } ${strings.others}`}</Typography>
            ) : null}
          </>
        );
      })}
    </Stack>
  );
}

export default CustomAvatar