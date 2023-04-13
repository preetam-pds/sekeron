import React from "react";
import {
  styled,
  Step,
  Stepper,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
  Box,
  Avatar,
  StepIconProps,
} from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ImageAssets from "../../../assets/index";

interface ISteps {
  id: number;
  stepLabel: string
}
interface ICustomStepperProps {
  activeStep: number;
  steps: ISteps[];
  handleStepClick?: (index: number, formik?: any) => void;
  formik?: any
}

const MuiStepConnector = styled(StepConnector)(({ theme }) => ({
  padding: 0,
  [`& .${stepConnectorClasses.line}`]: {
    borderTop: `1.5px dashed ${theme.palette.grey[100]}`,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderTop: `1.5px solid ${theme.palette.secondary.main}`,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderTop: `1.5px solid ${theme.palette.secondary.main}`,
    },
  },
}));

const MuiStepIconRoot = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "light" ? theme.palette.grey[700] : theme.palette.primary.dark,
  display: "flex",
  height: 22,
  alignItems: "center",
  width: "100%",
  cursor: "pointer",
  "&&& .MuiSvgIcon-root": {
    fontSize: "2.5rem",
  },
  "& .QontoStepIcon-completedIcon .QontoStepIcon-circle": {
    color: theme.palette.grey[100],
    fontSize: "2.5rem",
  },
  "& .QontoStepIcon-circle-active": {
    // fontSize: 28,
    color: theme.palette.secondary.main,
  },
}));

const StepLabelText = styled(StepLabel)(({ theme }) => ({
  cursor: "ponter",
  "&&& .MuiStepLabel-label.Mui-completed": {
    color: theme.palette.grey[100],
    fontSize: "1.4rem",
    fontWeight: "bold"
  },

  "&&& .MuiStepLabel-label.Mui-active": {
    color: theme.palette.common.white,
  },

  "&&& .MuiStepLabel-label.Mui-disabled": {
    color: theme.palette.grey[100],
    fontWeight: "bold",
    cursor: "ponter",
  },

  ".MuiStepLabel-label": {
    marginTop: "0.5rem !important",
    fontSize: "1.4rem",
    fontFamily: "Comfortaa-REgular",
    [theme.breakpoints.down('md')]: {
      fontSize: "1.2rem",
    },
  },

}));

const StepperWrapper = styled("span")(({ theme }) => ({
  width: "100%",
  "&&& .MuiStepConnector-root": {
    top: "1.1rem !important",
    left: "calc(-51% + 17px) !important",
    right: "calc(48% + 20px) !important",
  }
}));

const MuiStepIcon = ({ active, completed, className }: StepIconProps) => {
  return (
    <MuiStepIconRoot className={className}>
      {completed ? (
        <Avatar
          sx={{ width: 25, height: 25 }}
          src={ImageAssets.ic_stepper_completed}
        />
      ) : active ? (
        <Avatar sx={{ width: 25, height: 25 }} src={ImageAssets.ic_stepper_active} />
      ) : (
        <CircleOutlinedIcon className="QontoStepIcon-circle" />
      )}
    </MuiStepIconRoot>
  );
}

const MuiStepper = ({ activeStep, steps, handleStepClick, formik }: ICustomStepperProps) => {
  return (
    <Box mt={1} sx={{ width: "100%" }}>
      <StepperWrapper>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          orientation="horizontal"
          connector={<MuiStepConnector />}
        >
          {steps.map((item, index) => (
            <Step key={item.id} onClick={() => handleStepClick(index, formik)}>
              <StepLabelText StepIconComponent={MuiStepIcon}>
                {item.stepLabel}
              </StepLabelText>
            </Step>
          ))}
        </Stepper>
      </StepperWrapper>
    </Box>
  );
}

export default MuiStepper
