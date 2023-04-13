import * as React from "react";
import { Stack, Box } from "@mui/material";
import ImageAssets from "../../../../assets";
import { CustomStyledSuccessDailog } from "./MuiSuccessDailog.style";
import { DailogBoxTypeEnum } from "@sekeron/domain";
import CustomAvatar from "../../avatar/MuiAvatar";
import { MuiStyledButton } from "../../button/MuiButton";

interface IConfirmationDailogProps {
  varient: string;
  handleDailogClose: () => void;
  open: boolean;
  children: React.ReactNode;
  eventSuccessIcon: boolean;
}

const CustomSuccessDailog = ({
  varient,
  open,
  handleDailogClose,
  children,
  eventSuccessIcon,
}: IConfirmationDailogProps) => {
  return (
    <div>
      <CustomStyledSuccessDailog
        varient={varient}
        open={open}
        onClose={handleDailogClose}
      >
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={3}
        >
          <Box>
            {varient ===
              DailogBoxTypeEnum.successDailogWithCheckMark ? (
              <CustomAvatar
                imageAvatars={eventSuccessIcon ?
                  [
                    { id: 1, imageUrl: ImageAssets.ic_success_event },
                  ]
                  : [
                    { id: 1, imageUrl: ImageAssets.ic_success },
                  ]}
                numberOfAvatars={1}
                variant={"rounded"}
                sx={{ width: 60, height: 60 }}
              />
            ) : (
              <CustomAvatar
                imageAvatars={[{ id: 1, imageUrl: ImageAssets.ic_success }]}
                numberOfAvatars={1}
                variant={"rounded"}
                sx={{ width: 60, height: 60 }}
              />
            )}
          </Box>
          <Box>{children}</Box>
          {varient === DailogBoxTypeEnum.successDailogWithButton && (
            <Box>
              <MuiStyledButton>
                Submit
              </MuiStyledButton>
            </Box>
          )}
        </Stack>
      </CustomStyledSuccessDailog>
    </div>
  );
}

export default CustomSuccessDailog