import * as React from "react";
import { Stack } from "@mui/material";
import { ConfirmationDailogWrapper } from "./MuiConfirmationDailog.style";
import { MuiButton } from "../../button/MuiButton";

interface IConfirmationDailogProps {
  variant?: string;
  checkboxMessage?: string;
  isOpen: boolean;
  handleCancel: () => void;
  handleSave: () => void;
  fisrtButtonLabel: string;
  secondButtonLabel: string;
  children: React.ReactNode
}

const MuiConfirmationDailog = (
  { variant, fisrtButtonLabel, secondButtonLabel, children, isOpen, handleSave, handleCancel }: IConfirmationDailogProps) => {

  return (
    <div>
      <ConfirmationDailogWrapper
        variant={variant}
        open={isOpen}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={4}
          textAlign={'center'}
        >
          <div className="confirmation-message">
            {children}
          </div>
          <Stack columnGap={2}>
            <MuiButton className="cancel" onClick={() => handleCancel()}>{fisrtButtonLabel}</MuiButton>
            <MuiButton className="save" onClick={() => handleSave()}>{secondButtonLabel}</MuiButton>
          </Stack>

        </Stack>
      </ConfirmationDailogWrapper>
    </div>
  );
}

export default MuiConfirmationDailog;
