import { Accordion, Stack, Menu, Modal, Tabs } from "@mui/material";
import { styled } from "@mui/system";

interface profileProps {
  variant?: String;
}

export const MuiTabs = styled(Tabs)({
  ".MuiTabs-flexContainer": {
    width: "100%",
    justifyContent: "center",
    flexGrow: 1,
  },
});

export const MuiAboutSubHeading = styled("p")(({ variant }: profileProps) => ({
  fontFamily: "Comfortaa-Bold",
  fontSize: "inherit",
  color: variant === "active" ? "#fff" : "#a8aebc",
  margin: 0,
}));

export const MuiBasicDescription = styled("p")(({ variant }: profileProps) => ({
  // display: "inline-block",
  fontFamily: "Comfortaa-Light",
  fontSize: "inherit",
  color: variant === "weblink" ? "#5c88ff" : "#a8aebc",
  textDecoration: variant === "weblink" ? "underline" : "none",
  cursor: variant === "weblink" ? "pointer" : "",
  marginTop: '20px',
  lineHeight: "1.7em",
  transition: "all 5s ease 0s",
}));

export const MuiDarkAccordion = styled(Accordion)({
  backgroundColor: "#000000",
  padding: "1em 1em",
  borderRadius: "0.8em",
  '&.Mui-expanded':{
    margin:0
  }
});

export const MuiExpandIcon = styled("img")({
  height: "16px",
  width: "25px",
});

export const MuiAboutIcon = styled("img")({
  width:'95%',
  aspectRatio:'1/0'
});

export const MuiAboutAccordDetailStack = styled(Stack)(
  ({ variant }: profileProps) => ({
    color: "#fff",
    rowGap: variant === "skill" ? 1.5 : 5,
    columnGap: variant === "skill" ? 3 : 1.5,
  })
);

export const MuiAboutText = styled("span")(({ variant }: profileProps) => ({
  fontFamily: "Comfortaa-Light",
  fontSize: "inherit",
  color: "#576078",
  backgroundColor: variant === "skill" ? "#191c22" : "",
  margin: 0,
  padding: variant === "skill" ? "1em" : "",
  border: variant === "skill" ? "1px solid #576078" : "",
  borderRadius: variant === "skill" ? "0.8em" : "",
}));

export const MuiProfileMenu = styled(Menu)({
  "& > .MuiPaper-root": {
    backgroundColor: "#20252f",
    borderRadius: "10px",
  },
});

export const MuiProfileMenuText = styled("p")(({ variant }: profileProps) => ({
  fontFamily: "Comfortaa-Light",
  color: "#ccd0db",
  textAlign: "right",
  fontSize: "20px",
  margin: "1em 1em 1em 3em",
  borderBottom: variant === "first" ? "1px solid #2f3238" : "none",
  paddingBottom: variant === "first" ? "1em" : "0",
  cursor: "pointer",
}));

export const MuiProfileShareToModal = styled(Modal)(({ theme }) => ({
  backdropFilter: "blur(25px)",
  "&.MuiModal-root": {
    width: "100%",
    height: "100%",
  },
  "& > .MuiBox-root": {
    margin: "5% 25% 0 25%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "auto",
    height: "70%",
    borderRadius: "1em",
    position: "relative",
  },
  [theme.breakpoints.down("md")]: {
    "&> .MuiBox-root": {
      margin: "10vh auto",
      width: "80%",
      height: "70%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "&> .MuiBox-root": {
      margin: "10vh auto",
      width: "90%",
      height: "80%",
    },
  },
}));

export const MuiIconContainer = styled("div")({
  width: "5vmax",
  aspectRatio: "1/1",
  textAlign: "right",
  position: "absolute",
  top: -24,
  right: -24,
});

export const MuiModalSearchContainer = styled(Stack)(({ theme }) => ({
  width: "90%",
  fontSize: "22px",
  borderRadius: "1.5em",
  color: "#363940",
  fontFamily: "Comfortaa-Light",
  padding: "0.8em",
  gap: "1%",
  flexDirection: "row",
  backgroundColor: "#151518",
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));
export const MuiTextArea = styled("textarea")(({ theme }) => ({
  fontFamily: "Comfortaa-Light",
  fontSize: "18px",
  color: "#576078",
  width: "85%",
  border: "none",
  outline: "none",
  background: "transparent",
  caretColor: "#363940",
  resize:'none',
  paddingTop:'17px',
  "&::placeholder": {
    color: "inherit",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));
export const MuiModalSearchField = styled("input")({
  font: "inherit",
  color: "inherit",
  width: "90%",
  border: "none",
  outline: "none",
  backgroundColor: "#151518",
  caretColor: "#363940",
  "&::placeholder": {
    color: "inherit",
  },
});

export const MuiNameText = styled('p')(({ theme }) => ({
  fontFamily: "Comfortaa-Light",
  color: "#ffffff",
  fontSize: "20px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

export const MuiProfileNameText = styled('p')(({ theme }) => ({
  fontFamily: "Comfortaa-Regular",
  color: "#4e5567",
  fontSize: "16px",
  marginTop:'5px',
  [theme.breakpoints.down("lg")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));
