import * as React from "react";
import { useState, useRef, Fragment, useEffect } from "react";
import { Grid, Stack } from "@mui/material";
import CoverPhoto from "./components/cover-photo/CoverPhoto";
import ProfileAvatar from "./components/profile-avatar/ProfileAvatar";
import ProfileDetail from "./components/profile-detail/ProfileDetail";
import styles from "./Profile.module.css";
import { posts } from "src/core/json/OtherPostsJson";
import { projects } from "src/core/json/OtherProjectsJson";
import {
  skills,
  educations,
  contactDetails,
  address,
  socialMediaDetails,
  ProfileDetails,
} from "src/core/json/OtherProfileDetailsJson";
import { tabData } from "src/core/json/TabsDataJson";
import AboutAccordion from "./components/about-accordion/AboutAccordion";
import Posts from "./components/posts/Posts";
import Projects from "./components/projects/Projects";
import Tabs from "src/components/common/mui-tabs/gradient-tabs/MuiGradientTabs";

type objectArray =
  | { icon: string; type?: string; platform?: string; detail: string }[]
  | [];
type stringArray = string[] | [];

const MyProfile = () => {
  const [tabValue, setTabValue] = useState<Number>(0);
  const [expanded, setExpanded] = useState<string | false>(false);

  const aboutContainerRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    aboutContainerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [expanded]);

  const handleTabChange = (event: React.SyntheticEvent, value: Number) => {
    setTabValue(value);
  };

  return (
    <Fragment>
      <Grid container className={styles["container"]}>
        <Grid item xs={12} md={9}>
          <CoverPhoto />
          <Grid container position={"relative"} pt={1} pb={2}>
            <ProfileAvatar />
            <ProfileDetail />
          </Grid>
          <Grid container justifyContent={"center"} mt={2}>
            <Grid item xs={12}>
              <Tabs
                tabValue={tabValue}
                handleTabChange={handleTabChange}
                tabData={tabData}
              />
            </Grid>
          </Grid>
          <Grid container mt={2} px={{ xs: 1, sm: 6, md: 0 }}>
            {tabValue === 0 &&
              posts.map((post, index) => <Posts post={post} key={index} />)}
            {tabValue === 1 &&
              projects.map((project, index) => (
                <Projects project={project} key={index} />
              ))}
            {tabValue === 2 && (
              <Grid
                item
                xs={12}
                md={8}
                className={styles["about-container"]}
                ref={aboutContainerRef}
              >
                <div className={styles["accordion-container"]}>
                  <Stack
                    sx={{ gap: { xs: 1, sm: 2, md: 2.5, lg: 3 } }}
                    direction="column"
                  >
                    {Object.entries(ProfileDetails).map((detail, index) => {
                      let strArray: stringArray =
                        detail[0] === "skill" ? skills : [];
                      let basicInfo =
                        detail[0] === "basic_info" ? detail[1].data : {};
                      let objArray: objectArray;
                      switch (detail[0]) {
                        case "edu_info":
                          objArray = educations;
                          break;
                        case "contact_info":
                          objArray = contactDetails;
                          break;
                        case "address":
                          objArray = address;
                          break;
                        case "social_media":
                          objArray = socialMediaDetails;
                          break;
                        default:
                          objArray = [];
                      }

                      return (
                        <AboutAccordion
                          key={index}
                          expanded={expanded}
                          setExpanded={setExpanded}
                          title={detail[1].title}
                          category={detail[0]}
                          objArray={objArray}
                          strArray={strArray}
                          basicInfo={basicInfo}
                        />
                      );
                    })}
                  </Stack>
                </div>
              </Grid>
            )}1
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MyProfile;
