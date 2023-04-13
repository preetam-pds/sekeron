import React from 'react';
import { useEffect } from 'react'
import styles from './OtpInput.module.css'
import Input from "react-otp-input";
import { Stack, Typography } from '@mui/material';
import { constants } from '@sekeron/domain';
import { strings } from '@sekeron/domain';

interface OtpInputProps {
  otp: any;
  setOtp: any;
  otpTimer: number;
  resendOtp: () => void;
  setOtpTimer: any
}

export const OtpInput = ({ otp, setOtp, otpTimer, resendOtp, setOtpTimer }: any) => {

  useEffect(() => {
    const timer: any =
      otpTimer > 0 && setInterval(() => setOtpTimer(otpTimer - 1), 1000);
    return () => clearInterval(timer);
  }, [otpTimer]);

  return (
    <>
      <div data-testid="otpinput">
        <Input
          value={otp}
          numInputs={4}
          onChange={(e) => setOtp(e)}
          separator={<span className={styles["otp-input-seperator"]}></span>}
          isInputNum={true}
          shouldAutoFocus={true}
          placeholder="----"
          inputStyle={{
            width: "60px",
            height: "60px",
            borderRadius: "21px",
            border: "solid 1.5px var(--senary-grey-color)",
            backgroundColor: "var(--secondary-theme-color)",
            color: "var(--quinary-blue-color)",
            fontSize: "20px",
            marginTop: "20px",
            // marginRight: "20px"
          }}
          focusStyle={{
            border: "1px solid var(--secondary-blue-color)",
            outline: "none"
          }}
        />
        <Stack spacing={3} justifyContent={"center"} className={styles["resend-otp-container"]}>
          <Typography
            variant="body1"
            className={otpTimer === constants.otpInitialLength ? styles["resend-otp"] : styles["resend-otp-disabled"]}
            onClick={resendOtp}>
            {otpTimer > 9 ? otpTimer === constants.otpInitialLength ? strings.resendOtp : `${strings.resendOtpIn} ${otpTimer} Sec` :
              otpTimer === constants.otpInitialLength ? strings.resendOtp : `${strings.resendOtpIn} 0${otpTimer} Sec`}
          </Typography>
        </Stack>
      </div>
    </>
  );
}
