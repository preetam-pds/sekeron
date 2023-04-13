import React, { useRef } from "react";
import { Grid } from "@mui/material";
import PersonalisationItem from "./PersonalisationItem";
import styles from "./Personalisation.module.css";
import CardContent from "../../core/json/PersonalisationJson";
import ImageAssets from "../../assets/index";
import { useNavigate } from "react-router-dom";
import routesNames from "src/routes/RouteNames";

const PersonalisationPage = () => {
  const myDiv = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const ScrollDown = () => {
    myDiv?.current?.scrollBy(0, 400);
  };

  return (
    <>
      <Grid
        container
        className={styles["persocifiaton-container"]}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Grid
          item
          container
          xs={10}
          sm={10}
          md={8}
          lg={7}
          xl={7}
          className={styles["personification-card-container"]}
        >
          <h4 className={styles["card-container-heading"]}>
            Select what amuses you!
          </h4>
          <Grid
            container
            ref={myDiv}
            className={styles["card-holder"]}
            xs={12}
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {CardContent.map((Contents: any) => {
              return <PersonalisationItem CardContent={Contents} />;
            })}
          </Grid>
          <Grid item className={styles["swip-down-button"]} xs={12}>
            <img
              className={styles["scroll-button"]}
              onClick={ScrollDown}
              src={ImageAssets.ic_swipedown}
              alt=""
            />
            <button className={styles["lets-get-start-button"]} onClick={() => {
              navigate(routesNames.login);
            }}>
              Lets get started
            </button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PersonalisationPage;
